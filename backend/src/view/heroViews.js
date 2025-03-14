export function renderHero(hero) {
  return {
    nombre: hero.nombreSuperhero,
    'nombre real': hero.nombreReal,
    edad: hero.edad,
    planetaOrigen: hero.planetaOrigen,
    debilidad: hero.debilidad,
    poderes: hero.poderes,
    aliados: hero.aliados,
    creador: hero.creador,
  }
}

export function renderHeroList(heroes) {
  return heroes.map(hero => renderHero(hero))
}

/*
const heroSchema = new mongoose.Schema({
  nombreSuperhero: { type: String, required: true },
  nombreReal: { type: String, require: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: { type: String },
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  creador: { type: String },
  createdAt: { type: Date, dafault: Date.now },
})
*/
