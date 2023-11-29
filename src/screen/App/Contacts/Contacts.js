import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import MobText from '../../../components/MobText/MobText';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const Contacts = ({navigation}) => {
  const [userList, setUserList] = useState();

  const contactList = async () => {
    try {
      const contacts = database().ref('users');
      contacts.on('value', snapshot => {
        const userList = snapshot.val();
        setUserList(Object.values(userList));
      });

      console.log(contacts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    contactList();
  }, []);

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
          data={userList ? userList : []}
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
                        width:'90%',
                      }}>
                      <MobText
                        label={item?.name}
                        fontSize={20}
                        color={'black'}
                        fontWeight={800}
                        marginLeft={10}
                      />
                      <MobText
                        label={item?.email}
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
