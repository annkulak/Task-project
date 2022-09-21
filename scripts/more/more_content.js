class User {
    static init(user) {
        return fetch('https://comment-travel-italy-list-default-rtdb.firebaseio.com/user.json', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(recordDataBase => recordDataBase.json())
            .then(recordDataBase => {
                user.id = recordDataBase.name;
                return user;
            })
            .then(addToLocalStorage)
            .then(User.renderList)
    };

    static renderList() {
        const userList = getUserListFromLocalStorage();
        const clean = userList.length ? cleanUserCard() : getMessage();
        const userCard = userList.length ? userList.map(toUserCard).join('') : getMessage();
    };
};

function addToLocalStorage(user) {
    const userList = getUserListFromLocalStorage();
    userList.push(user);
    localStorage.setItem('users', JSON.stringify(userList));
};

function getUserListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function cleanUserCard() {
    const userListContainer = document.querySelector('.list-container');
    const userCard = userListContainer.querySelectorAll('.user-card');
    userCard.forEach(element => {
        element.remove();
    });
};

function toUserCard(user) {
    const userListContainer = document.querySelector('.list-container');

    const userCard = document.createElement('div');
    userListContainer.appendChild(userCard);
    userCard.classList.add('user-card');

    const userName = document.createElement('div');
    userCard.appendChild(userName);
    userName.classList.add('user-card-name');
    userName.innerHTML = `${user.name}`;

    const userComment = document.createElement('div');
    userCard.appendChild(userComment);
    userComment.classList.add('user-card-comment');
    userComment.innerHTML = `${user.comment}`;

    return userCard;
};

function getMessage() {
    const userListContainer = document.querySelector('.list-container');
    const messageCard = document.createElement('div');
    userListContainer.appendChild(messageCard);
    messageCard.classList.add('message-card');
    messageCard.innerHTML = 'Оставьте комментарий...';
};

function activeSubmitForms() {
    const form = document.querySelector('.form-container');
    const userName = form.querySelector('.input-user-name');
    const userComment = form.querySelector('.input-user-comment');
    const submitBtn = form.querySelector('.submit-button');

    function userTextValied() {
        return userName.value.length >= 2;
    };

    function userCommentValied() {
        return userComment.value.length >= 5;
    };

    form.addEventListener('input', () => {
        submitBtn.disabled = !(userTextValied(userName.value) && userCommentValied(userComment.value));
    });

    form.addEventListener('submit', submitUserData);

    function submitUserData(event) {
        event.preventDefault();

        if ((userTextValied(userName.value)) && (userCommentValied(userComment.value))) {
            const user = {
                name: userName.value.trim(),
                comment: userComment.value,
                date: new Date().toJSON(),
            };

            submitBtn.disabled = true;

            User.init(user).then(() => {
                userName.value = '';
                userComment.value = '';
                submitBtn.disabled = false;
            });
        };
    };
};

function openCommentaries() {
    User.renderList();
};

export { User, activeSubmitForms, openCommentaries };