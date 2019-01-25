import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

export default class TopCenterPanel extends React.Component {
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
                        TopCenterPanel111 { displayString }
                    </Text>
                </View>
                <View style={styles.greetingBox2}>
                    <Text style={styles.greeting}>
                        TopCenterPanel222 { displayString }
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
            { translateX: 550 }
        ],
        borderColor: 'blue',
        borderWidth: 2,
    },
    greetingBox1: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: '#639dda',
        borderWidth: 12,
    },
    greetingBox2: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: '#639dda',
        borderWidth: 12,
        transform: [
            // { rotateX: 90 },
            { translateX: 50 }
        ],
    },
    greeting: {
        fontSize: 30,
    },
});