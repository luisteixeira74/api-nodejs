import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Chegou aqui!")
})

export default router