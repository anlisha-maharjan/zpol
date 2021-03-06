import React from 'react';
import {StatusBar, View} from 'react-native';

const Bar = () => {
  return (
    <View
      style={{
        height: 0,
        backgroundColor: '#1C3496',
      }}>
      <StatusBar
        barStyle="default"
        backgroundColor="rgba(18, 63, 104, 1)"
        translucent={false}
        networkActivityIndicatorVisible={true}
        animated={true}
        showHideTransition="slide"
      />
    </View>
  );
};

export default Bar;
