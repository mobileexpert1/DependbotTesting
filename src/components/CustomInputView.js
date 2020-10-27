/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import APP_COLORS from '../helper/Color';
import CountryPicker from 'react-native-country-picker-modal';
import STRINGS from '../localization';

import DatePicker from 'react-native-datepicker';

const CustomInputView = (props) => {
  return (
    <View style={Styles.outerView}>
      <TextInput
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        keyboardType={props.keyboardType ? props.keyboardType : null}
        value={props.value}
        onChangeText={(text) => props.onChangeText(text)}
        placeholder={props.placeholder}
        style={Styles.textinputStyle}
      />
    </View>
  );
};

export default CustomInputView;

export const CustomDatePickerView = (props) => {
  return (
    <View
      style={[
        Styles.outerView,
        {flexDirection: 'row', borderColor: null, borderWidth: 0, margin: 0},
      ]}>
      <Text
        style={[
          Styles.textinputStyle,
          {paddingLeft: 5, width: '30%', height: null, alignSelf: 'center'},
        ]}>
        {props.text}
      </Text>
      <DatePicker
        style={{width: '70%', alignSelf: 'center'}}
        date={props.value}
        mode="date"
        placeholder=""
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginRight: 0,
          },
          dateInput: {
            height: '100%',
            marginRight: 36,
            borderWidth: 1.5,
            borderColor: APP_COLORS.BLACK,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => props.setDate(date)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  outerView: {
    height: hp('6.5%'),
    width: wp('85%'),
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderWidth: 1.5,
    margin: 5,
    borderColor: APP_COLORS.BLACK,
  },

  textinputStyle: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    color: APP_COLORS.BLACK,
    textAlign: 'left',
    fontSize: hp('2%'),
    fontWeight: '100',
  },
  pickView: {
    // backgroundColor:'red',
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    marginRight: 5,
  },
  clickView: {
    height: '70%',
    width: '100%',
    // backgroundColor:'yellow',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export const CustomPickerView = (props) => {
  return (
    <View
      style={[
        Styles.outerView,
        {
          flexDirection: 'row',
          borderColor: null,
          borderWidth: 0,
          backgroundColor: 'transparent',
          margin: 0,
        },
      ]}>
      <Text
        style={[
          Styles.textinputStyle,
          {paddingLeft: 5, width: '30%', height: null, alignSelf: 'center'},
        ]}>
        {props.text}
      </Text>
      <View style={Styles.pickView}>
        <TouchableOpacity
          style={Styles.clickView}
          onPress={() => props.selectMale()}>
          <Image
            style={{
              backgroundColor: props.gender === 'M' ? 'red' : 'white',
              height: hp('2.5%'),
              width: hp('2.5%'),
              borderRadius: 100,
              alignSelf: 'center',
              margin: 5,
              borderWidth: 1,
              borderColor: APP_COLORS.BLACK,
            }}
          />
          <Text
            style={{
              color: APP_COLORS.BLACK,
              alignSelf: 'center',
              textAlign: 'left',
              fontSize: hp('1.8%'),
            }}>
            {STRINGS.MALE}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.pickView}>
        <TouchableOpacity
          style={Styles.clickView}
          onPress={() => props.selectFemale()}>
          <Image
            style={{
              backgroundColor: props.gender === 'F' ? 'red' : 'white',
              height: hp('2.5%'),
              width: hp('2.5%'),
              borderRadius: 100,
              borderWidth: 1,
              borderColor: APP_COLORS.BLACK,
              alignSelf: 'center',
              margin: 5,
            }}
          />
          <Text
            style={{
              color: APP_COLORS.BLACK,
              alignSelf: 'center',
              textAlign: 'left',
              fontSize: hp('1.8%'),
            }}>
            {STRINGS.FEMALE}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CountryPickerView = (props) => {
  return (
    <View
      style={[
        Styles.outerView,
        {flexDirection: 'row', borderColor: null, borderWidth: 0, margin: 0},
      ]}>
      <TouchableOpacity
        style={{width: '18%', marginRight: '2%'}}
        onPress={() => props.openPicker()}>
        {/* <Text style={[Styles.textinputStyle, { paddingLeft: 5, width: '100%', height: null, alignSelf: 'center' }]}>
                {props.text}
            </Text> */}
        <CountryPicker
          placeholder={props.code}
          containerButtonStyle={{
            borderColor: APP_COLORS.BLACK,
            borderWidth: 1.5,
            height: '100%',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          // countryCode='21'
          //   {{countryCode}}
          onSelect={(value) => props.selectCode(value.callingCode[0])}
          visible={props.showPicker}
        />
      </TouchableOpacity>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <TextInput
          secureTextEntry={props.secureTextEntry ? props.secureTextEntry : null}
          keyboardType={props.keyboardType ? props.keyboardType : null}
          value={props.value}
          onChangeText={(text) => props.onChangeText(text)}
          placeholder={props.placeholder}
          style={[
            Styles.textinputStyle,
            {width: '100%', borderWidth: 1.5, borderColor: APP_COLORS.BLACK},
          ]}
        />
      </View>
    </View>
  );
};
