import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import APP_COLORS from '../helper/Color';

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={STYLES.CONTAINER} onPress={() => props.goToNext()}>
      <Text style={STYLES.BUTTON_TEXT}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const STYLES = StyleSheet.create({
  CONTAINER: {
    height: hp('6.5%'),
    width: wp('45%'),
    backgroundColor: 'green',
    alignSelf: 'center',
    borderWidth: 3,
    margin: 5,
    borderColor: APP_COLORS.BLACK,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 7,
    justifyContent: 'center',
  },

  BUTTON_TEXT: {
    width: '100%',
    alignSelf: 'center',
    color: APP_COLORS.WHITE,
    textAlign: 'center',
    fontSize: hp('3%'),
    fontWeight: '200',
  },
});
