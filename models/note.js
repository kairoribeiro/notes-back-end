import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  title: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  note: String,
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { Note }
