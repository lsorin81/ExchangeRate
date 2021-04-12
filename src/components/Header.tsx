import React from 'react';
import {Text} from 'react-native';

const Header = ({title}) => {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 32,
        marginHorizontal: 16,
      }}>
      {title}
    </Text>
  );
};

export {Header};
