import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MobText from '../../../components/MobText/MobText';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';

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
];
const Feed = () => {
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
        }}>
        <AppInput borderRadius={40} placeholder={'Search'} />

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
                  marginHorizontal: 10,
                }}>
                <Image
                  source={require('../../../assets/images/person.png')}
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
