import React, { Component } from 'react';
import { View, Text, StatusBar, Flatlist, ScrollView } from 'react-native';
import styles from './styles';

export default class Dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
        };
    }
    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((resp) => {
            resp.json().then((result) => {
                this.setState({ item: result.data })
            })

        })
       
    }
    render() {
      

        return (
            <View>
                {
                    this.state.item ?
                        this.state.item.map((items, i) => <View>
                            <Text>
                                {items.employee_name}
                            </Text>
                        </View>) : null}
                        {/* <Text>sa</Text> */}
            </View>
        );
    }
}