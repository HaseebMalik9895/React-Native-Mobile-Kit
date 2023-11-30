import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import database from '@react-native-firebase/database';
import ImagePicker from 'react-native-image-crop-picker';

const Posts = ({navigation}) => {
  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();

  const handlePost = async () => {
    try {
      setLoading(true);
      // Assuming you have a Firebase database reference
      const postsRef = database().ref('posts');

      // Push the new post to the 'posts' collection
      await postsRef.push({
        text: postText,

        // Add other data related to the post (user information, timestamp, etc.)
      });

      // Navigate to the home screen or do any other action after posting
      navigation.goBack();
    } catch (error) {
      console.log('Error posting:', error);
    }
  };

  const openImagePicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      // cropping: true, // Enable cropping
      cropperCircleOverlay: false, // Set to true if you want a circular overlay
      cropperToolbarTitle: 'Crop Image', // Title for the cropping screen
      includeBase64: true, // Set to true if you want to include base64-encoded image data
    })
      .then(response => {
        if (response.path) {
          setImage({uri: response.path});
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppHeader
        onPress={() => navigation.goBack()}
        title={'Creat post'}
        backArrow={true}
      />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 60,
            width: '100%',
            flexDirection: 'row',
            borderBottomWidth: 0.3,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../assets/images/person.png')}
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
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                onPress={handlePost}
                style={{fontSize: 18, color: '#5DB075'}}>
                Post
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '70%',
          }}>
          <TextInput
            value={postText}
            onChangeText={text => setPostText(text)}
            multiline={true}
            maxLength={200}
            placeholder="Whats on your mind?"
            style={{
              fontSize: 30,
            }}
          />
          <Image
            source={image?image : null}
            resizeMode={'cover'}
            style={{
              height: '89%',
              width: '100%',
              resizeMode: 'cover',
              borderWidth: 2,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={openImagePicker}
            style={{
              backgroundColor: 'white',
              width: '30%',
              height: 40,
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: '#5DB075',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Photo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '30%',
              height: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: '#5DB075',
              borderRadius: 10,
              marginLeft:5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Video
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Posts;
