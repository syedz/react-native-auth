import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBsTlpb4M2wXVamqJ0Yx6h7jt-sjLI5098',
            authDomain: 'auth-3d694.firebaseapp.com',
            databaseURL: 'https://auth-3d694.firebaseio.com',
            projectId: 'auth-3d694',
            storageBucket: 'auth-3d694.appspot.com',
            messagingSenderId: '125090724831'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return (
                    <View>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
