import React from 'react'
import AppContext  from '../../AppContext' ;
import { Link } from 'react-router-dom';

const ScoreBoard = ({score}) => {

    const componentClass = 'question-board border border-success mt-md-2 mx-auto px-2 rounded-lg'

    return ( <>
              <div className={componentClass}>
                    <div className='w-100 my-0 p-0 row mx-auto score-board'>
                        <div className="col-4 p-0 m-0 ">                        
                            <img
                                src={ require('./Assets/winning.png').default }
                                alt="winning" 
                                className='rounded-lg mt-0 p-0'
                            />
                        </div>
                        <div className="col-8 p-0 m-0">
                            <h6 className='text-sm-center mt-2 mb-0 pb-0'> Congratulation </h6>
                            <ul className="list-group bg-transparent m-0 p-0 border-0">
                                <li className='list-group-item bg-transparent m-0 my-1 py-0 py-sm-1 border-0'>
                                    <big> Your Score : </big> { score }
                                </li>
                                <li className='list-group-item bg-transparent m-0 my-1 py-0 py-sm-1  border-0'>
                                    <big> Completed : </big> 8/8
                                </li>
                                <li className='list-group-item bg-transparent m-0 my-1 py-0 py-sm-1 border-0'>
                                    <big> Failed : </big> {  /* 8 = total question */ 8 - score }
                                </li>                                                            
                            </ul>
                        </div>
                    </div>
              </div>
              <div className='options-board pt-3 pt-4  mt-5 mx-auto px-2 rounded-lg menu'>
                    <div className="row mx-auto w-100 ">
                         <MenuLink name = ' home ' icon = 'fas fa-home' text = 'Home' />
                         <MenuLink name = 'replay' icon = 'fas fa-redo' text = 'Play Again' />
                         <MenuLink name = ' share ' icon='fas fa-share-alt'  text = 'Share Score'/>
                         <MenuLink name = ' leader-board ' icon= 'fas fa-cogs' text='Leader Board' />
                    </div>
              </div>
      </> )
}

const MenuLink = ({ name , icon , text}) => {

    const store = React.useContext(AppContext)

    return (
        <Link to='/' className='col-6 col-sm-3 mt-2' onClick={ () => store.dispatch({type:'RESET_QUIZ'}) } > 
            <div className='d-flex justify-content-center'>
                    <span className={`d-flex justify-content-center ${name} align-items-center rounded-circle`}>
                        <i className={icon}></i>
                    </span>
            </div>
            <b className='d-block  text-dark  mt-1 text-center'> {text} </b>
       </Link>
    )
}

export default ScoreBoard ;
