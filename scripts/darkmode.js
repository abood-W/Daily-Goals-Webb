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

// let addNewTaskHTML = '' ;
// const taskInput = document.querySelector('.mr-2');
// const btn = document.querySelector('.btn-outline-info');
// const taskList = document.querySelector('.item');



// function addTask() {
//   const task = taskInput.value.trim();
//   if (task !== '') {
//     const taskHTML = `
//       <li class="list-group-item d-flex justify-content-between align-items-center">
//         <span>${task}</span>
//         <button type="button" class="btn btn-danger btn-sm delete-task">D</button>
//       </li>
//     `;

//     taskList.innerHTML += taskHTML;
//     taskInput.value = '';
//     alert('Task added successfully');
//   }
// }
// taskList.addEventListener('click', (e) => {
//   if (e.target.classList.contains('delete-task')) {
//     e.target.closest('li').remove();
//   }
// });



//  btn.addEventListener('click', addTask);
// taskInput.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') {
//     addTask();
//   }
// });




//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   const todayDate = new Date().toLocaleDateString('en-US', options);



//  let i=1  ;
// document.querySelector('.add-new-list-group').addEventListener('click', () => {
//   const cardContainer = document.querySelector('.card-container');
  
  
//     const today = new Date() ;
//  today.setDate(today.getDate()+i) ;
//  const day = today.toLocaleDateString('en-US', options);
//  console.log(day);
//   // Template for the card
//   const cardHTML = `
//     <div class="card text-bg-dark mb-3" style="width: 18rem;">
//       <div class="card-header">${day}</div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//           <input type="text" class="form-control mr-2" placeholder="Enter a task">
//           <button type="button" class="btn btn-outline-info">+</button>
       
//       </ul>
//     </div>
//   `;

//   // Insert the card into the container
//   cardContainer.insertAdjacentHTML('beforeend', cardHTML);
//   i=i+1 ;
// });


// document.querySelectorAll('.card-header').forEach(header => {
//   header.innerHTML = todayDate;
// });

//      document.querySelector('.todysDate').innerHTML  = todayDate ;
     

