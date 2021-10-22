import React from 'react'
import {  useParams} from 'react-router-dom'
import AppContext from '../AppContext'
//components
import QuestionBoard from './component/QuestionBoard';
import ScoreBoard from  './component/ScoreBoard'
import StartPage from './StartPage';

const QuizBoard = () => {
     
     // global store by useReducer + context api
     const store = React.useContext(AppContext);
     const { isQuizStart , timeOut , isFinished } = store.state ;

     //destructured the quiz name that appeared in the browser url bar
     const { courseName  } = useParams() ;
     
     //questions and answers
     const [ questionAndAnswer , setQuestionAndAnswer] = React.useState('') ;
            
     React.useEffect( () => {
           window.scroll(0,0) ;
           //send the selected subject name to the store (context api) so as to render it in the sidebar.
           store.dispatch({ type:'SUBJECT_SELECTED' , payload : { selectedSubject : courseName } }) ;

     } , [])


     React.useEffect( () => {         
        /* filter out the object that contains the questions and answers from the store.
             based on what subject was choosen from the homepage */

       let selectedSubject = store.state.courses.filter( courses =>  {
                                     return  courses.courseName === courseName ;
                              } ) ;
      
         setQuestionAndAnswer(selectedSubject) ;
     } , [] )


      const  [index , setIndex ] = React.useState(0) ,
             [score , setScore] = React.useState(0)         
              
     //a function that increases  index state by one each time a button is clicked.
      const moveToNextQuestion = () => {         
            setIndex( index + 1 ) ;
            // total question = 8 but array index start from 0. now total = 0 to 7
              
            if( index >=  7) {
                  setIndex( 7 ) ;
                   // notify the store if the user finishes the test
                   store.dispatch({type :'IS_FINISHED'})
                  /* stops the timer if the the user finishes test */
                  store.dispatch({type: 'STOP_TIMER'}) ;
            }   

                 //send the current index to the global store. so as to display in sidebar
                  store.dispatch({ type : 'MOVE_QUESTION_INDEX' , payload : { currentIndex : index + 2 }})
                    
                  // select all options elements
                  let  allOptions =   document.querySelectorAll('input[type="radio"]') ;
                 
                  //uncheck  the options radio button each time the user moves to next question.
                  for(let i = 0 ; i < allOptions.length ; i++){
                                                                   //  if true the return false
                        if(allOptions[i].checked === true ) {
                             
                              // score update.
                              if(  
                                     questionAndAnswer[0].QandA[index].options[i] 
                                     === 
                                     questionAndAnswer[0].QandA[index].answer
                                         ){
                                            setScore( score + 1 )
                                        }
                              allOptions[i].checked = false ;
                        }                  
                 }
                 // loop end
      }

     //conditional rendering ( if true start the quiz else display a details page )
     if( isQuizStart ){
        return   (
            <div className='p-2 mt-md-3 q-and-a-board'>
                 {
                       ( isFinished || timeOut ) ?
                         <ScoreBoard  score = { score }/>
                       : 
                       <QuestionBoard  options = { questionAndAnswer[0].QandA[index].options }
                       question = { questionAndAnswer[0].QandA[index].question } 
                      />                      
                 }
              <div>
                    <button  
                       onClick={ moveToNextQuestion } 
                       className='btn btn-success next-btn mx-auto '
                       style={{ display : isFinished || timeOut ? 'none' : 'block'}}                                                
                    > 
                        Next 
                   </button>
              </div>

            </div>
     )
     }

     else{
        return (
            <>
                 < StartPage courseName = { courseName } />                                   
           </>
       )
    }

}

export default QuizBoard
