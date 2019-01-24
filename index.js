import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-360';

import TopLeftPanel from './TopLeftPanel';
import TopCenterPanel from './TopCenterPanel';
import TopRightPanel from './TopRightPanel';
import BottomRightPanel from './BottomRightPanel';
import BottomLeftPanel from './BottomLeftPanel';

AppRegistry.registerComponent('TopLeftPanel', () => TopLeftPanel);
AppRegistry.registerComponent('TopCenterPanel', () => TopCenterPanel);
AppRegistry.registerComponent('TopRightPanel', () => TopRightPanel);
AppRegistry.registerComponent('BottomRightPanel', () => BottomRightPanel);
AppRegistry.registerComponent('BottomLeftPanel', () => BottomLeftPanel);

