const path = require('path');
var Pet = require('./models')

module.exports = {

    getAllTask: (req, res) => {
        Pet.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOneTask: (req, res) => {
        const ID = req.params.id;
        Pet.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err => res.json(err))
    },

    createTask: (req, res) => {
        const DATA = req.body;
        Pet.create(DATA)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    // insertManyTask: (req, res) => {
    //     const DATA = req.body;
    //     Pet.insertMany(DATA).then(data => res.json(data)).catch(err => res.json(err))

    // },

    updateTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Pet.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },

    deleteTask: (req, res) => {
        const ID = req.params.id;
        Pet.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    },

    // deleteAllTask: (req, res) => {
    //     Pet.deleteMany({}).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    // },

    ///////////////////////////////////////////////////////////////
    // getAllSkill: (req, res) => {
    //     Skill.find().then(data => res.json(data)).catch(err => res.json(err))
    // },

    // getOneSkill: (req, res) => {
    //     const ID = req.params.id;
    //     Skill.find({ _id: ID }).then(data => {
    //         console.log('successfully get one!');
    //         res.json(data)
    //     }).catch(err => res.json(err))
    // },


    // createSkill(req, res) {
    //     const ID = req.params.id;
    //     const DATA = req.body;
    //     Skill.create(DATA)
    //         .then(data => {
    //             Pet.findOneAndUpdate({ _id: ID }, { $push: { skill: data } })
    //                 .then(data => res.json(data))
    //                 .catch(err => res.json(err))
    //         })
    //         .catch(err => res.json(err))
    // },

    // updateSkill: (req, res) => {
    //     const DATA = req.body;
    //     const ID = req.params.id;
    //     Skill.findOneAndUpdate({ _id: ID }, { $push: { Skill: { $each: DATA } } }, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    // },

    // deleteSkill: (req, res) => {
    //     const ID = req.params.id;
    //     Skill.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    // },

    // deleteAllSkill: (req, res) => {
    //     Skill.deleteMany({}).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    // },


    goToAngularRoute: (req, res) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }
}