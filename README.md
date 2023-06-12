#Task-Track
This is an application that allows user's to insert a task into an html form and store the task in a json file. 
The goal for this app is to allow user's to have the functionlity of creating, reading, updating, and deleting tasks. 

## Logic
 User enters in textfield the name of task
 Once submitted, this input should be parsed and converted to json object.
 Once converted,  jscon object should be stored in json file using 'fs' writeFile
 index.html should then fetch this json file and create a div to show a list of each task
 Each listed element should contain button inputs to update or delete the task
 
 ## Current Status
 Currently the user is able to write tasks
 For the moment, the tasks are being kept in local storage as opposed to json file.
 Current tasks are able to be listed and deleted
 
 ## Work left to complete
 Get FormData written to json file
 Utilize fetch api to conduct DOM manipulation to display the task list
 Add edit/update functionality to listed task and json file
 Add delete functionality to delete json object from json file
 replace local storage with json file
 
 ## Current Problems 
 
 
 
