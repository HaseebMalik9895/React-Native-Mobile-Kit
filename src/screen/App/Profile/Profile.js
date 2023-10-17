import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import MobText from '../../../components/MobText/MobText';
import {appImages} from '../../../assets';
import Camera from 'react-native-vector-icons/AntDesign';


const posts = [
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
  {
    id: 5,
    name: 'Header 5',
    comment:
      "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  },
];

const photos = [
  {
    id: 0,
    images: appImages.Tshirt,
  },
  {
    id: 1,
    images: appImages.TshirtBlack,
  },
  {
    id: 2,
    images: appImages.Tshirtblue,
  },
  {
    id: 3,
    images: appImages.Tshirtprinted,
  },
  {
    id: 4,
    images: appImages.Tshirtred,
  },
  {
    id: 5,
    images: appImages.aroosanoir,
  },
  {
    id: 6,
    images: appImages.exclusive,
  },
  {
    id: 7,
    images: appImages.jacketjeans,
  },
  {
    id: 8,
    images: appImages.jacketred,
  },
  {
    id: 9,
    images: appImages.jacketskin,
  },
  {
    id: 10,
    images: appImages.jacketwhite,
  },
  {
    id: 11,
    images: appImages.jacketyellow,
  },
  {
    id: 12,
    images: appImages.Tshirt,
  },
  {
    id: 13,
    images: appImages.TshirtBlack,
  },
  {
    id: 14,
    images: appImages.TshirtBlack,
  },
  {
    id: 15,
    images: appImages.Tshirtprinted,
  },
  {
    id: 16,
    images: appImages.aroosanoir,
  },
  {
    id: 17,
    images: appImages.jacketyellow,
  },
  {
    id: 18,
    images: appImages.jacketyellow,
  },
  {
    id: 19,
    images: appImages.janan,
  },
];

const Profile = ({navigation}) => {
  const [button, setButton] = useState('post');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: '#5DB075',
          height: '25%',
          width: '100%',
        }}>
        <AppHeader
          onPress={() => navigation.goBack()}
          title={'Profile'}
          color={'white'}
          backArrow={true}
        />
        <View
          style={{
            height: 150,
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            // marginTop:60,
            // marginBottom:60,
            marginVertical: 60,
            position:'relative',
          }}>
          <Image
            source={require('../../../assets/images/person.png')}
            resizeMode={'cover'}
            style={{
              height: 150,
              width: 150,
            }}
          />
          <TouchableOpacity
          style={{
            height:40,
            width:40,
            borderRadius:80,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#5DB075',
            position:'absolute',
            bottom:23,
            right:145,
          }}>
          <Camera name={'camerao'} size={30} color={'white'} /></TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 40,
          width: '100%',
          // backgroundColor:'yellow',
          marginTop: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Victoria Robertson
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          A mantra goes here
        </Text>
      </View>
      <View
        style={{
          height: 65,
          Width: '100%',
          marginVertical: 20,
          flexDirection: 'row',
          marginHorizontal: 15,
          backgroundColor: '#f6f6f6',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          borderColor: '#f6f6f6',
          borderWidth: 2.5,
        }}>
        <TouchableOpacity
          onPress={() => setButton('post')}
          style={{
            backgroundColor: button === 'post' ? '#fff' : '#f6f6f6',
            height: 60,
            width: '50%',
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 16,
              fontWeight: 700,
            }}>
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setButton('photos')}
          style={{
            backgroundColor: button === 'photos' ? '#fff' : '#f6f6f6',
            height: 60,
            width: '50%',
            borderRadius: 100,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 16,
              fontWeight: 700,
            }}>
            Photos
          </Text>
        </TouchableOpacity>
      </View>

      {button === 'post' ? (
        <View
          style={{
            height: '50%',
            paddingHorizontal: 15,
            maxHeight: '100%',
          }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={posts}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    maxWidth: '100%',
                    height: 90,
                  }}>
                  <TouchableOpacity
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
      ) : (
        <View
          style={{
            height: '50%',
            paddingHorizontal: 15,
            width: '100%',
            backgroundColor: 'white',
          }}>
          <FlatList
            horizontal={false}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            key={3}
            data={photos}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 120,
                    width: 120,
                    backgroundColor: '#f6f6f6',
                    // padding:10
                    margin: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    source={item.images}
                    resizeMode={'cover'}
                    style={{
                      height: 120,
                      width: 120,
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Profile;
