leftBtn = document.getElementById('left-btn')
rightBtn = document.getElementById('right-btn')
images = document.querySelectorAll('.card')

var currentTransform = 0
var limit = (images.length-1)*-100

leftBtn.addEventListener('click', (e) => {
    if (currentTransform < 0 ) {
        currentTransform += 100
        // console.log(currentTransform)
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    } else {
        currentTransform = limit 
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    }
    // console.log(e);
})

rightBtn.addEventListener('click', (e) => {
    if (currentTransform > limit) {
        currentTransform -= 100
        // console.log(currentTransform)
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    } else {
        currentTransform = 0
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    }
})


setInterval(() => {
    if (currentTransform > limit) {
        currentTransform -= 100
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    } else {
        currentTransform = 0
        images.forEach(img => {
            img.style.transform = `translateX(${currentTransform}%)`
        })
    }
},20000)