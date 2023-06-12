const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
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
	fs.readFile('tasks.json', 'utf8', (err, data) => {
		if (err) {
		  console.error(err);
		  return res.status(500).send('Server error');
		}
	
		let tasks = [];
		try {
		  tasks = JSON.parse(data);
		} catch (err) {
		  console.error(err);
		  return res.status(500).send('Server error');
		}
	
		// Add the new task from req.body to the tasks array
		tasks[tasks.length] = req.body;
	
		// Write the updated tasks array back to the tasks.json file
		fs.writeFile('tasks.json', JSON.stringify(tasks), 'utf8', (err) => {
		  if (err) {
			console.error(err);
			return res.status(500).send('Server error');
		  }
	
		  res.status(200).sendFile('tasks added');
		});
	  });
});

app.listen(7000);

