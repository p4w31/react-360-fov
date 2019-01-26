import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-360';

export default class TopCenterPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '!',
            controllers: null
        };

        //this.tick = this.tick.bind(this);
        NativeModules.ControllerInfo.getControllers().then(controllers => {
            console.log('ControllerInfo.getControllers');
            console.log(controllers);
            this.setState({controllers: controllers});
        });
    }

    render() {
        //let displayControllers = this.state.controllers.length;
        let displayControllers = this.state.controllers === null
        ? <Text style={styles.greeting}>Waiting...</Text>
        : <Text style={styles.greeting}>
                Discovered controllers: { this.state.controllers.length }
            </Text>;

        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox1}>
                    <Text style={styles.greeting}>
                        { displayControllers }
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
        borderColor: 'black',
        borderWidth: 2,
    },
    greetingBox1: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: 'black',
        borderWidth: 2,
    },
    greetingBox2: {
        padding: 20,
        backgroundColor: 'darkblue',
        borderColor: 'black',
        borderWidth: 2,
        transform: [
            // { rotateX: 90 },
            { translateX: 50 }
        ],
    },
    greeting: {
        fontSize: 30,
    },
});