import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class Hello2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 'ASDF'
        };

        //this.tick = this.tick.bind(this);
    }

    render() {
        let displayString = this.state.input1;

        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        Welcome { displayString }
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 500,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            // { rotateX: 90 },
            { translateX: 550 }
        ],
        borderColor: 'blue',
        borderWidth: 2,
    },
    greetingBox: {
        padding: 20,
        backgroundColor: 'red',
        borderColor: '#639dda',
        borderWidth: 12,
    },
    greeting: {
        fontSize: 30,
    },
});