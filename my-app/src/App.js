import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import RightSide from "./Components/RightSide/RightSide";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Friends from "./Components/Friends/Friends";
import ContactsContainer from "./Components/Contacts/ContactsContainer";


function App(props) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/contact'
                       render={() => <ContactsContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends state={props.state.friendsPage}/>}/>
            </div>
            <RightSide/>
            <Footer/>
        </div>
    );
}


export default App;
