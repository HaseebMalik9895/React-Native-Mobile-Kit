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
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

const Posts = ({navigation, Caption}) => {
  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const handlePost = async () => {
    // Check if an image is selected
    const userId = auth().currentUser.uid;
    if (image) {
      setLoading(true);

      try {
        const imageName = Date.now() + '.jpg';
        // Create a reference to the storage path
        const storageRef = storage().ref(`images/${imageName}`);

        // Upload the image to Firebase Storage
        await storageRef.putFile(image.uri);

        // Get the download URL of the uploaded image
        const downloadURL = await storageRef.getDownloadURL();

        // Now you can use the 'downloadURL' to store it in the database or perform any other actions
        console.log('Image uploaded successfully. Download URL:', downloadURL);

        database().ref(`users/${userId}/post`).push({
          postCaption: postText,
          image: imageName,
          imageUrl: downloadURL,
        });

        // Reset the state and loading indicator
        setImage(null);
        setPostText('');
        navigation.navigate('Feed');
        setLoading(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        setLoading(false);
      }
    } else {
      // Handle the case when no image is selected

      database().ref(`users/${userId}/post`).push({
        postCaption: postText,
      });
    }
    setImage(null);
    setPostText('');
    navigation.navigate('Feed');
    setLoading(false);
  };
  const openImagePicker = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      // cropping: true, // Enable cropping
      cropperCircleOverlay: false, // Set to true if you want a circular overlay
      cropperToolbarTitle: 'Crop Image', // Title for the cropping screen
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

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(response => {
        if (!response.didCancel) {
          // User selected an image from the gallery
          if (response.path) {
            setImage({uri: response.path});
          }
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
        {image ? (
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
              source={image ? image : null}
              resizeMode={'cover'}
              style={{
                height: '89%',
                width: '100%',
                resizeMode: 'cover',
                borderWidth: 2,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              // height: '35%',
              paddingVertical: 20,
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
          </View>
        )}
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
            onPress={openGallery}
            style={{
              width: '30%',
              height: 40,
              backgroundColor: 'white',
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: '#5DB075',
              borderRadius: 10,
              marginLeft: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              Gallery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Posts;
