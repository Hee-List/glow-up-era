const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = require('./database');
const app = express();
const port = 8000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Serve static files (e.g., CSS, JS, images)
app.use(express.static('public'));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle Form submission and add the numbers
app.post('/store', (req, res) => {
	//const { name, age, gender } = req.body;
	const name = req.body.name;
	const age = req.body.age;
	const gender = req.body.gender;
    const num1 = parseFloat(req.body.q1); // parsefloat lets it a string turn into a floating point number
    const num2 = parseFloat(req.body.q2);
	const num3 = parseFloat(req.body.q3);
	const num4 = parseFloat(req.body.q4);
	const num5 = parseFloat(req.body.q5);
	const num6 = parseFloat(req.body.q6);
	const num7 = parseFloat(req.body.q7);
    const sum = req.body.sum;
	let category = ''; // adding different categories for the outcomes 
	let message = '';// adding different messages for the outcomes 
	let videoUrl1 = ''; // so i can add different videos for the same name
	let videoUrl2 = '';
	let videoUrl3 = '';
	let videoUrl4 = '';
	// a constraint like a function only happens if the score is in the frames
	if (sum >= 14 && sum <= 20)	{
		category = 'lifestyle';
		message = 'You should try to improve your overall lifestyle.';
		videoUrl1 = 'https://www.youtube.com/embed/teE-xVO-ljw'; // work life balance
		videoUrl2 = 'https://www.youtube.com/embed/o18I23HCQtE'; // managing stress
		videoUrl3 = 'https://www.youtube.com/embed/IzQ2siryQrM'; // sleeping enough
		videoUrl4 = 'https://www.youtube.com/embed/hBEKGBLAB80'; // improving helath
			db.serialize(() => { //adds things into the database
			const sql = `INSERT INTO users (name, age, gender) VALUES (?, ?, ?)`;
				db.run(sql, [name, age, gender], function(err) {
					if (err) {
						return console.error(err.message);
					}
				const user_id = this.lastID;
				db.run('INSERT INTO responses (sum, user_id) VALUES (?, ?)', [sum, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
				db.run('INSERT INTO ytrecommendations (category, ytv1, ytv2, ytv3, ytv4, user_id) VALUES (?, ?, ?, ?, ?, ?)', [category, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
					});
						res.json({ name, age, gender, sum, category, message, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id });
				});
			});
		});	
	}

	else if (sum >= 21 && sum <= 25) {
		category = 'academic';
		message = 'You should try to improve your academic lifestyle, when concepts are hard to understand you should reach out for help.';
		videoUrl1 = 'https://www.youtube.com/embed/L-mLsFt5ZpI'; // promodoro timer
		videoUrl2 = 'https://www.youtube.com/embed/HZHbHL0dbnw'; // study techniques
		videoUrl3 = 'https://www.youtube.com/embed/3s2gS3pFHPg'; // time management
		videoUrl4 = 'https://www.youtube.com/embed/YyjBKqsJqAo'; // burnout
			db.serialize(() => {
			const sql = `INSERT INTO users (name, age, gender) VALUES (?, ?, ?)`;
				db.run(sql, [name, age, gender], function(err) {
					if (err) {
						return console.error(err.message);
					}
				const user_id = this.lastID;
				db.run('INSERT INTO responses (sum, user_id) VALUES (?, ?)', [sum, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
				db.run('INSERT INTO ytrecommendations (category, ytv1, ytv2, ytv3, ytv4, user_id) VALUES (?, ?, ?, ?, ?, ?)', [category, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
					});
						res.json({ name, age, gender, sum, category, message, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id });
				});
			});
		});	
	}

	else if (sum >= 26 && sum <= 30) {
		category = 'physical';
		message = 'You should try to improve your physical lifestyle, this will help you think more clearly at times.';
		videoUrl1 = 'https://www.youtube.com/embed/LqW9gdpctKE'; // cardio workout
		videoUrl2 = 'https://www.youtube.com/embed/g_tea8ZNk5A'; // beginners workout
		videoUrl3 = 'https://www.youtube.com/embed/BPlCatqZRPI'; // streching
		videoUrl4 = 'https://www.youtube.com/embed/IvmaekQfKiw'; // posture
			db.serialize(() => {
			const sql = `INSERT INTO users (name, age, gender) VALUES (?, ?, ?)`;
				db.run(sql, [name, age, gender], function(err) {
					if (err) {
						return console.error(err.message);
					}
				const user_id = this.lastID;
				db.run('INSERT INTO responses (sum, user_id) VALUES (?, ?)', [sum, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
				db.run('INSERT INTO ytrecommendations (category, ytv1, ytv2, ytv3, ytv4, user_id) VALUES (?, ?, ?, ?, ?, ?)', [category, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
					});
						res.json({ name, age, gender, sum, category, message, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id });
				});
			});
		});	
	}

	else if (sum >= 31 && sum <= 35) {
		category = 'mental';
		message = 'You should try to improve your mental lifestyle as keeping on top of things could be stressful at times.';
		videoUrl1 = 'https://www.youtube.com/embed/w6LLxTcVN9k'; // growth mindset
		videoUrl2 = 'https://www.youtube.com/embed/oxx564hMBUI'; // mental health
		videoUrl3 = 'https://www.youtube.com/embed/3QIfkeA6HBY'; // improving mental helath
		videoUrl4 = 'https://www.youtube.com/embed/Ezmyi8fPjxs'; // helpign osmeone with mental health
			db.serialize(() => {
			const sql = `INSERT INTO users (name, age, gender) VALUES (?, ?, ?)`;
				db.run(sql, [name, age, gender], function(err) {
					if (err) {
						return console.error(err.message);
					}
				const user_id = this.lastID;
				db.run('INSERT INTO responses (sum, user_id) VALUES (?, ?)', [sum, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
				db.run('INSERT INTO ytrecommendations (category, ytv1, ytv2, ytv3, ytv4, user_id) VALUES (?, ?, ?, ?, ?, ?)', [category, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id], function(err) {
					if (err) {
						return console.error(err.message);
					}
					});
						res.json({ name, age, gender, sum, category, message, videoUrl1, videoUrl2, videoUrl3, videoUrl4, user_id });
				});
			});
		});	
	}

	else {
		message = 'The sum is high. Excellent work!';

	}
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});