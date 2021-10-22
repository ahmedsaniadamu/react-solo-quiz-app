import React from 'react' ;
import { Link } from 'react-router-dom';
//circular progress bar
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css' ;
import AppContext from '../../AppContext';

const Sidebar = () => {

   const store = React.useContext(AppContext)
   
   //destructured an object with required properties from global store.
   const { isAboutToStartQuiz ,
            selectedSubject , 
            currentIndex , 
            startCountingQuestion ,
            startTimer,
            resetTimer ,
           } = store.state ;

    //set up a a count down timer from 3 minutes to 0..
    const[ timer , setTimer ] = React.useState( /* 3 minutes in seconds */ 180 ) ;
    
    React.useEffect( () => {
        //start the counter the moment quiz start.
         startTimer && setTimeout(() => {
            //  update the counter only when the time is between 0 to 300
            if(timer > 0 && timer <= 180 )   setTimer(timer - 1)
         }, 1000);
         // ends the quiz on timeout 
         ( timer <= 0 &&  startTimer === true)  && store.dispatch({ type : 'TIME_OUT'})
         //reset time if user goes back to homepage
         resetTimer && setTimer(180)
    }  )

   //custom style for circular progress bar
   const progressbarStyle = (pathColor='#fff',trailColor='#0B0',textColor='#fff') => {
       return buildStyles({ pathColor , trailColor ,textColor });
   }


    return (
        <div className='sidebar w-100 p-0 m-0 pt-2'>
            <h1 className='text-center font-weight-bold d-none d-md-block'> 
                  <i className='fas fa-globe mr-2'></i> 
                   Solo Quiz App
            </h1>
            <h6 className='mt-md-5 pl-2 subject'> 
                      <b>Subject</b> : { isAboutToStartQuiz ? selectedSubject : 'Unknown' }
            </h6>
             <div className="wrapper pt-3 pt-md-0"> 
            <div className='m-0 p-0 completed  mt-md-5'>
                <div className='progress bg-transparent mx-md-auto'>
                     
                      <CircularProgressbarWithChildren 
                        styles = { /* use the default function style */ progressbarStyle() }
                        value={  startCountingQuestion ? currentIndex : 0} 
                        maxValue={8} minValue={0}
                      >
                          <h6 className='text-center mt-2 mt-md-3'> 
                                      Completed  : {
                                                    startCountingQuestion ?  
                                                    /* last number that will be recieved from store is 9
                                                       so below condition check if <= 8 set it back
                                                       to 8 */
                                                         currentIndex <= 8 ? currentIndex : 8  :
                                                     0
                                                     } / 8 
                           </h6>
                     </CircularProgressbarWithChildren>

                </div>
                 
            </div>

            <div className='timer  mt-md-5 '>
                     <div className='progress bg-transparent mx-auto'>
                         <CircularProgressbarWithChildren 
                           styles={progressbarStyle()}
                            value={  timer } 
                            minValue = { 0 }
                            maxValue = { 180 }
                           >
                            <i className='far fa-clock'></i>
                            <p className='m-0 p-0 '>
                                 { 
                                   /* converted the timer from seconds to minutes and
                                      convert the resulting number into string data type 
                                      and replace decimal point (.) with (:) 
                                     */
                                           
                                        /* check if timer is not less than 0 */
                                       (timer / 60 ) > 0 ? 
                                           (timer/60).toFixed(3).toString().replace('.' ,':').slice(0,4)
                                                  :
                                            '0:00'
                                    }
                             </p>
                         </CircularProgressbarWithChildren>
                     </div>
                </div> 

              <Link 
                  to='/' className='btn btn-outline-light d-none d-md-block w-75 mx-auto'
                  onClick={ () =>  {
                    store.dispatch({type:'RESET_QUIZ'})
                  }}
               > 
                    Back to home 
              </Link>
              </div>
        </div>
    )
}

export default Sidebar
