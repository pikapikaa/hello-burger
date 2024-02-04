import React from 'react';
import MainNavigation from './src/route/MainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
