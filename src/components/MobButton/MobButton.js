import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MobButton = ({
  label,
  marginVertical,
  paddingVertical,
  onPress,
  color,
  backgroundColor,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '#5DB075',
        borderRadius: 100,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: marginVertical ? marginVertical : 20,
        marginTop: marginTop,
        height: 50,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          fontSize: 16,
          // fontWeight: '900',
          color: color ? color : 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default MobButton;
