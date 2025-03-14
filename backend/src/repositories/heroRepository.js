import IRepository from './IRepository.js'
import heroModel from '../model/heroModel.js'

class HeroRepository extends IRepository {
  // obtener todos los heroes
  async getAllHeros() {
    return await heroModel.find().sort({ nombreSuperhero: 1 })
  }

  // obtener heroes mayores de 30
  async getHeros30() {
    return await heroModel.find({ edad: { $gt: 30 } }).sort({ nombreSuperhero: 1 })
  }

  // obtener hero por atributo y valor
  async getHeroByAttribute(atributo, valor) {
    let query = {}
    query[atributo] = valor

    return await heroModel.find(query)
  }

  // obtener heroe por id
  async getHeroById(id) {
    return await heroModel.findById(id)
  }

  // crear un heroe
  async createHero(heroData) {
    const newHero = new heroModel(heroData)
    await newHero.save()
    return newHero
  }

  // actualizar un heroe
  async updateHero(id, heroData) {
    return await heroModel.updateOne({ _id: id }, { $set: heroData })
  }

  // borrar un heroe
  async deleteHero(id) {
    return await heroModel.deleteOne({ _id: id })
  }

  // Buscar por nombre
  async getHeroByName(name) {
    return await heroModel.findOne({ nombreSuperhero: name })
  }
}

export default new HeroRepository()

