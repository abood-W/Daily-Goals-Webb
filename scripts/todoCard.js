
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const todayDate = new Date().toLocaleDateString('en-US', options);
document.querySelectorAll('.todysDate').forEach(el => {
  el.innerHTML = todayDate;
});
document.querySelector('.card-header').innerHTML = todayDate;
let i = 1;

document.querySelector('.add-new-list-group').addEventListener('click', () => {
  const cardContainer = document.querySelector('.card-container');

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + i);
  const day = futureDate.toLocaleDateString('en-US', options);
  i++;

  const cardHTML = `
    <div class="card text-bg-dark mb-3" style="width: 18rem;">
      <div class="card-header">${day}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <input type="text" class="form-control mr-2" placeholder="Enter a task">
          <button type="button" class="btn btn-outline-info">+</button>
        </li>
        <li class="item list-group-item"></li>
      </ul>
    </div>
  `;

  cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});



document.querySelector('.card-container').addEventListener('click', (e) => {
  
  if (e.target.matches('.btn-outline-info')) {
    const card = e.target.closest('.card');
    const taskInput = card.querySelector('.mr-2');
    const taskList = card.querySelector('.item');
    const task = taskInput.value.trim();

    if (task !== '') {
      const taskHTML = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${task}</span>
          <button type="button" class="btn btn-danger btn-sm delete-task">D</button>
          
        </li>
      `;
      taskList.innerHTML += taskHTML;
      taskInput.value = '';
      alert('Task added successfully');
    }
  }

 
 if (e.target.classList.contains('delete-task')) {
        const confirmed = confirm('Are you sure you want to delete this task?');
        if (confirmed) {
            e.target.closest('li').remove();
        }
        }

});


document.querySelector('.card-container').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('mr-2')) {
    const card = e.target.closest('.card');
    const taskInput = card.querySelector('.mr-2');
    const taskList = card.querySelector('.item');
    const task = taskInput.value.trim();

    if (task !== '') {
      const taskHTML = `
       <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${task}</span>
  
  <div class="d-flex gap-2 align-items-center">
    <button type="button" class="btn btn-danger btn-sm delete-task">D</button>
    <div class="form-check m-0">
      <input class="form-check-input" type="checkbox">
    </div>
  </div>
</li>

      `;
      taskList.innerHTML += taskHTML;
      taskInput.value = '';
      alert('Task added successfully');
    }
  }
});
