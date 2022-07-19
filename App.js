import {Typography, Colors, Spacings, View, Text} from 'react-native-ui-lib';
import React from 'react';

Colors.loadColors({
  pink: '#FF69B4',
  gold: '#FFD700',
});

Typography.loadTypographies({
  h1: {fontSize: 58, fontWeight: '300', lineHeight: 80},
  h2: {fontSize: 46, fontWeight: '300', lineHeight: 64},
});

const App = () => {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>
        Welcome
      </Text>
      <Text gold text10>
        Hello World
      </Text>
    </View>
  );
};

export default App;
