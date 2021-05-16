import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import RightSide from "./Components/RightSide/RightSide";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import ContactsContainer from "./Components/Contacts/ContactsContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>
                <Route path='/contact'
                       render={() => <ContactsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
            </div>
            <RightSide/>
            <Footer/>
        </div>
    );
}


export default App;
