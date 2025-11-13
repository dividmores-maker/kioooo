// === آخر الأخبار ===
const newsForm = document.getElementById('news-form');
const newsList = document.getElementById('news-list');

newsForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('news-title').value;
  const content = document.getElementById('news-content').value;

  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  newsList.appendChild(card);

  newsForm.reset();
});

// === القداسات ===
const massesForm = document.getElementById('masses-form');
const massesList = document.getElementById('masses-list');

massesForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('mass-title').value;
  const time = document.getElementById('mass-time').value;

  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `<h3>${title}</h3><p>${time}</p>`;
  massesList.appendChild(card);

  massesForm.reset();
});

// === العظات ===
const sermonsForm = document.getElementById('sermons-form');
const sermonsList = document.getElementById('sermons-list');

sermonsForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('sermon-title').value;
  const content = document.getElementById('sermon-content').value;

  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  sermonsList.appendChild(card);

  sermonsForm.reset();
});

// === معرض الصور ===
const galleryForm = document.getElementById('gallery-form');
const galleryList = document.getElementById('gallery-list');

galleryForm.addEventListener('submit', e => {
  e.preventDefault();
  const url = document.getElementById('image-url').value;

  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `<img src="${url}" alt="صورة" style="width:100%;border-radius:10px;">`;
  galleryList.appendChild(card);

  galleryForm.reset();
});
