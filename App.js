import React, { useEffect } from 'react';
import { Provider } from "react-redux";
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { LogBox, PermissionsAndroid, Text, View } from 'react-native';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalogue2 from './src/screens/catelogue.js/catalogue2';
import Catalogue1 from './src/screens/catelogue.js/catalogue1';
import Catalogue3 from './src/screens/catelogue.js/catalogue3';
import Favorites from './src/screens/catelogue.js/favorites';

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();
const App = () => {
  const getPermissions = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  }

  useEffect(() => {
    getPermissions()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalogue1" component={Catalogue1} />
            <Stack.Screen name="Catalogue2" component={Catalogue2} />
            <Stack.Screen name="Catalogue3" component={Catalogue3} />
            <Stack.Screen name="Favorites"  component={Favorites}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;