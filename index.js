const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json()) // middleware

app.listen(
	PORT,
	() => console.log(`App is live on ${PORT}`)
)

app.get('/all/form/data', (req, res) => {
	res.status(200).send({
		name: "Yun",
		email: "yyy@g.com"
	})
})

app.post('/submit/form', (req, res) => {

})