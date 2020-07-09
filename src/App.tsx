import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
}

const App: React.FC<AppType> = props => (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <MyNavbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>

                    <Route path='/news' component={Dialogs}/>
                    <Route path='/music' component={Dialogs}/>
                    <Route path='/settings' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
);


export default App;
