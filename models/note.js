import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  title: String,
  note: String,
  date: Date,
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { Note }
