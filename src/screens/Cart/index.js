import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import APP_COLORS from '../../helper/Color';
import GLOBAL_STYLES from '../../helper/GlobalStyles';
import {removeIemFromCart} from '../../redux/actions';
const CartScreen = (props) => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <View
      style={[GLOBAL_STYLES.CONTAINER, {backgroundColor: APP_COLORS.WHITE}]}>
      {cartItems && cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={({item}) => (
            <View style={{padding: 20}}>
              <Text>{item.item}</Text>
              <Text
                onPress={() => dispatch(removeIemFromCart(item.id))}
                style={{position: 'absolute', right: 20, top: 20}}>
                X
              </Text>
            </View>
          )}
        />
      ) : (
        <View style={[GLOBAL_STYLES.CONTAINER, GLOBAL_STYLES.CENTER_ALIGNED]}>
          <Text>No item found int the Cart</Text>
        </View>
      )}
    </View>
  );
};
export default CartScreen;
