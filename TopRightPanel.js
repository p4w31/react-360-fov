import React from 'react';
import {
    asset,
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-360';

export default class TopRightPanel extends React.Component {
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
                <Image style={styles.image} source={asset('4.jpg')} />
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
            { translateX: 1100 }
        ],
        borderColor: 'black',
        borderWidth: 2,
    },
    image: {
        width: 500,
        height: 500
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