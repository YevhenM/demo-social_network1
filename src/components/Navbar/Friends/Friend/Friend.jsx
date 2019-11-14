import React from 'react';
import s from './Friend.module.css';
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    return (

              <div className={s.frend}>
                  <img src={props.userpic} alt="userpic"/>
                  <div className={s.frName}>{props.name}</div>

              </div>

        /*<div className={s.frend}>
            <img src="https://static.politico.com/e9/77/8366b6844a7a963285e23a4caaa3/bresnahan-john.jpg" alt="userpic"/>
            <div className={s.frName}>John</div>
        </div>*/


    );    
}

export default Friend;