import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json("Welcome to Tijuanaaaa!")
})

export default router
