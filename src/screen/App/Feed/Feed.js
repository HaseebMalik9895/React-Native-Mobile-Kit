import {View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import FeedsCard from '../../../components/FeedsCard/FeedsCard';
import AppHeader from '../../../components/AppHeader/AppHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Feed = ({navigation}) => {
  const data = [
    {
      id: 0,
      name: 'haseeb',
    },
    {
      id: 1,
      name: 'haseeb',
    },
    {
      id: 2,
      name: 'haseeb',
    },
    {
      id: 3,
      name: 'haseeb',
    },
    {
      id: 4,
      name: 'haseeb',
    },
    {
      id: 5,
      name: 'haseeb',
    },
    {
      id: 6,
      name: 'haseeb',
    },
  ];
  const keyExtractor = item => item.id;
  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppHeader title={'Urben Cart'} />
      <FlatList
        keyExtractor={keyExtractor}
        contentContainerStyle={{}}
        data={data}
        renderItem={({item}) => {
          return <FeedsCard text={item.name} key={item.id} />;
        }}
      />

      <TouchableOpacity onPress={()=>navigation.navigate('Posts')}
        style={{
          width: '18%',
          borderRadius: 50,
          position: 'absolute',
          bottom: 40,
          right: 35,
        }}>
        <Icon name={'add-circle-outline'} size={80} color={'#5DB075'} />
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
