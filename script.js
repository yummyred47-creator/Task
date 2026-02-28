let lightmode = localStorage.getItem('lightmode')
const themeswitch = document.getElementById('bt-themeswitch')

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if (lightmode === 'active') enableLightmode()

themeswitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})


function toggleDirection() {
    const container = document.getElementById('container');
    container.classList.toggle('is-column');
}

const addCardBtn = document.getElementById('bt-addcard')
const container = document.getElementById('container')
const editContainer = document.getElementById('edit-container')
const overlay = document.getElementById('overlay')
const tbTitle = document.getElementById('tb-title')
const tbContent = document.getElementById('tb-content')
const btSave = document.getElementById('bt-save')
const btCancel = document.getElementById('bt-cancel')

let cardCount = 1;
let currentEditingCard = null;

const closePopup = () => {
    editContainer.classList.remove('active')
    overlay.classList.remove('active')
    currentEditingCard = null;
}

addCardBtn.addEventListener('click', () => {
    const newcard = document.createElement('div')
    newcard.classList.add('card');
    newcard.innerHTML = `
        <h2 class="card-title"> title${cardCount} </h2>
        <p class="card-content"> นี่คือ Card ใหม่ที่ถูกสร้าง</p>

        <div class="bt-card-containe">
            <button class="bt bt-view"> ดู </button>
            <button class="bt bt-edit"> แก้ไข </button>
            <button class="bt bt-delete"> ลบ </button>
        </div>
    `;

    container.appendChild(newcard);
    cardCount++;

    const deleteBtn = newCard.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    newCard.remove(); 
  });

  container.appendChild(newCard);
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('bt-edit')) {
        currentEditingCard = e.target.closest('.card');
        const title = currentEditingCard.querySelector('.card-title').innerText;
        const content = currentEditingCard.querySelector('.card-content').innerText;

        tbTitle.value = title;
        tbContent.value = content;

        editContainer.classList.add('active');
        overlay.classList.add('active');
    }
});

btSave.addEventListener('click', () => {
    if (currentEditingCard) {
        currentEditingCard.querySelector('.card-title').innerText = tbTitle.value;
        currentEditingCard.querySelector('.card-content').innerText = tbContent.value;
        closePopup();
    }
});

btCancel.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);