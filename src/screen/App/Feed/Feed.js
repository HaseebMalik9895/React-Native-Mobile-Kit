import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import MobText from '../../../components/MobText/MobText';
import MobTextinput from '../../../components/MobTextinput/MobTextinput';
import AppHeader from '../../../components/AppHeader/AppHeader';

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
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader title={'Feeds'} subTitle={'Filter'} />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginHorizontal: 15,
        }}>
        {/* <View
          style={{
            backgroundColor: 'yellow',
            marginVertical: 10,
            height: '7%',
            width: '100%',
            flexDirection: 'row',
            // justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: '100%',
              backgroundColor: 'red',
              alignItems:'center',
              justifyContent:'flex-end'
            }}>
            <MobText
              label={'Feed'}
              fontSize={40}
              color={'black'}
              // marginHorizontal={80}
              // marginLeft={100}
            />
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              width: '20%',
            }}>
            <MobText label={'Filter'} fontSize={20} color={'#5DB075'} />
          </View>
        </View> */}

        <MobTextinput
          placeholder={'Search'}
          borderRadius={40}
          // marginVertical={}
        />

        <FlatList
          data={header}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  maxWidth: '100%',
                  padding: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/new.jpg')}
                  resizeMode={'cover'}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 14,
                    borderRadius: 10,
                  }}
                />
                <TouchableOpacity
                  style={{
                    width: '84%',
                    borderColor: 'grey',
                    borderBottomWidth: 0.5,
                    paddingVertical: 15,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      maxWidth: '98%',
                      marginBottom: 5,
                    }}>
                    <MobText
                      label={item.name}
                      fontSize={18}
                      fontWeight={'900'}
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
                    fontWeight={'700'}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Feed;
