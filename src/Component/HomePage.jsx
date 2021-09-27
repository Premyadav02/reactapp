import React from 'react';
import NavBar from './NavBar';
import styles from "./home.module.css";
import img from './1.jpeg';
function HomePage() {
    return (
        <>
        <NavBar />
            <div className= {styles.div1} >
                <img src= {img} alt = "logo" className = {styles.image} />
            </div>
            <div className={styles.para}> Prem Yadav </div>
            <p className={styles.home}>
                Hello this is my  first React Project. Here i have create navbar, 3 button Home Page, Skill Page, About Page.  
            </p>
        </>
    );
}

export default HomePage;
