// swiper function
const LeftIcon = document.querySelector('.left-icon');
const RightIcon = document.querySelector('.right-icon');
const CardSection = document.querySelector('.new-card-section');

LeftIcon.addEventListener('click', ()=> {
    CardSection.scrollLeft -= 350
});
RightIcon.addEventListener('click', ()=> {
    CardSection.scrollLeft += 350
});


// selection button

const TopSong = document.querySelector('.top-song')
const NewReleased = document.querySelector('.new-released')
const HindiPart = document.querySelector('.hindi-main-part')
const EnglishPart = document.querySelector('.english-main-part')

function TopSongActiveBtn()  {
    TopSong.style.display = 'block';
    NewReleased.style.display = 'none';
    HindiPart.style.display = 'none';
    EnglishPart.style.display = 'none';
};

function NewReleasedActiveBtn()  {
    TopSong.style.display = 'none';
    NewReleased.style.display = 'block';
    HindiPart.style.display = 'none';
    EnglishPart.style.display = 'none';
};

function HindiPartActiveBtn()  {
    TopSong.style.display = 'none';
    NewReleased.style.display = 'none';
    HindiPart.style.display = 'block';
    EnglishPart.style.display = 'none';
};

function EnglishPartActiveBtn()  {
    TopSong.style.display = 'none';
    NewReleased.style.display = 'none';
    HindiPart.style.display = 'none';
    EnglishPart.style.display = 'block';
};