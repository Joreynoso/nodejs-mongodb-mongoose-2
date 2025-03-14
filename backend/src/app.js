import express from 'express'
import connectDB from './config/configDb.js'
import heroRouter from './routes/heroRoutes.js'
import cors from 'cors'

// instanciar express
const app = express()

// instanciar puerto
const port = process.env.PORT || 3000

// conectar mongoose
connectDB()

// usar middleware
app.use(express.json())

// usar middleware cors
app.use(cors())

// usar heroRouter
app.use('/api', heroRouter)

// validar rutas
app.use('*', (req, res) => {
  res.status(404).send({ message: 'ruta no encontrada' })
})

// escuchar servidor
app.listen(port, () => {
  console.log('escuchando en el puerto:', port)
})
