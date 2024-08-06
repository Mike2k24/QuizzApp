import { useState } from 'react'
import quizzData from './quizzData.json'
import './App.css'
import AnswerButton from './components/AnswerButton.jsx'

function App() {
  //Creating a useState to hold the entier data we have in the JSON file
  const [questions, setQuestions] = useState(quizzData)
  //Creatign another useState variable that will track the index number of the variable held in an object
  const [currentQuestion, setCurrentQuesion] = useState(0)
  //Creating another useState variable to hold a sting that will display a message depending on the option selected
  const [message, setMessage] = useState("")

  /**
   * Creating a function that will check is the users attempt is correct by comparing the option to the
   * correct answer. using a setTimeout function to replace our useState message as an empty string.
   * 
   * @param attempt - the parameter for my function that will have the "options" object passed into it
   * @returns a display message below the question for a certain amount of time. Then incrementing the index number
   */
  function userAttempt(attempt){
    if(attempt === questions[currentQuestion].correctAnswer){
      setCurrentQuesion(currentQuestion + 1)
      setMessage("CORRECT")
      setTimeout(() => {setMessage("")}, 1500)
    }else{
      return(setMessage("INCORRECT"))
    }
    if(currentQuestion === questions.length - 1){
        setCurrentQuesion(0)
      }
   }

  return (
    <div className='quizz-gm'>
      <h1>{questions[currentQuestion].question}</h1>
      <h3>{message}</h3>
      {questions[currentQuestion].options.map((option, index) => {
        return(
          <div className='options'>
            <AnswerButton
            label={option}
            key={index}
            /**
             * to pass the function we created above to work, we need to insert it into the body of this
             * oneline function and putting the "option" in its play button so then it will be passed to the
             * parameter "attempt" in our function
             */
            action={()=> {userAttempt(option)}}/>
          </div>  
        )
      })}
    </div>
  )
}

export default App
