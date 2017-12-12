// const express = require('express');
// const router = new express.Router();
const router = require('express').Router()
const models = require('../db/models');
const Student = models.Students;

router.get('/',(req,res,next)=>{
    Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

router.get('/:id', (req,res,next)=>{
    let id = req.params.id
    Student.findOne({
        where: {id},
        include: [{ all: true }]
    })
    .then((student) => {
        res.json(student)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    Student.create(req.body)
    .then((student) => res.json(student))
    .catch(next)
})

router.put('/:id', (req,res,next) => {
    let id = req.params.id
    Student.findOne({
        where: {id}
    })
    .then((student)=>{
        student.update(req.body)
    })
    .then(()=>{
        res.status(200).end()
    })
    .catch(next)
})

router.delete('/:id', (req,res,next)=>{
    let id = req.params.id
    Student.findOne({
        where: {id}
    })
    .then(student => student.destroy())
    .then(() => res.status(204).end())//why do you need to call end()?
    .catch(next)
})



module.exports = router;