import HeroRepository from '../repositories/heroRepository.js'

class HeroService {
  async getAllHeros() {
    return await HeroRepository.getAllHeros()
  }

  async getHeros30() {
    return await HeroRepository.getHeros30()
  }

  async getHeroById(id) {
    return await HeroRepository.getHeroById(id)
  }

  async createHero(heroData) {
    return await HeroRepository.createHero(heroData)
  }

  async updateHero(id, heroData) {
    return await HeroRepository.updateHero(id, heroData)
  }

  async deleteHero(id) {
    return await HeroRepository.deleteHero(id)
  }

  // Buscar por nombre
  async getHeroByName(name) {
    return await HeroRepository.getHeroByName(name)
  }

  // buscar por atributo y valor
  async getHeroByAttribute(atributo, valor) {
    return await HeroRepository.getHeroByAttribute(atributo, valor)
  }
}

export default new HeroService()
