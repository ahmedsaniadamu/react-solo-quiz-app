
const Reducer = (state,action) => {
     
    switch(action.type){

          case 'START_QUIZ' :
               return { 
                    ...state ,
                     isQuizStart : true,
                      startCountingQuestion : true ,
                       startTimer : true ,
                       resetTimer:false ,
                       timeOut : false 
                    }

          case  'SUBJECT_SELECTED' : 
                return {   
                         ...state ,
                        selectedSubject : action.payload.selectedSubject,
                        isAboutToStartQuiz : true 
                       } ;

          case 'MOVE_QUESTION_INDEX' :
               return {
                     ...state , 
                    currentIndex : action.payload.currentIndex
                    }

          case 'RESET_QUIZ' :
               return { 
                        ...state , 
                        isQuizStart : false , 
                        isAboutToStartQuiz : false , 
                        currentIndex : 1 ,
                        startCountingQuestion : false ,
                        startTimer: false ,
                        resetTimer : true ,
                        timeOut : false ,
                        isFinished : false ,
                    }
          case 'STOP_TIMER' :
                return { ...state , startTimer: false   }

           case 'TIME_OUT' :
               return { 
                        ...state, timeOut : true ,
                         startTimer : false ,
                    }
           
               case 'IS_FINISHED' : 
               return { ...state , isFinished : true }
         default :
            return state ;
     }

}

export default Reducer
