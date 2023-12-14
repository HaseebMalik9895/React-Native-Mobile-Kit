import {View, FlatList, TouchableOpacity, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeedsCard from '../../../components/FeedsCard/FeedsCard';
import AppHeader from '../../../components/AppHeader/AppHeader';
import database, {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const Feed = ({navigation}) => {
  // const data = [
  //   {
  //     id: 0,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 1,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 2,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 3,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 4,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 5,
  //     name: 'haseeb',
  //   },
  //   {
  //     id: 6,
  //     name: 'haseeb',
  //   },
  // ];
  // const keyExtractor = item => item.id;

  const [appPost, setAppPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dellPost, setDellPost] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      setLoading(true);
      const dataRef = database().ref('/users');
      const dataSnapshot = await dataRef.once('value');
      const promises = [];

      dataSnapshot.forEach(usersnapshot => {
        const userId = usersnapshot.key;
        const postRef = database().ref(`/users/${userId}/post`);
        const nameRef = database().ref(`/users/${userId}/name`);
        const imageRef = database().ref(`/users/${userId}/profileimg`); // Update the reference for profile image
        promises.push(
          postRef.once('value'),
          nameRef.once('value'),
          imageRef.once('value'),
        );
      });

      const snapshots = await Promise.all(promises);
      const allPosts = [];

      for (let i = 0; i < snapshots.length; i += 3) {
        const userPostsSnapshot = snapshots[i];
        const userNameSnapshot = snapshots[i + 1];
        const profileImgSnapshot = snapshots[i + 2];

        const userName = userNameSnapshot.val();
        const profileImg = profileImgSnapshot.val(); // Assuming profile image is a URL, adjust accordingly

        userPostsSnapshot.forEach(postSnapshot => {
          const post = postSnapshot.val();
          // Add the user name and profile image to the post object
          post.userName = userName;
          post.profileImg = profileImg;
          allPosts.push(post);
        });
      }

      setAppPost(allPosts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDellPost = async () => {
    const imageRef = storage().refFromURL(dellPost);
    imageRef.delete().then(() => {
      console.log('image delete');
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppHeader title={'Urben Cart'} />
      <View
        style={{
          paddingHorizontal: 12,
          backgroundColor: 'white',
          marginBottom: 70,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          onRefresh={getData}
          refreshing={loading}
          contentContainerStyle={{}}
          data={appPost}
          renderItem={({item}) => {
            return (
              <FeedsCard
                onpress={() => {
                  handleDellPost(), setDellPost(item.imageUrl);
                }}
                name={item.userName}
                source={item.imageUrl}
                caption={item.postCaption}
                profilePic={item.profileImg}
              />
            );
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Posts')}
          style={{
            width: 61,
            height: 61,
            borderRadius: 50,
            position: 'absolute',
            bottom: 40,
            right: 25,
            backgroundColor: '#5DB075',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Icon name={'add-circle-outline'} size={80} color={'white'} /> */}
          <View>
            <Text
              style={{
                fontSize: 50,
                color: '#ffff',
                // textAlign:'center',
                // textAlignVertical:'center',
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feed;
