import physics from './Subjects/physics' ;
import chemistry from './Subjects/chemistry';
import mathematics from './Subjects/mathematics' ;
import english from './Subjects/english' ;

const courses = [
    { 
        id:1,
        courseName:'English',
        image:require('./Assets/english.png').default,
        QandA: english 

     },
     { 
        id:2,
        courseName:'Mathematics',
        image:require('./Assets/mathematics.png').default,
        QandA : mathematics 

     },

     { 
        id:3,
        courseName:'Physics',
        image:require('./Assets/physics.png').default,
        QandA : physics

     },
     { 
        id:4,
        courseName:'Chemistry',
        image:require('./Assets/chemistry.png').default,
        QandA : chemistry 

     }
]

export default courses ;