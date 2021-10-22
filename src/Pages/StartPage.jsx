import React from 'react'
import AppContext from '../AppContext';

const StartPage = ({ courseName }) => {

    // global store by useReducer + context api
    const store = React.useContext(AppContext);

    const starQuiz = () => store.dispatch({type:'START_QUIZ'})

    return (

        <div className='start-page p-0 m-0 '>
              
              <h1 className='text-center mt-md-3'>  Details  </h1>
              
              <ul className='list-group p-0 bg-transparent border  mt-3 py-md-4'>
                  <li className='list-group-item bg-transparent py-2'>
                      <b> SUBJECT NAME </b> : { courseName }
                  </li>
                  <li className='list-group-item bg-transparent py-2'>
                      <b> TIME DURATION </b> :  3 minutes
                  </li>
                  <li className='list-group-item bg-transparent py-2'>
                      <b> TOTAL QUESTIONS </b> : 8 
                  </li>
                  <li className='list-group-item bg-transparent py-2'>

                        <button 
                               className='btn btn-success mx-auto btn-block py-1'
                               onClick = { starQuiz }
                         > 
                              Start Quiz 
                        </button>

                  </li>
              </ul>               
              
        </div>
    )
}

export default StartPage
