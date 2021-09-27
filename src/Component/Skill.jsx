import React from 'react';
import NavBar from './NavBar';
import Styles from './skill.module.css'
function Skill() {
    return (
        <>       
        <NavBar/>
        <h1>My skills</h1>
           <div className= {Styles.tech}> 
               <b className={Styles.tech}>Technical skills</b> <br/>
                  1: HTML <br/>
                  2: CSS  <br/>
                  3: J.S   <br/>
                  4: BOOTSTRAP <br/>
                  5: PYTHON <br/>
             </div>
             <div className= {Styles.nontech}>
                  <b className={Styles.nontech}>Non-Technical skills</b> <br/>
                  1: Graphic Designer(Begginer) <br/>
                  2: Basic level of video editing <br/>
                  3: Photo editing using Picsart <br/>
             </div>
        </>
    );
}

export default Skill;
