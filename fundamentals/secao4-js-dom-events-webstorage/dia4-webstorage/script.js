const backColor = document.getElementById('background-color')
let btnsBC = backColor.getElementsByTagName('button')

const fontColor = document.getElementById('font-color')
let btnsFC = fontColor.getElementsByTagName('button')

const fontSize = document.getElementById('font-size')
let btnsFS = fontSize.getElementsByTagName('button')

const fontFamily = document.getElementById('font-family')
let btnsFF = fontFamily.getElementsByTagName('button')

const lineHeight = document.getElementById('line-height')
let btnsLH = lineHeight.getElementsByTagName('button')

const main = document.getElementsByTagName('main')[0]

function changeBackColor (event) {
    main.style.backgroundColor = event.target.innerText
    localStorage.setItem('backgroundColor', event.target.innerText)
}

for (index of btnsBC) {
    index.addEventListener('click', changeBackColor)
}

function changeTextColor (event) {
    main.style.color = event.target.innerText
    localStorage.setItem('textColor', event.target.innerText)
}

for (index of btnsFC) {
    index.addEventListener('click', changeTextColor)
}

function changeFontSize (event) {
    main.style.fontSize = event.target.innerText
    localStorage.setItem('fontSize', event.target.innerText)
}

for (index of btnsFS) {
    index.addEventListener('click', changeFontSize)
}

function changeLineHeight (event) {
    main.style.lineHeight = event.target.innerText
    localStorage.setItem('lineHeight', event.target.innerText)
}

for (index of btnsLH) {
    index.addEventListener('click', changeLineHeight)
}

function changeFontFamily (event) {
    main.style.fontFamily = event.target.innerText
    localStorage.setItem('fontFamily', event.target.innerText)
}

for (index of btnsFF) {
    index.addEventListener('click', changeFontFamily)
}


previousTextColor = localStorage.getItem('textColor')
previousbackgroundColor = localStorage.getItem('backgroundColor')
previousFontSize = localStorage.getItem('fontSize')
previousFontFamily = localStorage.getItem('fontFamily')
previousLineHeight = localStorage.getItem('lineHeight')

window.onload = () => {
    main.style.backgroundColor = previousbackgroundColor
    main.style.lineHeight = previousLineHeight
    main.style.color = previousTextColor
    main.style.fontSize = previousFontSize
    main.style.fontFamily = previousFontFamily
}