import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'E.P.G.M - B.P.A.M' }} 
      />
    </Stack.Navigator>
  );
}
