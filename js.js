let catalog = document.getElementById('cnt-nav-2')


function hoverOn(e) {
    catalog.style.cssText = "background-color: #1C1B21;transition: ease-out 0.5s;border-radius: 23px 0px;height:140px";
}
function hoverOff() {
    catalog.style.cssText = 'transition: ease-out 0.4s;'
}


function navBarDisplayFlex() {
    let arr1 = document.getElementsByClassName('cnt-nav-2-1');
    let arr2 = document.getElementsByClassName('cnt-nav-2-1-1');
    for (let i = 0; i < arr1.length; i++) {
        arr1[i].addEventListener('mouseover', function () {
            arr2[i].style.display = 'flex';
        })
        arr1[i].addEventListener('mouseout', function () {
            arr2[i].style.display = 'none';
        })
    }
}
navBarDisplayFlex()

function sliderLeft() {
    let button = document.getElementById('arrow-btn-left');
    let arr = document.getElementsByClassName("main-sliders");
    let width = window.matchMedia('(max-width: 1300px)');
    let counter = 0;
    button.addEventListener('click', function () {
        if (width.matches == false) {
            if (arr[0].className == 'main-sliders hide') {
                counter = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].className !== 'main-sliders hide') {
                        counter++
                        if (counter == 1) {
                            arr[i + 2].className = 'main-sliders hide'
                            arr[i - 1].className = 'main-sliders';
                        }
                    }
                }
            }
        }
    })
}

function sliderLeftAdaptive() {
    let button = document.getElementById('arrow-btn-left');
    let arr = document.getElementsByClassName("main-sliders-devices");
    let width = window.matchMedia('(max-width: 1300px)');
    button.addEventListener('click', function () {
        if (width.matches) {
            if (arr[0].className == 'main-sliders-devices hide') {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].className !== 'main-sliders-devices hide') {
                        arr[i].className = 'main-sliders-devices hide';
                        arr[i - 1].className = 'main-sliders-devices';
                    }
                }
            }
        }
    })
}

function sliderRight() {
    let button = document.getElementById('arrow-btn-right');
    let arr = document.getElementsByClassName("main-sliders");
    let width = window.matchMedia('(max-width: 1300px)');
    let counter = 0;
    button.addEventListener('click', function () {
        if (width.matches == false) {
            if (arr[arr.length - 1].className == 'main-sliders hide') {
                counter = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].className !== 'main-sliders hide') {
                        counter++
                        if (counter == 3) {
                            arr[i - 2].className = 'main-sliders hide';
                            arr[i + 1].className = 'main-sliders';
                        }
                    }
                }
            }
        }
    })

}

function sliderRightAdaptive() {
    let button = document.getElementById('arrow-btn-right');
    let arr = document.getElementsByClassName("main-sliders-devices");
    let width = window.matchMedia('(max-width: 1300px)');
    let counter = 0;
    button.addEventListener('click', function () {
        if (width.matches) {
            if (arr[arr.length - 1].className == 'main-sliders-devices hide') {
                counter = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].className !== 'main-sliders-devices hide') {
                        counter++
                        if (counter == 1) {
                            arr[i].className = 'main-sliders-devices hide';
                            arr[i + 1].className = 'main-sliders-devices';
                        }
                    }
                }
            }
        }
    })
}

let popup = document.querySelector('#popup');
let burger = document.querySelector('#burger_field');
const body = document.body;

burger.addEventListener('click', popupFunc)

function popupFunc(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle("noScroll");
}

sliderLeft()
sliderRight()
sliderLeftAdaptive()
sliderRightAdaptive()
