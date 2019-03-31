import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBsTlpb4M2wXVamqJ0Yx6h7jt-sjLI5098',
            authDomain: 'auth-3d694.firebaseapp.com',
            databaseURL: 'https://auth-3d694.firebaseio.com',
            projectId: 'auth-3d694',
            storageBucket: 'auth-3d694.appspot.com',
            messagingSenderId: '125090724831'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
