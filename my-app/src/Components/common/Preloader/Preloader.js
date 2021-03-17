import s from './Preloader.module.css'
import isLoading from "../../../assets/gif/loading-gif-png-5.gif";
import React from "react";

const Preloader = () => {
    return (
        <div className={s.preLoader_Wrapper}>
            <img className={s.preLoader} src={isLoading} alt="isLoading"/>
        </div>

    )
}

export default Preloader