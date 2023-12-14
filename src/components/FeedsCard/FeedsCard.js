import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-vector-icons/Ionicons';

const FeedsCard = ({
  source,
  name,
  onpress,
  caption,
  profilePic
  
}) => {
  const [like, setLike] = useState(true);
  const [comment, setComment] = useState(true);
  const [share, setShare] = useState(true);
  const [follow, setFollow] = useState(true);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          height: '12%',
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth: 0.9,
          borderColor: 'grey',
        }}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: profilePic}}
              style={{
                height: 50,
                width: 50,
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
            {name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            10 min ago
          </Text>
        </View>
        <Like onPress={onpress} name={'like1'} size={30} color={'grey'} />
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
          }}>
          <Text
            onPress={() => {
              setFollow(!follow);
            }}
            style={{fontSize: 14, color: '#5DB075', fontWeight: '700'}}>
            {follow ? 'Follow' : 'Unfollow'}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 400,
          width: '100%',
        }}>
        {caption && (
          <Text
            style={{
              fontSize: 18,
              color: 'black',
            }}>
            {caption}
          </Text>
        )}
        <Image
          resizeMode="contain"
          style={{
            height: '90%',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 10,
          }}
          source={{uri: source}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 50,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 0.3,
          marginBottom: 10,
          borderColor: 'grey',
        }}>
        <TouchableOpacity
          onPress={() => {
            setLike(!like);
          }}
          style={{
            height: 50,
            width: '32%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderRightWidth: 0.5,
          }}>
          <Like
            name={like ? 'like2' : 'like1'}
            size={25}
            color={like ? 'grey' : '#5DB075'}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setComment(!comment);
          }}
          style={{
            height: 50,
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRightWidth: 0.5,
          }}>
          <Comment
            name={comment ? 'comment-o' : 'comment'}
            size={24}
            color={comment ? 'grey' : '#5DB075'}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Comment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShare(!share);
          }}
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            width: '30%',
            justifyContent: 'space-evenly',
          }}>
          <Share
            name={share ? 'arrow-redo-outline' : 'arrow-redo-sharp'}
            size={30}
            color={share ? 'grey' : '#5DB075'}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedsCard;
