// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Please Enter a Task")
//     }
//     else{
		
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }

//         var tasks = document.querySelectorAll(".task");
//         for(var i=0; i<tasks.length; i++){
//             tasks[i].onclick = function(){
//                 this.classList.toggle('completed');
//             }
//         }

//         document.querySelector("#newtask input").value = "";
//     }
// }

// fetch('/tasks.json')
//         .then((response) => response.json())
//         .then((tasks) => {
//             var html = '';
//             for (var i = 0; i < tasks.length; i++) {
//                 html += "<div class='task-tile' id='task-tile'>" +
//                     "<h2 class='task-h2'>" + tasks[i].description + "</h2>" +"</div>";
//             }
//             document.getElementById("task-list").innerHTML = html;
//         });


// const form = document.querySelector('form');

// 		form.addEventListener('submit', (e) => {
// 			e.preventDefault();
// 			const formData = new FormData(form);
// 			const obj = Object.fromEntries(formData);

// 			const json = JSON.stringify(obj)
			
// 		});