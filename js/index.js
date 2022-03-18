
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener('click',function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    }else{
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

// Main-slider
new Swiper('.main-slider .swiper', {
  direction: 'horizontal', //방향
  loop: true, //무한반복
  autoplay : false, //자동시작
  slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
  spaceBetween: 30, //슬라이드와 슬라이드 간격
  navigation : {
      prevEl : ".main-slider .swiper-prev",
      nextEl : ".main-slider .swiper-next"
  },
});
'use strict';

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();

new Swiper('.best-item .swiper', {
  direction: 'horizontal', //방향
  loop: true, //무한반복
  autoplay : true, //자동시작
  slidesPerView: 3, //한 번에 보여지는 슬라이드 개수
  spaceBetween: 10, //슬라이드와 슬라이드 간격
  navigation : {
      prevEl : ".best-item .swiper-prev",
      nextEl : ".best-item .swiper-next"
  },
  breakpoints: { //반응형 조건 속성
  320: { //320 이상일 경우
    slidesPerView: 1, //레이아웃 1열
  },
  768: {
    slidesPerView: 3, //3개의 레이아웃이 보이는거
  },
  1024: {
    slidesPerView: 3, //4개의 레이아웃이 보이는거
  },
}
});

function TaVs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tav]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tav]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tav');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tav');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new TaVs();

function showMore(){
  //더보기로 보여줄 요소를 변수에 저장
  const hide = document.querySelectorAll('.hide');
  //배열로 변경하고 4개씩 배열을 쪼개서 보이기
  //.from => .hide 배열로 변경
  //slice(0,4) => 4개씩 배열을 쪼개기
  const first =Array.from(hide).slice(0,4);
  //forEach 배열에 있는 함수문을 쓰고싶을떄 많이 사용
  first.forEach(item => {
      item.classList.remove('hide');

  });
  if(hide.length <= 4){
      hideMoreBtn();
  }
}
function hideMoreBtn(){
  document.getElementById('moreBtn').classList.add('hide');
};

//Masgic Scroll------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
       triggerElement: spyEl,
        triggerHook: 0.8,
     })   
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});



