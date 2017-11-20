import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk'
import FBLoginButton from "../components/Buttons/FBLoginButton";

class Login extends Component {

    login(){
        LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday', 'user_friends']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        data => {

                            alert("Login was successful with permissions: " + result.grantedPermissions);
                            console.log("fbdata",data.accessToken.toString(), result)

                        }
                    )
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style = {{color: '#333333'}}>Login</Text>
                <FBLoginButton
                    onPress={this.login}
                />
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    data => {

                                        alert("Login was successful with permissions: " + result.grantedPermissions);
                                        console.log("fbdata",data.accessToken.toString())

                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")}/>
            </View>
        )
    }
}
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

export default Login;