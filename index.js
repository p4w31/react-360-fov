import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class Hello360 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 'ASDF'
        };

        this.tick();

        this.tick = this.tick.bind(this);
    }

    tick() {
        setTimeout(() => {
            this.setState({ input1: this.state.input1 + 'X' });
            //this.tick();
        }, 100);
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
        width: 1000,
        height: 600,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
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

AppRegistry.registerComponent('Hello360', () => Hello360);
