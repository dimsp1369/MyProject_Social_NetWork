import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return <header className={s.header}>
        <div className={s.img}>
            <img src='https://i.pinimg.com/736x/4d/50/3a/4d503ad177dd613ac4eb77dff119735c.jpg'/>
        </div>
        <div className={s.title}>
            Fishenmen life
        </div>
    </header>

}

export default Header;