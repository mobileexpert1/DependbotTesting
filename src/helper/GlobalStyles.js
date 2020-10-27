import {StyleSheet} from 'react-native';
import APP_COLORS from './Color';
const GLOBAL_STYLES = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: APP_COLORS.PRIMARY_COLOR,
    paddingTop:40
  },
  CENTER_ALIGNED: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default GLOBAL_STYLES;
