import express from 'express'
import heroController from '../controller/heroController.js'

// instanciar Router
const heroRouter = express.Router()

// rutas
heroRouter.get('/heroes', heroController.getAllHeros) // Obtener todos los héroes
heroRouter.post('/heroes', heroController.createHero) // Crear un nuevo héroe
heroRouter.get('/heroes/mayores-30', heroController.getHeros30) // Obtener héroes mayores de 30
heroRouter.get('/heroes/buscar/:atributo/:valor', heroController.getHeroByAttribute) // Buscar héroes por atributo y valor
heroRouter.get('/heroes/:id', heroController.getHeroById) // Obtener un héroe por ID
heroRouter.put('/heroes/:id', heroController.updateHero) // Actualizar un héroe
heroRouter.delete('/heroes/:id', heroController.deleteHero) // Eliminar un héroe

// exportar heroRouter
export default heroRouter
