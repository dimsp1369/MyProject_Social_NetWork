import s from "../../Friends/Friends.module.css";
import isLoading from "../../../assets/gif/loading-gif-png-5.gif";
import React from "react";

const Preloader = (props) => {
    return (
        <img className={s.isLoader} src={isLoading} alt="isLoading"/>
    )
}

export default Preloader