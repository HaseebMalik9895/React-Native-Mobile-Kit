import {View, FlatList, TouchableOpacity,Text} from 'react-native';
import React,{useEffect, useState} from 'react';
import FeedsCard from '../../../components/FeedsCard/FeedsCard';
import AppHeader from '../../../components/AppHeader/AppHeader';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

  const [appPost, setAppPost] = useState([])
const [loading, setLoading] = useState(true)
  useEffect(()=>{
getData()
  },[])
  const getData = async()=>{
try {
setLoading(true)
  const dataRef = database().ref('/users')
  const dataSnapshot = await dataRef.once('value')
 const promises = []
console.log('data',dataSnapshot)
 dataSnapshot.forEach(usersnapshot =>{
  const userId = usersnapshot.key
  const postRef = database().ref(`/users/${userId}/post`)
  const nameRef = database().ref(`/users/${userId}/name`)
  promises.push(postRef.once('value'), nameRef.once('value'))
 })
 const snapshots = await Promise.all(promises);
 console.log('snapshot',snapshots)
 const allPosts = [];
 for (let i = 0; i < snapshots.length; i += 2) {
  const userPostsSnapshot = snapshots[i];
  const userNameSnapshot = snapshots[i + 1];

  const userName = userNameSnapshot.val();
  userPostsSnapshot.forEach(postSnapshot => {
    const post = postSnapshot.val();
    // Add the user name to the post object
    post.userName = userName;
    allPosts.push(post);

    setAppPost(allPosts)
    setLoading(false)
  });
  console.log('alllll',allPosts)
}
} catch (error) {
  console.log(error)
}
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppHeader title={'Urben Cart'} />
<View
style={{
  paddingHorizontal:12,
  backgroundColor:'white',
  marginBottom:70,
}}>

      <FlatList showsVerticalScrollIndicator={false} onRefresh={getData} refreshing={loading}
        contentContainerStyle={{}}
        data={appPost}
        renderItem={({item}) => {
          return <FeedsCard name={item.userName} source={item.imageUrl} caption={item.postCaption} />;
        }}
      />

      <TouchableOpacity onPress={()=>navigation.navigate('Posts')}
        style={{
          width: 61,height:61,
          borderRadius: 50,
          position: 'absolute',
          bottom: 40,
          right: 25,
          backgroundColor:'#5DB075',alignItems:'center',justifyContent:'center',
        }}>
        {/* <Icon name={'add-circle-outline'} size={80} color={'white'} /> */}
       <View><Text
        style={{
          fontSize:50,
          color:'#ffff'
          // textAlign:'center',
          // textAlignVertical:'center',
        }}>+</Text></View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feed;
