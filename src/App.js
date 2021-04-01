import { NativeSelect } from '@material-ui/core';
import React, {useEffect, useState, } from 'react';
import CounterContainer from './containers/CounterContainer';
import NavContainer from './containers/NavContainer'
import SessionCardContainer from './containers/SessionCardContainer';
import MypageContainer from './containers/MypageContainer';
import SessionCreateContainer from './containers/SessionCreateContainer';
import ProfileDetail from './components/mypage/ProfileDetail';
import MypageEdit from './components/mypage/MypageEdit';
import MySessionEdit from './components/mypage/MySessionEdit'
import PreQuestions from './components/sessionCard/PreQuestions';
// import MainPage from "./components/MainPage" 
// import 'fontsource-roboto'

import { Route, Switch, useHistory } from 'react-router-dom'
import SessionMatchContainer from './containers/SessionMatchContainer';

import {LoginPage} from './components/onBoard'

import { connect, useSelector, useDispatch} from 'react-redux';
import Chat from "./components/liveSession/chatting/Chat"

import { getAllUsersInfo } from './actions/AllUsersActions'
import { getSessionInfo, getUserSessionInfo } from './actions/SessionActions'
import { getUserInfo } from './actions/UserActions'
import { bindActionCreators } from 'redux';
import Auth from "./hoc/auth";

const App = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    if(token){
        dispatch(getUserInfo(token));
        dispatch(getUserSessionInfo(token));
    }

    dispatch(getSessionInfo());

    dispatch(getAllUsersInfo());



    return (
        <>
        {/* <Route exact path="/hole/c9c9dd9bb" component={Chat}/> */}
        
        <Route exact path="/main" component={Auth(SessionCardContainer, true)}/>
        <Switch>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/session/:state" component={Auth(SessionMatchContainer, true)}/>
            {/* <Route exact path="/session/:state" render={(matchProps) => <SessionMatchContainer {...matchProps}/>}/>  */}
            <Route exact path="/createSession" component={Auth(SessionCreateContainer, true)}/>
            <Route path="/" component={NavContainer}/>
        </Switch>
        <Route exact path="/preQuestions/:pk" component={Auth(PreQuestions, true)}/>    
        <Route exact path="/mypage" component={Auth(MypageContainer, true)}/>
        <Route exact path="/mypage/:nickname" component={Auth(ProfileDetail, true)}/>
        <Route exact path="/mypage/:nickname/edit" component={Auth(MypageEdit, true)}/>
        <Route exact path="/mypage/hole/:session/edit" component={Auth(MySessionEdit, true)}/>
        </>

    )
};

export default App
