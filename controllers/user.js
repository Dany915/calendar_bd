const { response } = require('express');

const userGet = (req, res = response) => {

    const query = req.query;
    
    res.json({
        msg: 'get API - controlador',
        query
    });
}

const userPut = (req, res = response) => {

    const id = req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const userPost = (req, res = response) => {
    const {nombre} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}