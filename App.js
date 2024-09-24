import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './lib/pages/home_page';
import SplashPage from './lib/pages/splash_page';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName='SplashPage'>
        <Stack.Screen name='splash' component={SplashPage}
          options={{ headerShown: false }}/>
        <Stack.Screen name='home' component={HomePage}
          options={{ title: 'Home Page' }} />
      </Stack.Navigator>

    }</NavigationContainer>
  );
}

