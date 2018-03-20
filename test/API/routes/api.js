const express = require('express');
const router = express.Router();

const Prize = require('../models/prize');

router.get('/prizes', (req, res) => {
    Prize.find({}, (err, prizes) => {
        return res.json(prizes);
    });
});

router.post('/prizes/', (req, res) => {
    delete req.body._id;
    Prize.create(req.body, (err, prize) => {
        if (err)  {
            res.json(err)
        }
        else return res.json(prize);
    });
});

router.delete('/prizes/:id', (req, res) => {
    Prize.deleteOne({_id: req.params.id}, (err, data) => { 
        if (err) {
            res.json(err)
        } else {
            res.json(true)
        }
    });
});

router.put('/prizes/:id', (req, res) => {
    Prize.update({_id:req.params.id}, req.body, (err, prize) => {
        if (err) {
            res.json(err)
        } else {
            res.json(true)
        }
    });
});

router.get('/prizes/:brand_name', (req, res) => {
    Prize.find({ brand_name: req.params.brand_name}, (err, prizes) => {
        return res.json(prizes);
    });
});



module.exports = router;