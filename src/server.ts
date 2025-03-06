import express from 'express'
import router from './router'
import morgan from 'morgan'
// app is the entire app

// const express = require('express')

const app = express()
app.use(morgan('dev')) // middlewear 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

 
app.get('/', (req,res) => {
    console.log('hello from express')
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api', router)
// use is into express and add sometime of global confuguration to the whole app or a small part 

export default app 
