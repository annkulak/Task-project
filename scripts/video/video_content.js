import { videoCatalog } from './video_catalog.js';

let youtube_width = '345px';
let youtube_height = '194.0625px';
let youtube_code;
let youtube_iframe = [];

class VideoBlock {

    constructor(name, yt_code, videoLink, place) {
        this.name = name;
        this.id = yt_code;
        this.videoLink = videoLink;
        this.place = place;
        this.init();
    }

    init() {
        this.element = document.createElement('article');
        this.element.classList.add('video-container');
        this.initVideoElement();
        this.initTitleVideoElement();
    }

    initVideoElement() {
        this.videoElement = document.createElement('div');
        this.element.insertAdjacentElement('afterBegin', this.videoElement);
        this.videoElement.classList.add('video-block');

        this.youtube = document.createElement('div');
        this.videoElement.insertAdjacentElement('afterBegin', this.youtube);
        this.youtube.classList.add('my-youtube');
        this.youtube.id = this.id;
        this.youtube.style.width = youtube_width;
        this.youtube.style.height = youtube_height;
        this.youtube.style.backgroundImage = 'url(http://i.ytimg.com/vi/' + this.youtube.id + '/sddefault.jpg)';
        this.youtube.style.backgroundSize = 'cover';

        this.play = document.createElement('div');
        this.youtube.append(this.play);
        this.play.setAttribute('class', 'play');
    }

    initTitleVideoElement() {
        this.titleVideoElement = document.createElement('h1');
        this.element.insertAdjacentElement('beforeEnd', this.titleVideoElement);
        this.titleVideoElement.classList.add('title-video-block');
        this.titleVideoElement.innerHTML = this.name;
    }

    youtubeClick() {
        this.youtube.addEventListener('click', () => {
            new Audio('./other/sound/sound-click-3.mp3').play();
            youtube_code = this.youtube.id;
            createVideoPlayer(youtube_code);
            this.youtube.parentNode.replaceChild(youtube_iframe, this.youtube);
        });
    };
};

const videoContent = [];
let move = 12;
let moveStart = 0;
let moveEnd = moveStart + move;
let moveMaximum = videoCatalog.length - 1;

function removeVideoContent() {
    const content = document.querySelectorAll('.video-bar.video-addition>article');
    if (content) {
        content.forEach(article => {
            article.remove();
        });
    };
};

function getVideoContent() {
    videoContent.length = 0;
    removeVideoContent();
    if (moveEnd < moveMaximum) {
        for (let i = moveStart; i < moveEnd; i++) {
            videoContent[i] = new VideoBlock(videoCatalog[i].name, videoCatalog[i].yt_code, videoCatalog[i].videoLink, videoCatalog[i].place);
            const videoAddition = document.querySelector('.video-bar.video-addition');
            videoAddition.append(videoContent[i].element);
            videoContent[i].youtubeClick();

        };
    } else {
        for (let i = moveStart; i < moveMaximum + 1; i++) {
            videoContent[i] = new VideoBlock(videoCatalog[i].name, videoCatalog[i].yt_code, videoCatalog[i].videoLink, videoCatalog[i].place);
            const videoAddition = document.querySelector('.video-bar.video-addition');
            videoAddition.append(videoContent[i].element);
            videoContent[i].youtubeClick();
        };
    };
    return videoContent;
};

function createVideoPlayer(youtube_code) {
    const iframe = document.createElement('iframe');
    const iframe_url = 'https://www.youtube.com/embed/' + youtube_code + '?autoplay=1&autohide=1';
    iframe.setAttribute('src', iframe_url);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('sound', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = youtube_width;
    iframe.style.height = youtube_height;
    youtube_iframe = iframe;
};

function flippingVideoContent() {
    const pageButton = document.querySelectorAll('.button-dark');

    pageButton.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('button-back')) {
                new Audio('./other/sound/sound-click-3.mp3').play();
                pageBack();
                getVideoContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else if (button.classList.contains('button-next')) {
                new Audio('./other/sound/sound-click-3.mp3').play();
                pageNext();
                getVideoContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else {
                return;
            };
        });
    });
};

function pageBack() {
    if (moveStart > 0) {
        moveEnd = moveStart;
        moveStart = moveEnd - move;
    };
};

function pageNext() {
    if (moveEnd < moveMaximum) {
        moveStart = moveEnd;
        moveEnd = moveStart + move;
    };
};

function buttonAnimation() {
    const buttonBack = document.querySelector('.button-back');
    const buttonNext = document.querySelector('.button-next');

    if (moveStart === 0) {
        buttonBack.classList.add('invert');
        buttonNext.classList.remove('invert');

    } else if (moveEnd > moveMaximum) {
        buttonNext.classList.add('invert');
        buttonBack.classList.remove('invert');

    } else {
        buttonBack.classList.remove('invert');
        buttonNext.classList.remove('invert');
    };
};

function moviRestart() {
    moveStart = 0;
    moveEnd = moveStart + move;
    return;
};

export { getVideoContent, flippingVideoContent, moviRestart };