const quizData = [
    {
        question: 'It is the righteousness of Christ legally imputed on sinners by faith.',
        a:'Sanctification',
        b: 'Justification',
        c: 'Faith',
        corect: 'b'
    
    }, 
    {
        question: 'It is referred to as the greatest mystery of the Christian faith.',
        a:'Incarnation',
        b: 'Resurrection',
        c: 'Cross',
        corect: 'a'
    },
    {
        question: 'Who is the author of the Epistle to Hebrews',
        a:'Apollos',
        b: 'Silvanus',
        c: 'Paul',
        corect: 'c'
    },
    {
        question: 'It is the power of God unto salvation for those who believe.',
        a:'Christ',
        b: 'Gospel',
        c: 'Grace',
        corect: 'b'
    }
];

//declare variables 
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const submitBtn = document.getElementById("btn");

a_text.value = 'Okay';
console.log(a_text);

// Keep track of the current question - 0 Index
let currentQuiz = 0;
let answer = undefined;

// add loadQuiz function that will populate the UI
// this will be called everytime we click submit
const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}


const getSelected = () => {
    const answerEls = document.querySelectorAll(".answer");

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
}


submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        // TODO: Show Results
        console.log("You've finished!");
    }
  
})