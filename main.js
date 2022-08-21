const express = require('express')
const userRouter = require('./routes/user.router.js')

const app = express()

app.use(express.json())
app.use('/', express.static(__dirname))
app.use('/api', userRouter)

app.listen(3030, () => console.log('Server started on 3030'))