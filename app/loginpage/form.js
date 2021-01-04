import React, { Component } from 'react';
import { View,Alert, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }

    submit = () => {
        let _self = this;
        const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_self.state.email);
        if (_self.state.email === null || _self.state.email === '' || !isEmailValid) {
            if ( _self.state.email === null || _self.state.email === '' && _self.state.password === null || _self.state.password === ''  ) {
                Alert.alert(
                    'fill the required fealds'
                )
            } else if (_self.state.email  || _self.state.email ==='') {
                if (_self.state.email  || _self.state.email ==='' ||isEmailValid) {
                    Alert.alert('Please enter email');
               }else{
                Alert.alert('Please enter Password000000');
            }
            } 
        }  
    
        else if (_self.state.password === null || _self.state.password === '') {
            Alert.alert('Please enter password');
        } else if (_self.state.password.length < 6) {
            Alert.alert(' password must in 6 letters');
        } else {
            
             this.props.navigation.navigate('Dashboard');
        }
    }

    render() {
        return (
            <View style={styles.main} >
            <TextInput
                style={styles.education}
                placeholder="user name "
                placeholderTextColor={"white"}
                onChangeText={(text) => this.setState({ email: text })}
            />
            <TextInput
                style={styles.education}
                placeholder="pasword "
                secureTextEntry={true}
                textShadowColor='white'
                placeholderTextColor={"white"}
                onChangeText={(text) => this.setState({ password: text })}
            />
            <View >
                <TouchableOpacity style={styles.loginTuch} onPress={() => { this.submit(true)}}>
                    <Text style={styles.mainTuch}>Login </Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.loginTuch1} onPress={() => { this.props.navigation.navigate('Registration')}}>
                    <Text style={styles.mainTuch1}>Resgistor </Text>
                </TouchableOpacity>
            </View>
        </View>

        );
    }
}