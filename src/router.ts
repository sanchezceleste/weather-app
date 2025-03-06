import {Router} from 'express'
import {body} from "express-validator"
import { createCountry, getOneCountry, getCountry, deleteCountry, updateCountry} from './handlers/country'
// import {}
// import handleInputErrors from "./modules/middleware.js"

// router is sub apps that have their own configurations
const router = Router()


router.get('/country', 
    getCountry
)

router.get('/country/:id',
    getOneCountry
)

router.put('/country/:id', 
    body('name').isString(), 
    updateCountry

) 

router.post('/country', 
    body('name').isString(), 
    createCountry
)

router.delete('/country/:id',
    deleteCountry
)

// router.get('/weather', () => {})


export default router


