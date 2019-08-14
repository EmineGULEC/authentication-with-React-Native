import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidht: 1,
    borderReduis: 2,
    backgroundColor: '#002fa7',
    borderColor: '#002fa7',
    borderBottomWidht: 0,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRedius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 18
  },
};
  export default Card;
