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


export {
    create,

}