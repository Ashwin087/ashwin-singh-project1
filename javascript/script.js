const navToggle = document.querySelector('#toggle-nav');
const navIcon = document.querySelectorAll('.nav-icon');
const nav = document.querySelector('nav ul');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open');
    navIcon.forEach(icon => {
        icon.classList.toggle('hidden');
    })
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const comment = document.querySelector('textarea[name="Comment"]').value;
    const commentSection = document.querySelector('.allComments');
    const divForComment = document.createElement('div');
    divForComment.classList.add("posted-comment")

    divForComment.innerHTML = `
        <div class="image-container">
            <img src="./assets/comment-2.jpg" alt="profile picture of woman smiling">
        </div>
        <div class="comment-container">
            <h3>Wednesday October 10th, 2019 by ${name}</h3>
            <p>${comment}.</p>
        </div>`
    commentSection.appendChild(divForComment);

    const userName = document.querySelector('input[name="name"]');
    const userEmail = document.querySelector('input[name="email"]');
    const userComment = document.querySelector('textarea[name="Comment"]');
    
    userName.value = '';
    userEmail.value = '';
    userComment.value = '';
});


