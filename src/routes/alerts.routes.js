import { Router } from 'express'
import { connect } from '../database/connection'
import AlertsController from '../controllers/alerts_controller'
const router = Router()


router.get('/listAlerts', async (req, res) => {
    const result = await new AlertsController().list()
    res.json(result)
})

router.post('/createAlert', async (req, res) => {
    const alert = {
        plant: req.body.plnat,
        type: req.body.type,
        date: req.body.date,
        img_url: req.body.img_url
    }
    const result = await new AlertsController.createAlert(alert)

    res.json({ "data": result })
    

})
export default router