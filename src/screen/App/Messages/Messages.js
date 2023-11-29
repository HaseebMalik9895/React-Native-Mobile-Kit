import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React,{useState,useEffect,useCallback} from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GiftedChat,InputToolbar} from 'react-native-gifted-chat'
const Messages = ({navigation}) => {
const [messages, setMessages] = useState([])
useEffect(() => {
  setMessages([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
      },
    },
  ])
}, [])
const onSend = useCallback((messages = []) => {
  setMessages(previousMessages =>
    GiftedChat.append(previousMessages, messages),
  )
}, [])

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: 'white',
      }}>
      <AppHeader onPress={()=>navigation.goBack()} title={'Messages'}
      backArrow={true} />
     <GiftedChat 
       messages={messages}
       onSend={messages => onSend(messages)}
       user={{
         _id: 1,
       }}
      //  renderInputToolbar={props => {
      //   return (
      //     <InputToolbar
      //       {...props}
      //       containerStyle={{
      //         borderWidth:1,
      //         borderRadius:10,
      //         borderColor:'#ccc',
      //         paddingBottom: 10,
      //         marginBottom:10,
      //       }}
      //     />
          
      //   );
      // }}
     />
    </View>
  );
};

export default Messages;
