const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// Connect to MongoDB

mongoose.connect('mongodb://sumitkesarwani2323@localhost:27017/Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);



// Routes
app.post('/signup', async (req, res) => {
    const { newUsername, newPassword, confirmPassword } = req.body;

    // Basic password validation
    if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match.' });
    }

    try {
        // Check if the username is already taken
        const existingUser = await User.findOne({ username: newUsername });
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken.' });
        }

        // Create a new user
        const newUser = new User({ username: newUsername, password: newPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
