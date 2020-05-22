const fs = require('fs');

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

let nodeGeocoder = require('node-geocoder');

const Place = require('../models/place');
const User = require('../models/user');

const HttpError = require('../models/http-error');

const getPlaceById = async (req, res, next) => {
    const placeId = req.params.pid;
    let place
    try {
        place = await Place.findById(placeId);
    } catch (err) {
        const error = new HttpError("Something went wrong, could not find place", 500);
        return next(error);
    }

    if (!place) {
        const error = new HttpError('Could not find a place for the provided id', 404);
        return next(error);
    }

    res.json({
        place: place.toObject({getters: true})
    });
}

const getPlacesByUserId = async (req, res, next) => {
    const userId = req.params.uid;
    let userWithPlaces
    try {
        userWithPlaces = await User.findById(userId).populate('places');
    } catch (err) {
        const error = new HttpError('Fetching places failed', 404);
        return next(error);
    }
    
    
    if (!userWithPlaces || userWithPlaces.length === 0) {
        return next(new HttpError('Could not find a places for the provided user id', 404));
    }

    res.json({
        places: userWithPlaces.places.map(place => place.toObject({getters: true}))
    });
};

const createPlace = (req, res, next) => {
    let options = {
        provider: 'openstreetmap'
      };
       
    let geoCoder = nodeGeocoder(options);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid inputs passed, please check your data', 422);
    }

    const { title, description, address } = req.body;

    let coordinates={};
    User.findById(req.userData.userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({message: 'Could not find a user for the provided id'});
            }
            geoCoder.geocode(address)
            .then((c)=> {
                if (c.length !== 0) {
                    coordinates = {
                        lat: c[0].latitude,
                        lng: c[0].longitude
                    };
                    const createdPlace = new Place({
                        title,
                        description,
                        address,
                        location: coordinates,
                        image: req.file.path,
                        creator: req.userData.userId
                    });
                    mongoose.startSession()
                        .then (s => {
                            s.startTransaction();
                            createdPlace.save({session: s})
                            .then(() => {
                                user.places.push(createdPlace);
                                user.save({session: s})
                                    .then(() => {
                                        s.commitTransaction()
                                        .then(() => {
                                            res.status(201).json({place: createdPlace});
                                        })
                                    })
                            })
                            .catch(err => {
                                return res.status(500).json({message: 'Creating place failed, Please try again'});
                            });
                        })
                    
                    
                } else {
                    return res.status(422).json({message: 'Could not find a places for the provided address'});
                }
            })
        })
        .catch(err => {
            return res.status(500).json({message: 'Something went wrong'});
        })
};

const updatePlace = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next ( new HttpError('Invalid inputs passed, please check your data', 422) );
    }

    const { title, description } = req.body;
    const placeId = req.params.pid;

    let place;
    try {
        place = await Place.findById(placeId);
    } catch(err) {
        const error = new HttpError('Something went wrong, Could not update place', 500);
        return next(error);
    }

    if (place.creator.toString() !== req.userData.userId) {
        const error = new HttpError('You are not allowed to edit this place', 401);
        return next(error);
    }

    place.title = title;
    place.description = description;

    try {
        await place.save();
    } catch (err) {
        const error = new HttpError('Something went wrong, Could not update place', 500);
        return next(error);
    }

    res.status(200).json({place: place.toObject({getters: true})});
}

const deletePlace = async (req, res, next) => {
    const placeId = req.params.pid
    let place;
    try {
        place = await Place.findById(placeId).populate('creator');
    } catch (err) {
        const error = new HttpError('Something went wrong, Could not delete place', 500);
        return next(error);
    }

    if (!place) {
        const error = new HttpError('Could not find place for provided id', 404);
        return next(error);
    }

    if (place.creator.id !== req.userData.userId) {
        const error = new HttpError('You are not allowed to delete this place', 401);
        return next(error);
    }

    const imagePath = place.image;

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await place.remove({session: sess});
        place.creator.places.pull(place);
        await place.creator.save({session: sess});
        await sess.commitTransaction();
    } catch (err) {
        const error = new HttpError('Something went wrong, Could not update place', 500);
        return next(error);
    }
    fs.unlink(imagePath, err => {
        console.log(err);
    })
    res.status(200).json({message: 'Deleted place!!!!!!!'});
}

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;