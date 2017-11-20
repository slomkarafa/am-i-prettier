import React from 'react'
import {Button} from "react-native-elements";

const FBLoginButton = ({onPress}) => <Button
    title='Continue with facebook'
    icon={{name:'face'}}
    onPress={onPress}
/>

export default FBLoginButton;
