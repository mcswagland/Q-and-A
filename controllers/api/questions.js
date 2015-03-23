var router = require('express').Router()
var Question = require('../../models/question')

router.get('/questions', function(req, res, next){
    Question.find()
        .sort('-date')
        .exec(function(err, questions){
            if(err){ return next (err) }
            res.json(questions)
        })
})

router.post('/questions', function(req, res, next){
    var question = new Question({
        title: req.body.title,
        body: req.body.body })
    question.username = req.auth.username;
    question.save(function(err, question){
        if(err){ return next(err) }
        res.status(201).json(question)
    })
})

module.exports = router