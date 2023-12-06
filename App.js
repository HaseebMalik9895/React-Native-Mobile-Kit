import {View, Text} from 'react-native';
import React from 'react';
import MainStack from './src/navigation/Index';

const App = () => {
  return (
    <>
      <MainStack />
    </>
  );
};

export default App;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import axios from 'axios';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/login', {
//         username: username,
//         password: password,
//       });

//       console.log(response.data);
//       // if(response.data.message!=login){}elselse{} // Handle the response accordingly
//     } catch (error) {
//       console.error('Error during login:', error.message);
//       // Handle errors, e.g., display an error message to the user
//     }
//   };

//   return (
//     <View>
//       <Text>Username:</Text>
//       <TextInput
//         placeholder="Enter your username"
//         onChangeText={text => setUsername(text)}
//       />

//       <Text>Password:</Text>
//       <TextInput
//         placeholder="Enter your password"
//         secureTextEntry
//         onChangeText={text => setPassword(text)}
//       />

//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginScreen;
