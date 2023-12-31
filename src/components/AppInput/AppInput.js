import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const AppInput = ({
  secureTextEntry,
  placeholder,
  label,
  borderRadius,
  inputStyle,
  flexDirection,
  maxLength,
  borderWidth,
  keyboardType,
  inputContainerStyle,
  value,
  onChangeText,
}) => {
  const [show, setShow] = useState(secureTextEntry);
  return (
    <View
      style={{
        maxWidth: '100%',
        // marginTop: 5,
        marginHorizontal: 15,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: 'black',
        }}>
        {label}
      </Text>
      <View
        style={[
          {
            maxWidth: '100%',
            borderColor: '#E8E8E8',
            padding: 5,
            // marginTop: 10,
            borderRadius: borderRadius ? borderRadius : 7,
            borderWidth:borderWidth? borderWidth: 1.5,
            backgroundColor: '#F6F6F6',
            flexDirection: flexDirection,
            alignItems: 'center',
            marginBottom: 10,
          },
          inputContainerStyle,
        ]}>
        <TextInput
          style={[
            {
              width: '85%',
              height: 40,
              fontSize: 16,
              marginHorizontal: 5,
              fontWeight: '500',
            },
            inputStyle,
          ]}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={'#BDBDBD'}
          secureTextEntry={show}
        />
        {secureTextEntry && (
          <Text
            onPress={() => {
              setShow(!show);
            }}
            style={{
              color: '#5DB075',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {show ? 'Show' : 'Hide'}
          </Text>
        )}
      </View>
    </View>
  );
};

export default AppInput;
