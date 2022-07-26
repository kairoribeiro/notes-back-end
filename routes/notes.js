import { Router } from 'express'
import * as notesCtrl from '../controllers/notes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', notesCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, notesCtrl.create)
router.delete('/:id', checkAuth, notesCtrl.delete)
router.put('/:id', checkAuth, notesCtrl.update)


export { router }
