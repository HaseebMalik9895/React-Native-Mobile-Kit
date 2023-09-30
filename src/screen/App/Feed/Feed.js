import {View, Text, FlatList, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';

const header = [
  {
    id: 0,
    name: 'Header',
    time: '8m ago',
    detail:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: '',
  },
  {
    id: 1,
    name: 'Header',
    time: '8m ago',
    detail:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: '',
  },
  {
    id: 2,
    name: 'Header',
    time: '8m ago',
    detail:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: '',
  },
  {
    id: 3,
    name: 'Header',
    time: '8m ago',
    detail:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    image: '',
  },
  // {
  //   id: 4,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 5,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 6,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 7,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 8,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 9,
  //   name: 'Header',
  //   image: '',
  // },
  // {
  //   id: 10,
  //   name: 'Header',
  //   image: '',
  // },
];
const Feed = ({navigation}) => {
  return (
    <View
    style={{
      flex:1,
      backgroundColor:'white',
    }}>

      <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal:15,
      }}>
      <View
        style={{
          backgroundColor: 'yellow',
          marginVertical:20,
          height: '10%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <MobText
          onPress={() => navigation.navigate('Login')}
          label={'Back'}
          fontSize={20}
          color={'#5DB075'}
        />
        <MobText
          label={'Feed'}
          fontSize={40}
          color={'black'}
          marginHorizontal={80}
        />
        <MobText 
        label={'Filter'} fontSize={20} color={'#5DB075'} />
      </View>
      <MobTextinput placeholder={'Search'} borderRadius={40} />

      <FlatList
        data={header}
        style={
          {
            // flexGrow: 1,
          }
        }
        renderItem={({item}) => {
          return (
            <View
              style={{
                backgroundColor:'red',
                flexDirection: 'row',
                marginHorizontal: 8,
                marginVertical: 2,
                width: '100%',
                height: 80,
              }}>
              <View
                style={{
                  height: 65,
                  borderRadius: 8,
                  width: '100%',
                  backgroundColor: 'red',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'yellow',
                    height: 80,
                    width: '100%',
                    paddingHorizontal: 15,
                    borderColor: 'grey',
                    borderBottomWidth: 0.5,
                    // marginLeft: 75,
                  }}>
                  <View
                    style={{
                      backgroundColor:'green',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <MobText
                      label={item.name}
                      fontSize={16}
                      fontWeight={'bold'}
                      color={'black'}
                    />
                    <MobText
                      label={item.time}
                      fontSize={15}
                      fontWeight={'bold'}
                      color={'#BDBDBD'}
                    />
                  </View>

                  <MobText
                    label={item.detail}
                    fontSize={14}
                    // fontWeight={'bold'}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
    </View>
    
  );
};

export default Feed;
