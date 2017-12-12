// const express = require('express');
// const router = new express.Router();
const router = require('express').Router()
const models = require('../db/models');
const Campus = models.Campuses;

router.get('/',(req,res,next)=>{
    Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

router.get('/:id', (req,res,next)=>{
    let id = req.params.id
    Campus.findOne({
        where: {id},
        include: [{ all: true }]
    })
    .then(campus => res.json(campus))
    .catch(next)
})

router.post('/', (req,res,next)=>{
    Campus.create(req.body)
    .then((campus) => res.json(campus))
    .catch(next)
})

router.put('/:id', (req,res,next)=>{
    let id = req.params.id
    Campus.findOne({
        where: {id}
    })
    .then((campus)=>{
        campus.update(req.body)
    })
    .then(()=>{
        res.status(200).end()
    })
    .catch(next)
})

router.delete('/:id', (req,res,next)=>{
    let id = req.params.id
    Campus.findOne({
        where: {id}
    })
    .then(campus => campus.destroy())
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router;



