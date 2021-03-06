import { Router } from 'express'
import { connect } from '../database/connection'
import PlantController from '../controllers/plants_controller'
const router = Router()


router.get('/listPlants', async (req, res) => {
    const resultado = await new PlantController().list()
    res.json(resultado)
})

router.post('/createPlants', async (req, res) => {
    const plant = {
        name: req.body.name,
        type: req.body.type,
        scientific_name: req.body.scientific_name,
        order: req.body.order,
        img_url: req.body.img_url
    }
    const result = await new PlantController.createPlant(plant)

    res.status(200).json({
        success: true,
        "data": result
    })
})
export default router