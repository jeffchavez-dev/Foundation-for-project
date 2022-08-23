const quizData = [
    {
        question: 'It is the righteousness of Christ legally imputed on sinners by faith.',
        a:'Sanctification',
        b: 'Justification',
        c: 'Faith',
        corect: 'b'
    
    }, 
    {
        question: 'It is referred to as the greatest mystery of the Christian faith',
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
        question: 'It is the power of God unto salvation for those who believe',
        a:'Christ',
        b: 'Gospel',
        c: 'Grace',
        corect: 'b'
    }
];

const question = document.getElementById("question");
const a_text = document.getElementById("a");
const b_text = document.getElementById("b");
const c_text = document.getElementById("c");
const submitBtn = document.getElementById("btn");

let currentQuestion = 0;
let answer = undefined;

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
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
    currentQuestion++;

    if(currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        // TODO: Show Results
        console.log("You've finished!");
    }
  
})