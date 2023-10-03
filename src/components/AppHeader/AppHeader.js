import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const AppHeader = ({
  title,
  filterPress,
  subTitle,
  icon,
  onPress,
  backArrow,
  onPressFilter,
  color,
}) => {
  return (
    <View
      style={{
        maxWidth: '100%',
        padding: '3%',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 4,
        alignItems: 'center',
      }}>
      {backArrow ? (
        <TouchableOpacity
          style={{
            width: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}>
          <Image
            source={icon ? icon : require('../../assets/icons/X.png')}
            resizeMode={'cover'}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: '10%',
          }}
        />
      )}
      <View
        style={{
          width: '78%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

         
        <Text
          onPress={filterPress}
          style={{
            fontSize: 30,
            color:color?color: '#000',
            fontWeight: '600',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          onPress={onPressFilter}
          style={{
            fontWeight: '500',
            fontSize: 16,
            color:color?color: '#5DB075',
          }}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default AppHeader;
