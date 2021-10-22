import React from "react";

const QuestionBoard = ({question,options}) => {
 return (
    <React.Fragment> 
       <div className='question-board pt-3 pt-md-5 border border-success mt-md-2 mx-auto px-2 rounded-lg'>                  
           {  question }                      
        </div>
        <div className='options-board pt-3 pt-4  mt-md-5 mx-auto px-2 rounded-lg'>                                            
           {
              options.map(    
                (option,id) => {                          
                           return (
                                 <div key={id} className='options-container'>
                                    <label 
                                        htmlFor={id}
                                        className='pl-2 border border-success py-2 mx-auto d-block rounded-lg'
                                        >
                                           <input 
                                              type='radio' name='option' id={id}  className='mx-2 mx-md-3'
                                              value={option}                                            
                                            />
                                            <span className='p-0 m-0'> { option } </span>
                                      </label>
                                 </div>
                           )
                      }
                 )
             }
        </div>
    </React.Fragment>
   )
}

export default QuestionBoard ;
