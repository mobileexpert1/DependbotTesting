import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import APP_COLORS from '../../helper/Color';
const SIGNUP_STYLES = StyleSheet.create({
  HEADER_TEXT: {
    color: APP_COLORS.BLACK,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: hp('3%'),
    fontWeight: 'bold',
    width: wp('90%'),
    borderTopColor: APP_COLORS.BLACK,
    borderBottomColor: APP_COLORS.BLACK,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  STEP1_TEXT: {
    color: APP_COLORS.BLACK,
    textAlign: 'center',
    alignSelf: 'center',
    margin: 10,
    fontSize: hp('2%'),
  },
  imgPicker: {
    flexDirection: 'row',
    height: hp('6%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  UPLOAD_IMAGE_TEXT: {
    color: APP_COLORS.BLACK,
    fontSize: hp('2.2%'),
    fontWeight: '200',
    textAlign: 'center',
  },
  imgStyle: {
    height: hp('4%'),
    width: hp('4%'),
    marginRight: 5,
    alignSelf: 'center',
    backgroundColor: APP_COLORS.BLACK,
  },
  AGE_AND_TERMS: {
    // backgroundColor:'red',
    width: wp('85%'),
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  CHECK_BOX: {
    width: '100%',
    height: hp('4.5%'),
    flexDirection: 'row',
  },
  LOGIN_BUTTON: {
    alignSelf: 'center',
    marginLeft: 5,
    height: '100%',
    justifyContent: 'center',
    // backgroundColor:'grey'
  },
  OPTION_TEXT: {
    color: APP_COLORS.BLACK,
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: hp('2%'),
  },
});
export default SIGNUP_STYLES;
