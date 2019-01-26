import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class BottomLeftPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        const event = e.nativeEvent;
        const inputEvent = event.inputEvent;

        this.setState({ input1: this.state.input1 + 'Tap '});
    }

    render() {
        let displayString = this.state.input1 || 'no input';

        return (
            <View style={styles.panel} onInput={this.handleInput} >
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        [Phone, PC] All events handling
                    </Text>
                </View>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        Result:
                    </Text>
                    <Text style={styles.greeting}>
                        { displayString }
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
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            // { rotateX: 90 },
            { translateX: 0 },
            { translateY: -650 }
        ],
        borderColor: 'black',
        borderWidth: 2,
    },
    greetingBox: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: 'black',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});


