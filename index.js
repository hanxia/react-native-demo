/**
 * @format
 */

import { AppRegistry, View } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
// import Demo from './src/component_demo/day1'
// import Demo from './src/component_demo/day2'
// import Demo from './src/component_demo/day3'
// import Demo from './src/component_demo/day4'
// import Demo from './src/component_demo/day5'
// import Demo from './src/component_demo/day6'
import Demo from './src/wechat_demo/screen/index'

 AppRegistry.registerComponent(appName, () => Demo);