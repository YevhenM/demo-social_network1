import React from 'react';
import preloader from "../../assets/images/loading.gif";
import s from "./Preloader.module.css"

let Preloader = (props) => {

    return  <div className={s.pict}> <img src={preloader}/>  </div>
}

export default Preloader