import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Registration extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={{ height: '10%' }}>
                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <Text style={{ marginTop: 5, fontSize: 20 }}>Registration</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#336dcc', height: 1100,

                    borderRadius: 40,
                }}>

                    <View style={{ marginTop: 50 }}>
                        <TextInput placeholder='UserName' style={styles.TextInputStyles} />
                        <TextInput placeholder='Email' style={styles.TextInputStyles} />
                        <TextInput placeholder='Password' style={styles.TextInputStyles} />
                        <TextInput placeholder='Phone' style={styles.TextInputStyles} />
                    </View>
                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <TouchableOpacity style={styles.buttonStyles}>
                            <Text>Registration</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity style={styles.loginTuch1} onPress={() => { this.props.navigation.navigate('Login') }}>
                            <Text style={styles.mainTuch1}>Back </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
