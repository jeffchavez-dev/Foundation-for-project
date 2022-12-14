const quizData = [
    {
        question: 'It is the righteousness of Christ legally imputed on sinners by faith.',
        a:'Sanctification',
        b: 'Justification',
        c: 'Faith',
        correct: 'b'
    
    }, 
    {
        question: 'It is referred to as the greatest mystery of the Christian faith.',
        a:'Incarnation',
        b: 'Resurrection',
        c: 'Cross',
        correct: 'a'
    },
    {
        question: 'Who is the author of the Epistle to Hebrews',
        a:'Apollos',
        b: 'Silvanus',
        c: 'Paul',
        correct: 'c'
    },
    {
        question: 'It is the power of God unto salvation for those who believe.',
        a:'Christ',
        b: 'Gospel',
        c: 'Grace',
        correct: 'b'
    }
];

//declare variables 
const questionEl = document.getElementById("question");
const startQuiz = document.getElementById("start-quiz");
const restartQuiz = document.getElementById("restart-quiz");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer");
const noAnswer = document.querySelector(".no-answer-selected");



function quizTimer() {
    let time = 5;
    const interval = setInterval(timer, 1000)
    function timer(){
        if(time === 0) {
        // alert('times up!')
        clearInterval(interval)
        } else {
            // console.log(time--)
        }
    }
}

// ShuffleQuiz 
const shuffleQuiz = (arr) => {
    arr.sort(() => Math.random() - 0.5);
}

shuffleQuiz(quizData);

startQuiz.addEventListener('click', () => {
    quiz.classList.add('show');
    startQuiz.classList.add('hide');
})


// Keep track of the current question - 0 Index
let currentQuiz = 0;
let score = 0; 



// add loadQuiz function that will populate the UI
// this will be called everytime we click submit
const loadQuiz = () => {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

loadQuiz();
// check if an answer is selected 
// when submit is clicked, the selection must be deselected


const getSelected = () => {

    let answer;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        } 
    });

    return answer;
}


function deSelectAnswers(){
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
  
    // check to see the answer
    const answer = getSelected();

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show Results
            quiz.innerHTML = `<h2 class="final-score">You answered correctly at ${score}/${quizData.length}`;
            restartQuiz.classList.add('retake');
        }
    }
   
  
})


restartQuiz.addEventListener('click', () => {
    location.reload()
})
