import {View, Text} from 'react-native';
import React from 'react';

const MobText = ({
  fontSize,
  fontWeight,
  textAlign,
  label,
  marginTop,
  color,
  marginVertical,
  marginLeft,
  onPress,
  marginHorizontal,
  marginRight,
  textDecorationLine,
  paddingHorizontal,
}) => {
  return (
    <View>
      <Text
        onPress={onPress}
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textAlign: textAlign,
          marginVertical: marginVertical,
          marginTop: marginTop,
          marginLeft: marginLeft,
          marginHorizontal: marginHorizontal,
          marginRight: marginRight,
          textDecorationLine: textDecorationLine,
          paddingHorizontal: paddingHorizontal,
          // paddingHorizontal: paddingHorizontal,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default MobText;
