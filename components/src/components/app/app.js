import React, {useState} from 'react';
import FirsComponent from '../FirsComponent/FirstComponent';
import SecondComponent from '../SecondComponent/SecondComponent';

import './app.css'

function WhoAmI(props){
    return(
        <div>
            <h1>User name is, surname - {props.name}, surname - {props.surname}</h1>
        </div>
    )
}

function App(){
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const changeActive = (data) => {
        setIsActive(data)
    }

    function handleClick(){

        if(!isActive){
           changeActive(true)
           console.log('component 1');
        }
        else{
            changeActive(false)
            console.log('component 2');
        }
    }

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        if(counter === 0){
            alert(`Counter must be more than 0, it goes ${counter - 1}`);
            return;
        }
        setCounter(counter - 1)
        
    }

    return(
        <div className="app">
            <WhoAmI name="Elnur" surname="Maharramli"/>
            <h2>Counter - {counter} </h2>
            <button className='btn btn-success' onClick={increment}>Click to add</button>
            <button className='btn btn-danger' onClick={decrement}>Click to remove</button>
            <button className='btn btn-primary' onClick={handleClick}>Click to change</button>

            {isActive ? <FirsComponent/> : <SecondComponent/>}
        </div>
    )
}

export default App;