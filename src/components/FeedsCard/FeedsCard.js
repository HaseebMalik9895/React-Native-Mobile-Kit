import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const FeedsCard = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '12%',
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth: 0.9,
          borderColor:'grey',
        }}>
        <View
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/person.png')}
            style={{
              height: 60,
              width: 60,
              resizeMode: 'center',
              borderRadius: 60,
            }}
          />
        </View>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>
            Haseeb Bin Umar
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            10 min ago
          </Text>
        </View>

        <View
          style={{
            height: '100%',
            justifyContent: 'center',
          }}>
          <Text
            style={{ fontSize:16,
              color: '#5DB075',
            }}>
            Follow
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 400,
          width: '100%',
        }}></View>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 0.3,
          marginBottom: 10,
          borderColor:'grey',
        }}>
        <TouchableOpacity
          style={{
            width: '33%',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '33%',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '33%',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedsCard;
