///////////////////////////////////////////////
/****** BASIC SETUP RELATED CODE HERE *******/
/////////////////////////////////////////////

const express = require('express')
const app = express()
const PORT = 8080

// Using middleware to parse json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CORS
const cors = require('cors')
app.use(cors())


////////////////////////////////////////////
/****** DATABASE RELATED CODE HERE *******/
//////////////////////////////////////////

// mongodb database connection using mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://arkadyutipaul:p%40ssw0rd@travel-app-cluster0.y33ulkg.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});

// creating model for storing data
const TravelFormSchema = new mongoose.Schema({
	name: String,
	email: String,
	place: String,
	travellers: Number,
	budget: String,
	date: String
})

const Form = mongoose.model('Form', TravelFormSchema)

// DATABASE RELATED CODE ENDS HERE //




// To check that the app is live
app.listen(
	PORT,
	() => console.log(`App is live on ${PORT}`)
)




///////////////////////////////////////
/****** API RELATED CODE HERE *******/
/////////////////////////////////////

// GET API - gets all the travel forms data
app.get('/forms', (req, res) => {
	Form.find().then((foundForms) => {
		res.status(200).send(foundForms)
	}).catch((err) => {
		console.log(`Error occured in GET /forms api: ${JSON.stringify(err)}`)
	})
})


// POST API - posts data of a single travel form to store in the db (mongodb atlas)
app.post('/submit/form', (req, res) => {
	let formData = req.body

	if(!formData || !formData.name || !formData.email || !formData.place || !formData.travellers || !formData.budget) {
		console.log(`Error: Missing data from request body. req body: ${JSON.stringify(formData)}`)
		return res.status(400).send({ message: `Missing data from request body. req body: ${JSON.stringify(formData)}` })
	}

	// adding date to form data
	let date = new Date() // creating date object
	let finalDate = ""+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() // formatting the date in DD/MM/YYYY format
	formData.date = finalDate // added date to form data

	const newFormData = new Form({
		name: formData.name,
		email: formData.email,
		place: formData.place,
		travellers: formData.travellers,
		budget: formData.budget,
		date: formData.date
	});
	newFormData.save().then(() => {
		res.status(200).send({message: 'Successfully saved new form data to db!'})
		console.log('Successfully saved new form data to db!')
	}).catch((err) => {
		res.send(`Error occured ${JSON.stringify(err)}`)
		console.log(`Error occured in POST /submit/form api: ${JSON.stringify(err)}`)
	})
})