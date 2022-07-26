import { Note } from "../models/note.js";

function create (req, res) {
    req.body.author = req.user.profile
    Note.create(req.body)
    .then(note => {
        Note.findById(note._id)
        .populate('author')
        .then(populatedNote => {
            res.json(populatedNote)
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: err.err})
    })
}

function index (req, res) {
    Note.find({})
    .populate('author')
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: err.err})
    })

}

function deleteOne(req, res) {
    Note.findByIdAndDelete(req.params.id)
    .then(deletedNote => {
        res.json(deletedNote)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: err.err})
    })

}

function update(req, res) {
    Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .populate('author')
        .then(updatedNote => {
            res.json(updatedNote)
        })
    .catch(err => {
        console.log(err)
        res.status(500).json({err: err.err})
    })

}


export {
    create,
    index,
    deleteOne as delete,
    update

}