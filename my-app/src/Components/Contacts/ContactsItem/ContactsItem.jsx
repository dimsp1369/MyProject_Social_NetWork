import React from 'react';
import s from './../Contacts.module.css'
import {NavLink} from "react-router-dom";



const ContactItem = (props) => {
    let path = '/contact/' + props.id;
    return <div className={s.contact} key={Math.random()}>
        <NavLink to={path} activeClassName={s.active}> <img
            src="https://tse3.mm.bing.net/th/id/OIP.Sd5LfomNNglJVJ3xQ5kkjQAAAA?pid=Api&rs=1"
            alt="avatar"/> {props.name}</NavLink>
    </div>
};


export default ContactItem;