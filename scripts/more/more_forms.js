function createCommentList() {
    const listContainer = document.createElement('div');
    document.querySelector('.more-addition').insertAdjacentElement('afterBegin', listContainer);
    listContainer.classList.add('list-container');
};

function createUserFormContainer() {
    const formContainer = document.createElement('form');
    document.querySelector('.more-addition').insertAdjacentElement('beforeEnd', formContainer);
    formContainer.classList.add('form-container');
};

function createInputName() {
    const inputTextGroup = document.createElement('div');
    document.querySelector('.form-container').appendChild(inputTextGroup);
    inputTextGroup.classList.add('input-container', 'user-name-container');

    const inputName = document.createElement('div');
    inputTextGroup.appendChild(inputName);
    inputName.classList.add('input-group-name');
    inputName.innerHTML = 'Ваше имя';

    const inputText = document.createElement('input');
    inputTextGroup.appendChild(inputText);
    inputText.type = 'text';
    inputText.name = 'username';
    inputText.maxLength = 50;
    inputText.classList.add('input-user-name');
};

function createInputComment() {
    const inputTextGroup = document.createElement('div');
    document.querySelector('.form-container').appendChild(inputTextGroup);
    inputTextGroup.classList.add('input-container', 'user-comment-container');

    const inputName = document.createElement('div');
    inputTextGroup.appendChild(inputName);
    inputName.classList.add('input-group-name');
    inputName.innerHTML = 'Ваш отзыв или комментарий';

    const inputText = document.createElement('input');
    inputTextGroup.appendChild(inputText);
    inputText.type = 'text';
    inputText.name = 'comment';
    inputText.maxLength = 500;
    inputText.classList.add('input-user-comment');
};

function createSubmitBtn() {
    const submitBtnContainer = document.createElement('div');
    document.querySelector('.form-container').appendChild(submitBtnContainer);
    submitBtnContainer.classList.add('input-container', 'submit-button-container');

    const submitBtn = document.createElement('input');
    submitBtnContainer.appendChild(submitBtn);
    submitBtn.type = 'submit';
    submitBtn.name = 'save';
    submitBtn.value = 'Оставить отзыв';
    submitBtn.disabled = true;
    submitBtn.classList.add('submit-button');
};

function createUserForm() {
    createUserFormContainer();
    createInputName();
    createInputComment();
    createSubmitBtn();
};

function createMoreForms() {
    createCommentList();
    createUserForm();
};

export { createMoreForms };