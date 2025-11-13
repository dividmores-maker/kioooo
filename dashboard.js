// =========================
// Dashboard JS (محلي)
// =========================

// === عناصر الأخبار ===
const newsForm = document.getElementById('news-form');
const newsList = document.getElementById('news-list');

newsForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('news-title').value;
  const content = document.getElementById('news-content').value;
  addNewsCard(title, content);
  newsForm.reset();
});

function addNewsCard(title, content) {
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="card-buttons">
      <button class="edit-btn">تعديل</button>
      <button class="delete-btn">حذف</button>
    </div>
  `;
  // أزرار التعديل والحذف
  const editBtn = card.querySelector('.edit-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => {
    const newTitle = prompt('عدل عنوان الخبر:', title);
    const newContent = prompt('عدل محتوى الخبر:', content);
    if(newTitle && newContent){
      card.querySelector('h3').innerText = newTitle;
      card.querySelector('p').innerText = newContent;
    }
  });

  deleteBtn.addEventListener('click', () => card.remove());

  newsList.appendChild(card);
}

// === القداسات ===
const massesForm = document.getElementById('masses-form');
const massesList = document.getElementById('masses-list');

massesForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('mass-title').value;
  const time = document.getElementById('mass-time').value;
  addMassCard(title, time);
  massesForm.reset();
});

function addMassCard(title, time){
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${time}</p>
    <div class="card-buttons">
      <button class="edit-btn">تعديل</button>
      <button class="delete-btn">حذف</button>
    </div>
  `;
  const editBtn = card.querySelector('.edit-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => {
    const newTitle = prompt('عدل اسم القداس:', title);
    const newTime = prompt('عدل وقت القداس:', time);
    if(newTitle && newTime){
      card.querySelector('h3').innerText = newTitle;
      card.querySelector('p').innerText = newTime;
    }
  });

  deleteBtn.addEventListener('click', () => card.remove());

  massesList.appendChild(card);
}

// === العظات ===
const sermonsForm = document.getElementById('sermons-form');
const sermonsList = document.getElementById('sermons-list');

sermonsForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('sermon-title').value;
  const content = document.getElementById('sermon-content').value;
  addSermonCard(title, content);
  sermonsForm.reset();
});

function addSermonCard(title, content){
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="card-buttons">
      <button class="edit-btn">تعديل</button>
      <button class="delete-btn">حذف</button>
    </div>
  `;
  const editBtn = card.querySelector('.edit-btn');
  const deleteBtn = card.querySelector('.delete-btn');

  editBtn.addEventListener('click', () => {
    const newTitle = prompt('عدل عنوان العظة:', title);
    const newContent = prompt('عدل محتوى العظة:', content);
    if(newTitle && newContent){
      card.querySelector('h3').innerText = newTitle;
      card.querySelector('p').innerText = newContent;
    }
  });

  deleteBtn.addEventListener('click', () => card.remove());

  sermonsList.appendChild(card);
}

// === معرض الصور ===
const galleryForm = document.getElementById('gallery-form');
const galleryList = document.getElementById('gallery-list');

galleryForm.addEventListener('submit', e => {
  e.preventDefault();
  const url = document.getElementById('image-url').value;
  addGalleryCard(url);
  galleryForm.reset();
});

function addGalleryCard(url){
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <img src="${url}" alt="صورة" style="width:100%;border-radius:10px;">
    <div class="card-buttons">
      <button class="delete-btn">حذف</button>
    </div>
  `;
  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => card.remove());

  galleryList.appendChild(card);
}
