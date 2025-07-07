function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('darkmode');
  localStorage.setItem('darkmode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  const darkModeSetting = localStorage.getItem('darkmode');
  if (darkModeSetting === 'enabled') {
    document.documentElement.classList.add('darkmode');
  } else {
    document.documentElement.classList.remove('darkmode');
  }
});

let addNewTaskHTML = '' ;
const taskInput = document.querySelector('.mr-2');
const btn = document.querySelector('.btn-outline-info');
const taskList = document.querySelector('.item');



function addTask(){
  const task = taskInput.value.trim() ;
   if (task !== '') {
      const li = document.createElement('li') ;
      li.className =  'list-group-item';  
      li.textContent = task; 
    taskList.appendChild(li);  
    taskInput.value = '';    
    console.log(alert('task added sussesfuly')) ;
  }
 }

 btn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
