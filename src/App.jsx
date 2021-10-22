import React, { useEffect,useReducer} from 'react' ;

import { BrowserRouter as Router , Switch , Route} from 'react-router-dom' ;
//pages
import Homepage from './Pages/Homepage';
import QuizBoard from './Pages/QuizBoard'
//components
import Sidebar from './Pages/component/Sidebar'
// context api
import AppContext from './AppContext' ;
//global state
import { States } from './States';
// reducer function 
import reducer from './Reducer';
// sass file 
import './styles/index.scss' ;

const App = () => {

    const [state,dispatch] = useReducer( reducer , States) ;
  
    useEffect(() => {
       window.scroll(0,0)
    }, [] ) ;

    return (
        <AppContext.Provider value={{state , dispatch}} >
            <Router>  
                <section className=' row w-100 m-0 p-0 mx-auto'>
                    <div className='col-12 col-md-3 p-0 m-0'>
                       <Sidebar />
                    </div>
                    <div className='col-12 col-md-9 p-0 m-0'>
                        <Switch>
                            <Route path='/' exact> 
                                <Homepage /> 
                            </Route>
                            <Route path='/quiz/:courseName' children={ <QuizBoard />} /> 
                        </Switch>
                    </div>
                </section>
           </Router>
        </AppContext.Provider>
    )
}

export default App
