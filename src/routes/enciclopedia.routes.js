import { Router } from 'express'
import { connect } from '../database/connection'
import enciclopediaController from '../controllers/enciclopedia_controller'
const router = Router()

//Ruta para listar
router.get('/enciclopedia/listInfo', async (req, res) => {
    const enciclopedia = await new enciclopediaController().listInfo()
    res.json(enciclopedia)
})


//Rutas para agregar 

router.post('/enciclopedia/new-info', async (req, res) => {
    const {title, description, content, category } = req.body;
    const errors = [];
    if(!title){
        errors.push({text: 'Por favor ingrese el titulo'});
    }
    if(!description){
        errors.push({text: 'Por favor ingrese una descripcion'});
    }
    if(!content){
        errors.push({text: 'Por favor ingrese el contenido'});
    }
    if(!category){
        errors.push({text: 'Por favor ingrese una categoria'});
    }
    if(errors.length > 0){
        const info = {title, description, content, category }
       //res.send(info);
        res.render('enciclopedia_add', {
            errors,
            title,
            description,
            content,
            category
    });
    }else{
        const info = {title, description, content, category }
        console.log(info);
        const result = await new enciclopediaController.createInfo(info);
        console.log(result);
        //res.send(result);
        res.redirect('/enciclopedia/listInfo');
    }
    
})

module.exports = router;