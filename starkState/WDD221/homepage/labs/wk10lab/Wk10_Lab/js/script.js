//  This function is enclosed in parenthesis, something you haven't seen yet
//  This type of function is invoked immediately, AKA Immediately-Invoked Function Expression
//  IIFE, pronounced iffy

(function() 
{
  function buildQuiz() 
  {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
	// observe the => syntax, which is basically the same as using return
	
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) 
	  {
        // ...add an HTML radio button, use the push method to add an array item
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() 
  {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => 
	{
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) 
	  {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else 
	  {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

 /* 
    The purpose of this assignment is for you to create at least five (5) 
      JavaScript quiz questions.
	  
	It's also a good lesson in observing functional code to clarify the concepts

*/
	  
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = 
  [
    {
      question: "Q1: What are the 3 special values in JavaScript that are considered numbers, but don't behave like normal numbers?",
      answers: 
	  {
        a: "Father, Son, and the Holy Spirit",
        b: "1, 2, and 3",
        c: "Infinity, -Infinity, Nan"
      },
      correctAnswer: "c"
    },
	
    {
      question: "Q2: How do you enclose a text string in Javascript?",
      answers: 
	  {
        a: "Single Quotes",
        b: "Double Quotes",
        c: "Backticks",
		d: "All Of the Above"
      },
      correctAnswer: "d"
    },
	
    {
      question: "Q3: What data type am I describing? This type can be written as a list of values between square brackets and is separated by commas?",
      answers: 
	  {
        a: "Array",
        b: "Boolean",
        c: "Object"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4: What is the difference between JavaScript and Java?",
      answers: 
	  {
        a: "None. They are the same!",
        b: "Javascript is an object-oriented scripting language while Java is an object-oriented programming language.",
        c: "Javascript is an object-oriented programming language while Java is a object-oriented scripting language.",
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5: What is the difference between let and var?",
      answers: 
	  {
        a: "They can be used interchangeably.",
        b: "Let is scoped by function while var is scoped by a block.",
        c: "Let is scoped by a block while var is scoped by function.",
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q6: What is the output of the following? Console.log(3 + 2 + ''7'');",
      answers: 
	  {
        a: "57 because the addition operation is performed from left to right, and when a string is encountered, it performs concatenation.",
        b: "12 because PEMDAS!",
        c: "This code contains errors.",
      },
      correctAnswer: "a"
    }
	
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
