require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const Bike = require('./models/bike');
const connectToDB = require('./config/connectToDB');
connectToDB();

app.use(express.json());
app.use(express.static('public'));

// Set up view engine for JSX
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Route to render the index view
app.get('/', (req, res) => {
  // Here you can pass data to your view if needed
  res.render('index', { title: 'Sartre’s List Home' });
});

// Example of another route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Sartre’s List' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









































app.get('/bikes', async (req, res) => {
    
});































