import { renderHero, renderHeroList } from '../view/heroViews.js'
import heroServices from '../services/heroServices.js'

class HeroController {
  constructor() {}

  // Obtener todos
  async getAllHeros(req, res) {
    try {
      const heroes = await heroServices.getAllHeros()
      res.status(200).json(renderHeroList(heroes))
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener todos los héroes', error: error.message })
    }
  }

  // Obtener los mayores de 30
  async getHeros30(req, res) {
    try {
      const mayores30 = await heroServices.getHeros30()
      res.status(200).json(renderHeroList(mayores30))
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error al obtener héroes mayores de 30', error: error.message })
    }
  }

  // Buscar por atributo y valor
  async getHeroByAttribute(req, res) {
    try {
      const { atributo, valor } = req.params
      const resultado = await heroServices.getHeroByAttribute(atributo, valor)

      res.status(200).json(renderHeroList(resultado))
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error al obtener héroes por atributo', error: error.message })
    }
  }

  // Buscar por ID
  async getHeroById(req, res) {
    try {
      const { id } = req.params
      const heroBuscado = await heroServices.getHeroById(id)

      if (!heroBuscado) {
        return res.status(404).send({ messagge: 'heroe no encontrado' })
      }
      res.status(200).json(renderHero(heroBuscado))
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener héroe por ID', error: error.message })
    }
  }

  // Crear héroe
  async createHero(req, res) {
    try {
      const { nombreSuperhero } = req.body

      // Verificar si el héroe ya existe
      const heroExistente = await heroServices.getHeroByName(nombreSuperhero)
      if (heroExistente) {
        return res.status(400).json({ message: 'El héroe ya está registrado' })
      }

      // Crear el héroe si no existe
      const heroNuevo = await heroServices.createHero(req.body)
      res.status(201).json(renderHero(heroNuevo))
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el héroe', error: error.message })
    }
  }

  // Actualizar héroe
  async updateHero(req, res) {
    try {
      const { id } = req.params

      const heroData = req.body
      const heroBuscado = await heroServices.updateHero(id, heroData)

      if (heroBuscado.matchedCount === 0) {
        return res.status(404).send({ message: 'héroe no modificado' })
      }

      if (heroBuscado.modifiedCount === 0) {
        return res.status(400).send({ message: 'No se realizaron cambios en el héroe' })
      }

      res.status(200).json({ status: 'héroe actualizado correctamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el héroe', error: error.message })
    }
  }

  // Eliminar héroe
  async deleteHero(req, res) {
    try {
      const { id } = req.params
      const heroBuscado = await heroServices.deleteHero(id)

      if (heroBuscado.deletedCount === 0) {
        return res.status(404).send({ message: 'No se encontró el héroe' })
      }

      res.status(200).send({ message: 'héroe eliminado con exito' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el héroe', error: error.message })
    }
  }
}

export default new HeroController()
