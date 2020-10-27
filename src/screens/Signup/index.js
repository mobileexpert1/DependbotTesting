/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomInputView, {
  CountryPickerView,
  CustomDatePickerView,
  CustomPickerView,
} from '../../components/CustomInputView';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import STRINGS from '../../localization';
import APP_COLORS from '../../helper/Color';
import CustomButton from '../../components/CustomButton';
import GLOBAL_STYLES from '../../helper/GlobalStyles';
import SIGNUP_STYLES from './Styles';
import {useDispatch, useSelector} from 'react-redux';
import {addItemInCart} from '../../redux/actions';
const SignupScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [countryPickerVisibilty, setcountryPickerVisibilty] = useState(false);
  const [mobile, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+');
  const [profession, setProfession] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartReducer.length);
  return (
    <ScrollView>
      <KeyboardAwareScrollView style={GLOBAL_STYLES.CONTAINER}>
        <Text style={SIGNUP_STYLES.HEADER_TEXT}>
          {STRINGS.SIGNUP} Items in cart now {itemCount}{' '}
        </Text>

        <Text style={SIGNUP_STYLES.STEP1_TEXT}>{STRINGS.STEP1}</Text>
        <CustomInputView
          value={firstName}
          onChangeText={setFirstName}
          placeholder={STRINGS.FIRST_NAME}
        />
        <CustomInputView
          value={lastName}
          onChangeText={setLastName}
          placeholder={STRINGS.LAST_NAME}
        />
        <CustomDatePickerView
          setDate={setDate}
          value={date}
          text={STRINGS.BIRTHDAY}
        />
        <CustomPickerView
          text={STRINGS.GENDER}
          gender={gender}
          selectMale={() => setGender('M')}
          selectFemale={() => setGender('F')}
        />
        <CustomInputView
          value={profession}
          onChangeText={(text) => setProfession(text)}
          placeholder={STRINGS.PROFESSION}
        />
        <CustomInputView
          value={city}
          onChangeText={setCity}
          placeholder={STRINGS.CITY}
        />
        <CustomInputView
          value={email}
          onChangeText={setEmail}
          placeholder={STRINGS.EMAIL_ADDRESS}
        />
        <CountryPickerView
          selectCode={(value) => setCountryCode('+' + value)}
          keyboardType="numeric"
          code={countryCode}
          showPicker={countryPickerVisibilty}
          openPicker={() => setcountryPickerVisibilty(true)}
          value={mobile}
          onChangeText={setMobileNumber}
          placeholder={STRINGS.MOBILE_NUMBER}
        />

        <CustomInputView
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder={STRINGS.PASSWORD}
        />
        <CustomInputView
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={STRINGS.CONFIRM_PASS}
        />

        <TouchableOpacity style={SIGNUP_STYLES.imgPicker}>
          <Image style={SIGNUP_STYLES.imgStyle} />
          <Text style={SIGNUP_STYLES.UPLOAD_IMAGE_TEXT}>
            {STRINGS.UPLOAD_IMAGE}
          </Text>
        </TouchableOpacity>

        <View style={SIGNUP_STYLES.AGE_AND_TERMS}>
          <TouchableOpacity style={SIGNUP_STYLES.CHECK_BOX} onPress={() => {}}>
            <Image
              style={{
                backgroundColor: 'white',
                height: hp('2.5%'),
                width: hp('2.5%'),
                margin: 5,
                borderWidth: 1,
                borderColor: APP_COLORS.BLACK,
                alignSelf: 'center',
              }}
            />
            <Text style={SIGNUP_STYLES.OPTION_TEXT}>{STRINGS.YES_I_AM}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={SIGNUP_STYLES.CHECK_BOX} onPress={() => {}}>
            <Image
              style={{
                backgroundColor: 'white',
                height: hp('2.5%'),
                width: hp('2.5%'),
                margin: 5,
                borderWidth: 1,
                borderColor: APP_COLORS.BLACK,
                alignSelf: 'center',
              }}
            />
            <Text style={SIGNUP_STYLES.OPTION_TEXT}>{STRINGS.YES_I_AGREE}</Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          text={STRINGS.NEXT}
          goToNext={() => {
            dispatch(addItemInCart(firstName)),
              setFirstName(''),
              alert('Item added successfully');
          }}
        />

        <View
          style={[
            SIGNUP_STYLES.AGE_AND_TERMS,
            {height: hp('5%'), flexDirection: 'row', marginBottom: hp('5%')},
          ]}>
          <Text style={SIGNUP_STYLES.OPTION_TEXT}>{STRINGS.ALREADY_USER}</Text>

          <TouchableOpacity
            style={SIGNUP_STYLES.LOGIN_BUTTON}
            onPress={() => navigation.push('cartscreen')}>
            <Text
              style={[
                SIGNUP_STYLES.OPTION_TEXT,
                {
                  textDecorationLine: 'underline',
                  color: 'blue',
                  textDecorationColor: 'blue',
                },
              ]}>
              {STRINGS.LOGIN_HERE}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default SignupScreen;
