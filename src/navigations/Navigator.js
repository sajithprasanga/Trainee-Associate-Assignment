import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';

const stackNavigatorOptions = {
    headershown: false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
})
{
    defaultNavigationOptions : createStackNavigations
};

export default createAppContainter(AppNavigator);