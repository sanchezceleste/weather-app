import {Router} from 'express'

// router is sub apps that have their own configurations
const router = Router()


router.get('/country', (req, res) => {
    res.json({message: 'hello'})
})
router.get('/country/:id', () => {})
router.put('/country/:id', () => {})
router.post('/country', () => {})
router.delete('/country/:id', () => {})

router.get('/weather', () => {})
router.post('/weather/:id', () => {})

export default router


