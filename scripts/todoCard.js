// Load saved cards from localStorage
let cards = JSON.parse(localStorage.getItem('cards')) || [];
let i = cards.length ; // so dates don't repeat

function saveCardsToLocalStorage() {
  localStorage.setItem('cards', JSON.stringify(cards));
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const todayDate = new Date().toLocaleDateString('en-US', options);

// Update all elements with class "todysDate"
document.querySelectorAll('.todysDate').forEach(el => {
  el.innerHTML = todayDate;
});

function renderCards() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';

  cards.forEach(card => {
    const taskListHTML = card.tasks.map(task => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task.text}</span>
        <div class="d-flex gap-2 align-items-center">
          <button type="button" class="btn btn-danger btn-sm delete-task">D</button>
          <div class="form-check m-0">
            <input class="form-check-input" type="checkbox" ${task.completed ? 'checked' : ''}>
          </div>
        </div>
      </li>
    `).join('');

    const cardHTML = `
      <div class="card text-bg-dark mb-3" style="width: 18rem;">
        <div class="card-header">${card.date}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <input type="text" class="form-control mr-2" placeholder="Enter a task">
            <button type="button" class="btn btn-outline-info">+</button>
          </li>
          <li class="item list-group-item">${taskListHTML}</li>
        </ul>
      </div>
    `;

    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
}

renderCards();

// Add new card
document.querySelector('.add-new-list-group').addEventListener('click', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + i);
  const day = futureDate.toLocaleDateString('en-US', options);
  i++;

  const newCard = { date: day, tasks: [] };
  cards.push(newCard);
  saveCardsToLocalStorage();
  renderCards();
});

// Handle task add/delete/check
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  const date = card.querySelector('.card-header').innerText;
  const cardData = cards.find(c => c.date === date);

  // Add task
  if (e.target.matches('.btn-outline-info')) {
    const taskInput = card.querySelector('.mr-2');
    const task = taskInput.value.trim();
    if (task !== '') {
      cardData.tasks.push({ text: task, completed: false });
      saveCardsToLocalStorage();
      renderCards();
    }
  }

  // Delete task
  if (e.target.classList.contains('delete-task')) {
    if (confirm('Are you sure you want to delete this task?')) {
      const taskItem = e.target.closest('li');
      const taskText = taskItem.querySelector('span').innerText;
      cardData.tasks = cardData.tasks.filter(t => t.text !== taskText);
      saveCardsToLocalStorage();
      renderCards();
    }
  }
});

// Handle checkbox change
cardContainer.addEventListener('change', (e) => {
  if (e.target.classList.contains('form-check-input')) {
    const taskItem = e.target.closest('li');
    const taskText = taskItem.querySelector('span').innerText;
    const card = e.target.closest('.card');
    const date = card.querySelector('.card-header').innerText;
    const cardData = cards.find(c => c.date === date);
    const task = cardData.tasks.find(t => t.text === taskText);
    if (task) {
      task.completed = e.target.checked;
      saveCardsToLocalStorage();
    }
  }
});

// Handle pressing Enter key
cardContainer.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('mr-2')) {
    const card = e.target.closest('.card');
    const taskInput = card.querySelector('.mr-2');
    const task = taskInput.value.trim();
    const date = card.querySelector('.card-header').innerText;
    const cardData = cards.find(c => c.date === date);
    if (task !== '' && cardData) {
      cardData.tasks.push({ text: task, completed: false });
      saveCardsToLocalStorage();
      renderCards();
    }
  }
});