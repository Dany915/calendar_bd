const { response } = require('express');

const Event = require('../models/event');

const eventGet = async (req, res = response) => {

    //const query = req.query;

    const events = await Event.find();
    
    res.json({
        events
    });
}

const eventPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const eventPost = async (req, res = response) => {
    const body = req.body;
    const event = new  Event( body);

    await event.save();

    res.json({
        msg: 'post API - controlador',
        event
    })
}

const eventDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    eventGet,
    eventPut,
    eventPost,
    eventDelete
}