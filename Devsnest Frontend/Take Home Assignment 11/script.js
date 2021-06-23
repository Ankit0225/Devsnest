const startBtn =  document.querySelector('.start')
const nextBtn =  document.querySelector('.next')
const showquestions = document.getElementById('question-box')

const problems = document.querySelector('question')
const answerbtnelement = document.querySelector('.answer')

let shufflethequestions, currentquestionindex

startBtn.addEventListener('click', startthegame)
function startthegame(){
  console.log('started');
  startBtn.classList.add('behind')
  shufflethequestions = questions.sort(() => Math.random() - .5)
  currentquestionindex = 0;
  showquestions.classList.remove('behind')
  nextQuestion()
}

function nextQuestion(){
    showproblems(shufflethequestions[currentquestionindex])
}

function showproblems(problem){
   problems.innerText = question.question
   question.answers.forEach(solution => {
       const btn = document.createElement('button')
       btn.innerText = solution.innerText
       btn.classList.add('btn')
       if(solution.right) {
           btn.dataset.right = solution.right
       }
       btn.addEventListener('click' ,selectAnswer)
       answerbtnelement.appendChild(btn   )
   })
}
function selectAnswer(f){
     
}

var questions = [
    {
      question: 'What is full form of HTML ?',
      answers = [
          {
              ans: 'Hypertext Markup Language', right: true   
          },
          {
            ans: 'Hypertense Markup Language', right: false   
        },
      ] 
    }
]