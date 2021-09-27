import React from 'react'
import NavBar from './NavBar';
import Styles from './about.module.css';
function About() {
    const[number, setNumber] = React.useState(0)
    return (
        <>
        <div>
            <NavBar/>
            <p className={Styles.para}>Hii my  name is Prem Yadav. I'm from Navi mumbai, i am in 3rd year(Software Engineering ).This is  my first react poject , i am also learing Backend, JavaScript, Java,   </p>
        </div>
        <div className = {Styles.add}>
            <p  className = {Styles.add}>{number}</p>
            <button  className = {Styles.add1} onClick={function ()  {
                setNumber(number + 1);
            }}>Click me</button>
        </div>
        </>
    );
}

export default About;
