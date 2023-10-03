import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';

const ProfileOptions = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
      }}>
      <AppHeader title={'Settings'} />

      {/* <View
        style={{
          height: '70%',
          maxWidth: '100%',
          paddingHorizontal:15,
        }}> */}

     
       
          <TouchableOpacity
            style={{
              height: 110,
              width: '100%',
              backgroundColor: '#f6f6f6',
              flexDirection:'row',
              paddingVertical:25,
              borderTopStartRadius:20,
              borderTopEndRadius:20,
            }}>
              
            <Image
              source={require('../../../assets/images/person.png')}
              resizeMode={'cover'}
              style={{
                height: 70,
                width: '20%',
              }}
            />
            <View
           >
           <Text
           style={{
            fontSize:20,
            fontWeight:'bold',
            color:'black',
            marginLeft:10,
           }}>Victoria Robertson</Text>
           <Text
           style={{
            fontSize:15,
            fontWeight:'bold',
            color:'black',
            marginLeft:10,
            marginTop:5,
           }}>A mantra goes here</Text>
           </View>
          </TouchableOpacity>
        
      
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'red',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'green',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'red',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'green',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'red',
        }}></TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 80,
          width: '100%',
          backgroundColor: 'green',
        }}></TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default ProfileOptions;
