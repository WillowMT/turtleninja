const cart = document.getElementById('shopping')
const item01 = getid('item01')
const item02 = getid('item02')
const item03 = getid('item03')
const item04 = getid('item04')

const allItems = [item01, item02, item03, item04]

if (parseInt(getAllVal()) == 0 ) {
    cart.style.display = 'none'
}



document.querySelectorAll('.fa-solid').forEach(element => {
    element.addEventListener('click',() => {
        if (getAllVal() <= 0) {
            cart.style.display = 'none'
            return
        }
        cart.style.display = 'block'
        cart.innerText = getAllVal()
    })
})


function increment(obj) {
    num = parseInt(obj.innerText)
    num++
    obj.innerText = num
}

function decrement(obj) {
    num = parseInt(obj.innerText)
    if (num == 0 ) {
        return
    }

    num--
    obj.innerText = num
}

function getid(myid) {
    return document.getElementById(myid)
}

function getVal(obj) {
    return parseInt(obj.innerText)
}

function getAllVal() {
    const val1 = getVal(item01)
    const val2 = getVal(item02)
    const val3 = getVal(item03)
    const val4 = getVal(item04)
    return val1 + val2 + val3 + val4
}

