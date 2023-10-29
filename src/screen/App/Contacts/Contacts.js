import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import MobText from '../../../components/MobText/MobText';

const Contects = [
  {
    id: 0,
    name: 'Header',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  {
    id: 1,
    name: 'Header 1',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  {
    id: 2,
    name: 'Header 2',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  {
    id: 3,
    name: 'Header 3',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  {
    id: 4,
    name: 'Header 4',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
  // {
  //   id: 5,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
  // {
  //   id: 6,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
  // {
  //   id: 7,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
  // {
  //   id: 8,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
  // {
  //   id: 9,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
  // {
  //   id: 10,
  //   name: 'Header 5',
  //   comment:
  //     "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  // },
];

const Contacts = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
      }}>
      <AppHeader
        onPress={() => navigation.navigate('Conversation')}
        backArrow={true}
        title={'Contacts'}
      />
      <View
        style={{
          paddingVertical: 20,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Contects}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  maxWidth: '100%',
                  height: 90,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Messages')}
                  style={{
                    backgroundColor: 'white',
                    height: 100,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../../assets/images/person.png')}
                        resizeMode={'cover'}
                        style={{
                          height: 60,
                          width: 60,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        // backgroundColor: 'yellow',
                        maxWidth: '100%',
                        height: 80,
                        marginHorizontal: 5,
                        borderBottomWidth: 0.3,
                        borderColor: 'grey',
                      }}>
                      <MobText
                        label={item.name}
                        fontSize={20}
                        color={'black'}
                        fontWeight={800}
                        marginLeft={10}
                      />
                      <MobText
                        label={item.comment}
                        fontSize={15}
                        color={'black'}
                        fontWeight={800}
                        marginLeft={10}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Contacts;
