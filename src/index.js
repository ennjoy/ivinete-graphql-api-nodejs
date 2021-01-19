import mongoose from 'mongoose'
import apollo from './apollo/index.js'

mongoose.connect(process.env.MONGO_CONNECT, {
	useNewUrlParser: true,
  useUnifiedTopology: true
})

apollo.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})