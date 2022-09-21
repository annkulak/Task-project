function createInterfaceVideoBar() {
    const videoContainer = document.createElement('div');
    document.querySelector('.video-vidget-addition').insertAdjacentElement('afterBegin', videoContainer);
    videoContainer.classList.add('video-vidget-container');

    const mainVideo = document.createElement('div');
    videoContainer.insertAdjacentElement('afterBegin', mainVideo);
    mainVideo.classList.add('video-vidget-content');

    const blackout = document.createElement('div');
    videoContainer.append(blackout);
    blackout.classList.add('blackout');

    const titleMainVideo = document.createElement('div');
    videoContainer.insertAdjacentElement('beforeEnd', titleMainVideo);
    titleMainVideo.classList.add('video-vidget-title');
};

function createTitleVideoBar() {
    const textTitleBlock = document.createElement('div');
    document.querySelector('.video-vidget-title').insertAdjacentElement('afterBegin', textTitleBlock);
    textTitleBlock.classList.add('video-vidget-title-text');
    textTitleBlock.innerHTML = 'Пейзажи, от которых захватывает дух, богатая история и вкусная еда — ваше путешествие в Италию станет незабываемым.';

    const buttonBlock = document.createElement('div');
    document.querySelector('.video-vidget-title').insertAdjacentElement('beforeEnd', buttonBlock);
    buttonBlock.classList.add('video-vidget-button-block');

    const buttonGo = document.createElement('button');
    buttonBlock.insertAdjacentElement('afterBegin', buttonGo);
    buttonGo.classList.add('button-light');
    buttonGo.innerHTML = 'Жизнь по-итальянски';
    buttonGo.id = 'Жизнь по-итальянски';
};

function createContentVideoBar() {
    const mainVideo = document.createElement('div');
    document.querySelector('.video-vidget-content').insertAdjacentElement('afterBegin', mainVideo);
    mainVideo.classList.add('main-youtube');
    mainVideo.id = 'U5Bf7AF-3Yk';
    mainVideo.style.width = '870px';
    mainVideo.style.height = '490px';

    let youtubeMainVideo = mainVideo.classList;
    getVideoPlayer(youtubeMainVideo);
};

function getVideoPlayer(youtubeMainVideo) {
    const videos = document.getElementsByClassName(youtubeMainVideo);
    const nb_videos = videos.length;

    for (let i = 0; i < nb_videos; i++) {
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        videos[i].style.backgroundSize = 'cover';

        const play = document.createElement('div');
        videos[i].appendChild(play);
        play.setAttribute('class', 'play');

        videos[i].onclick = function () {
            const iframe = document.createElement('iframe');
            const iframe_url = 'https://www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1';
            iframe.setAttribute('src', iframe_url);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('sound', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.width = this.style.width;
            iframe.style.height = this.style.height;
            this.parentNode.replaceChild(iframe, this);
        };
    };
};

function createVideoBar() {
    createInterfaceVideoBar();
    createTitleVideoBar();
    createContentVideoBar();
};

export { createVideoBar };