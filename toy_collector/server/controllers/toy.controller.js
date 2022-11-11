const Toy = require('../models/toy.model');

module.exports = {
    getAllToys: (req, res) => {
        Toy.find()
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    getOneToy:(req, res)=> {
        Toy.findById(req.params.id)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    addToy:(req, res)=> {
        Toy.create(req.body)
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    },

    updateToy:(req, res)=>{
        Toy.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }, 

    deleteToy:(req, res)=>{
        Toy.deleteOne({_id:req.params.id})
        .then((result)=> {
            res.json(result)
        }).catch((err)=> {
            res.status(400).json(err)
        })
    }
}