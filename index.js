let saveEl = document.getElementById("save-el")
let rebCountEl = document.getElementById("rebCount-el")
let empCountEl = document.getElementById("empCount-el")
let rebCount = 0
let empCount = 0

function rebelIncrement() {
    rebCount += 1
    rebCountEl.textContent = rebCount
}

function rebelIncrementSd() {
    rebCount += 5
    rebCountEl.textContent = rebCount
}

function rebelIncrementDs() {
    rebCount += 10
    rebCountEl.textContent = rebCount
}

function empireIncrement() {
    empCount += 1
    empCountEl.textContent = empCount
}

function empireIncrementRc() {
    empCount += 5
    empCountEl.textContent = empCount
}

function empireIncrementRb() {
    empCount += 10
    empCountEl.textContent = empCount
}

function save() {
    rebCountEl.textContent = 0
    empCountEl.textContent = 0
    rebCount = 0
    empCount = 0
    
    
}
