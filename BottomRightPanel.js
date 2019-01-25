import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class BottomRightPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '!'
        };

        //this.tick = this.tick.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const event = e.nativeEvent;
        const inputEvent = event.inputEvent;

        // if(inputEvent.action == 'up') {
        //     let letter = String.fromCharCode(inputEvent.button);
        //     console.log(letter);
        //     console.log('======');
        //     this.setState({ input1: this.state.input1 + letter});
        // }
        this.setState({ input1: this.state.input1 + 'X'});
    }

    render() {
        let displayString = this.state.input1;

        return (
            <View style={styles.panel} onInput={this.handleInput} >
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        BottomRightPanel { displayString }
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
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            // { rotateX: 90 },
            { translateX: 1100 },
            { translateY: -650 }
            // { translateX: 0 },
            // { translateY: 0 }
        ],
        borderColor: 'blue',
        borderWidth: 2,
    },
    greetingBox: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: '#639dda',
        borderWidth: 12,
    },
    greeting: {
        fontSize: 30
    },
});