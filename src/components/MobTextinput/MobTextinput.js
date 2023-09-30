import {View, Text, TextInput} from 'react-native';
import React from 'react';

const MobTextinput = ({
  height,
  width,
  borderRadius,
  backgroundColor,
  marginVertical,
  paddingHorizontal,
  placeholder,
  fontSize,
  borderColor,
  borderWidth,
  label,
  color,
}) => {
  return (

    <>
    <Text
    style={{
      fontSize:16,
      fontWeight:'bold',
      color:color ? color:'black',
      alignSelf:'flex-start',
      // marginLeft:16,
      marginTop:10,
    }}>
    {label}
    </Text>
    <TextInput
      placeholder={placeholder}
      style={{
        
        backgroundColor: backgroundColor ? backgroundColor : '#F6F6F6',
        height: height ? height : 55,
        width: width ? width : '100%',
        fontSize: fontSize ? fontSize : 16,
        borderRadius: borderRadius ? borderRadius : 10,
        paddingHorizontal: paddingHorizontal ? paddingHorizontal : 15,
        marginVertical: marginVertical ? marginVertical : 10,
        borderColor: borderColor ? borderColor : '#BDBDBD',
        borderWidth: borderWidth ? borderWidth : 0.5,
      }}
    />
    </>
  );
};

export default MobTextinput;
