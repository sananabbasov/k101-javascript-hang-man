let userword = document.getElementById("userword")
let enterButton = document.getElementById("enterButton")
let myWords = document.getElementById("myWords")
let wrongList = document.getElementById("wrongList")
let myHealth = document.getElementById("health")

let words = ['apple', 'banana']
let randomNumber = Math.floor(Math.random() * (words.length))
let findedWord = words[randomNumber]



let wordArr = []
for (let i = 0; i < findedWord.length; i++) {
    wordArr.push(findedWord[i])
}
// wordArr = ['a','p','p','l','e']

console.log(wordArr);

for (let a = 0; a < wordArr.length; a++) {
    myWords.innerHTML += `<h1 class="btn btn-success me-2">_</h1>`
}

var health = '<img class="heart" src="vendors/images/heart.png" />'

for (let index = 0; index < 6; index++) {
    myHealth.innerHTML += health
}

console.log()

console.log(myWords.childNodes[0].innerHTML);

enterButton.addEventListener('click', function () {
    userdata(userword.value)
})


const userdata = (data) => {

    let trueAnswers = []
    let falseAnswers = []

    //  let indexData = wordArr.indexOf(data) 6
    if (wordArr.includes(data)) {
        for (let x = 0; x < wordArr.length; x++) {
            if (wordArr[x] == data) {
                myWords.childNodes[x].innerText = data
            }
        }
        console.log(wordArr.length)
        if (wordArr.length == 5) {
            alert("Qalib geldin.")
        }

    } else {
        wrongList.innerHTML += `<div class="badge text-bg-danger me-2">${data}</div>`
        myHealth.childNodes[myHealth.childNodes.length - 1].remove('img')
        if (myHealth.childNodes.length == 0) {
            getAlert()
        }
    }

}


const getAlert = () => {
    Swal.fire({
        title: 'Game over!',
        text: 'Try again.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        icon: 'error',
    }).then((a) => {

        window.location = "/"

    })
}