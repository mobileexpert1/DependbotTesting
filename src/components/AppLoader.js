import * as React from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Modal, View} from 'react-native';
const AppLoader = (props) => {
  return (
    <Modal visible={props.visible} transparent={true}>
      <View style={STYLE.CONTAINER}>
        <ActivityIndicator size={80} color="gray" animating={true} />
      </View>
    </Modal>
  );
};
export default AppLoader;
const STYLE = StyleSheet.create({
  CONTAINER: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
