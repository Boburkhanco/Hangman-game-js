letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
words = [
    {
        question: "O'zbek milliy mashhur taomi?" ,
        answer: 'palov'
    },
    {
        question: 'Dunyodagi eng baland cho\'qqi?',
        answer: 'everest'
    },
    {
        question: "Haftaning eng ulug' kuni?",
        answer: 'juma'
    },
    {
        question: "Aqlga do'st tutsang, a'lo so'zlar, yo'qsa u balo so'zlar?",
        answer: 'til'
    },
    {
        question: "Katta chelak teshildi, Undan ko‘p suv to‘kildi",
        answer: "yomg'ir"
    },
    {
        question: "Ikki yaproq bir tanda, Kezar yozda chamanda.",
        answer: 'kapalak'
    },
    {
        question: "Beqasamdan yo‘li bor,Osmon-falakda chiqar.",
        answer: 'kamalak'
    },
    {
        question: "Onasidan kiyim-boshim,Bolasidan yog‘li oshim.",
        answer: 'paxta'
    },
    {
        question: "Oz qo‘ysangiz: «Sol»—deydi, Ko‘p qo‘ysangiz: «Ol!»— deydi.",
        answer: 'tarozi'
    },
    {
        question: "Mehmon bo‘lib bog‘ima, Hid purkar dimog‘ima.",
        answer: 'shamol'
    },
    {
        question: "Tim qora kichkina xol, To‘xtatar yo‘lda darhol.",
        answer: "nuqta"
    },
    {
        question: "Posbonidir u uyning, Ko‘zi, tili yo‘q uning.",
        answer: "qulf"
    },
    {
        question: "Ko‘kda qilich yarqiraydi, Suvda aksi yaltiraydi.",
        answer: "oy"
    },
    {
        question: "Olmasang yarim nafas, Yo‘ldan o‘tgani qo‘ymas.",
        answer: "vergul"
    },
    {
        question: "Ertak she`r-u matnlar, Yashar bir mamlakatda. Dunyoni o`rganishda, Uning xizmati katta.",
        answer: "kitob"
    }
]
let randomNum = Math.floor(Math.random() * words.length)
let chosenWord = words[randomNum]
let chosenWordA = chosenWord.answer
let chosenWordQ = chosenWord.question
let typingSpaceArray = []
let underScore = []
// tip2.textContent = words[0].question

// Ceate Underscores
let generateUnderscores = () => {
    for (let i = 0; i < chosenWordA.length; i++) {
        underScore.push('_')
        console.log(chosenWordQ);
        tip2.textContent = chosenWordQ
    }
    return underScore ;
}
typingSpace.textContent = generateUnderscores().join(' ')


// Keyboard Rendering
const keyboardRender = (letters) => {
    keys.innerHTML = ''
    letters.forEach(function(e){
        let LETTER = document.createElement('button')
        LETTER.setAttribute('class', 'letter')
        LETTER.setAttribute('type', 'button')
        LETTER.textContent = e
        keys.appendChild(LETTER)
        LETTER.addEventListener('click', e => {
            let Key = LETTER.textContent
            console.log(Key);
            // typingSpace.append(Key)
            typingSpaceArray.push(Key)
            let joinedKeysInArray = typingSpaceArray.join('')
            typingSpace.textContent = joinedKeysInArray
        })
    });
}
keyboardRender(letters)


// Delete Button
deleteBtn.addEventListener('click', e => {
    typingSpaceArray.pop()
    typingSpace.textContent = typingSpaceArray.join(' ')
    if (typingSpaceArray == '') {
        console.log(typingSpaceArray);
        generateUnderscores()
    }
})


// Keys Working
document.addEventListener('keypress', e => {
    let keycode = e.keyCode
    let keyword = String.fromCharCode(keycode)
    let theKey = e.key
    typingSpaceArray.push(theKey)
    typingSpace.textContent = typingSpaceArray.join('')
})

refreshBtn.addEventListener('click', e => {
    let result = typingSpace.textContent
    if (chosenWordA == result) {
        confirm("You won, Go On :)");
        location.reload()
    } else {
        alert("wrong .. :(");
    }
})

