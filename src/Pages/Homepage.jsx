import React , { useContext } from 'react' ;
import { Link } from "react-router-dom"
import AppContext from '../AppContext';

const Homepage = () => {

      const store = useContext(AppContext) ;

      React.useEffect(() => {
          window.scroll(0,0) ;
      }, [])
       
    return (
        <section className='homepage'>
            <h1 className='d-block py-2 mx-auto'>
                Availabe Subjects
            </h1>
          <div className='row w-100 p-0 m-0 mx-auto '>
                { store.state.courses.map( course => {
                    return <Subject key = { course.id } {...course} /> ;
                } ) }
         </div>
        </section>
    )
}

const Subject = ({courseName , image }) => {
       
    return ( 
            <div className='col-6 p-0 m-0 mt-1 mt-md-3 '>
                
                  <Link to={`/quiz/${courseName}`} className="Card mx-auto rounded-lg"> 
                     <img src={image} alt={courseName} className='d-block mx-auto'/>
                     <p className='m-0 py-2 text-center'> {courseName} </p>
                   </Link>

            </div>
        )
}

export default Homepage
