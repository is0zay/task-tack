const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {

	var newTaskArray = [];

	newTaskArray.push(req.body);

	fs.readFile('./public/tasks.json', 'utf8', (err, task) => {
		if (err) {
		  console.error(err);
		  return;
		}
		
		const existingData = JSON.parse(task);
	  
		for (let i = 0; i < newTaskArray.length; i++) {
		  existingData.push(newTaskArray[i]);
		}
		console.log(existingData);
		fs.writeFile('./public/tasks.json', JSON.stringify(existingData) , 'utf-8', (err) => {
			if(err) {
				return console.log(err);
			}
			console.log("data written");
		})
	});


	res.sendFile(path.join(__dirname + "/index.html"));


});

app.listen(7000);


	// const description = req.body.description;
	// const complete = req.body.complete;
	// console.log("description: " + description);
	// console.log("complete: " + complete);

	// const list = fs.readFileSync('tasks.json')
	
	// console.log(req.body)
	// const taskJSON = JSON.stringify(req.body);
	// fs.writeFileS('tasks.json', taskJSON, 'utf8')
	// res.sendFile('/index.html', {root: __dirname }), {flag: 'a'};

	// Read the existing tasks from tasks.json file
	// fs.readFile('tasks.json', 'utf8', (err, data) => {
	// 	if (err) {
	// 	  console.error(err);
	// 	  return res.status(500).send('Server error');
	// 	}
	
	// 	let tasks = [];
	// 	try {
	// 	  tasks = JSON.parse(data);
	// 	} catch (err) {
	// 	  console.error(err);
	// 	  return res.status(500).send('Server error');
	// 	}
	// 	console.log(req.body)
	
	// 	// Add the new task from req.body to the tasks array
	// 	tasks.push(req.body);
	// 	return tasks;
	//   });

	//   // Write the updated tasks array back to the tasks.json file
	// 	fs.writeFile('tasks.json', JSON.stringify(tasks), 'utf8', (err) => {
	// 		if (err) {
	// 		  console.error(err);
	// 		  return res.status(500).send('Server error');
	// 		}
	  
	// 		res.status(200).send('tasks added');
	// 	  });