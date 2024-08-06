import './answerButtion.css'
/**
 * We are passing data using "label" to hold the object of the options for the user to choose from. 
 * Passing our fucntion called "userAttempt" in the "action" prop.
 * 
 * @param label and action 
 * @returns a div that will be our button and it holds the label
 */
export default function AnswerButton({label, action}){

    return(
        <div className='Answer-btn' onClick={action}>
            {label}
        </div>
    )
}