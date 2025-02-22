

const addTask = () => {

  const taskInput = document.getElementById('taskInput');
  const taskInputValue = taskInput.value.trim()

  if(taskInputValue !== ""){
      const taskListUL = document.getElementById('taskList');
    const li = document.createElement('li');

    
   li.innerHTML = `
    <input type="checkbox">  
    ${taskInputValue} 
    <button onclick="deleteTask(this)">Delete</button>
`;

     
     taskListUL.appendChild(li)
     



     taskInput.value = ''
  }else{
    alert("Please Inter a Task...")
  }

  console.log(taskInputValue);

}

const deleteTask = (btn) => {
  
  
  
  const li = btn.parentNode
      li.parentNode.removeChild(li)

}

const deleteTaskChecked = () => {
  const taskList = document.getElementById('checkBox');
    const chackBoxes = document.querySelectorAll('input[type = "checkbox]:chacked');
    console.log(chackBoxes);
}