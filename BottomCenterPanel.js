import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class BottomCenterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '!'
        };

        //this.tick = this.tick.bind(this);
    }

    render() {
        let displayString = this.state.input1;

        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox1}>
                    <Text style={styles.greeting}>
                    Although our field of view is much larger (approximately 180º), 
                    we need to be aware that only in a small portion of that field 
                    can you perceive symbols (the center 60º) or read text (the center 10º). 
                    If you do not have an eye tracking sensor we assume that 
                    the center of the screen is where the user is focusing their eyes.
                    </Text>
                    
                    <Text style={styles.greeting}>
                    https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API/Concepts
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
            { translateX: 550 },
            { translateY: -650 }
        ],
        borderColor: 'black',
        borderWidth: 2,
    },
    greetingBox1: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: 'black',
        borderWidth: 2,
    },
    greeting: {
        fontSize: 30,
    },
});