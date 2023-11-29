import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBase,
} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppInput from '../../../components/AppInput/AppInput';
import {appImages} from '../../../assets';
// import { Image } from 'react-native-paper/lib/typescript/components/List/List';

const Deal = [
  {
    id: 0,

    name: 'Aroose Noir',
    name1: 'T-Shirt Red',
    name2: 'Jacket jeans',
    price: 'RS 7500',
    price1: 'RS 750',
    price2: 'RS 5638',
    image: appImages.aroosanoir,
    image1: appImages.Tshirtred,
    image2: appImages.jacketjeans,
  },
  {
    id: 1,

    name: 'Exclusive',
    name1: 'T-Shirt Blue',
    name2: 'Jacket yellow',
    price: 'RS 9857',
    price1: 'RS 1457',
    price2: 'RS 9374',
    image: appImages.exclusive,
    image1: appImages.Tshirtblue,
    image2: appImages.jacketyellow,
  },
  {
    id: 2,

    name: 'Janan',
    name1: 'T-shirt Black',
    name2: 'Jacket skin',
    price: 'RS 5786',
    price1: 'RS 1973',
    price2: 'RS 1038',
    image: appImages.janan,
    image1: appImages.TshirtBlack,
    image2: appImages.jacketskin,
  },
  {
    id: 3,

    name: 'Janan Silver',
    name1: 'T-shirt Orange',
    name2: 'Jacket White',
    price: 'RS 6876',
    image: appImages.janansilver,
    price1: 'RS 2163',
    image1: appImages.Tshirt,
    price2: 'RS 24038',
    image2: appImages.jacketwhite,
  },
  {
    id: 4,
    name: 'Vocal',
    price: 'RS 3748',
    image: appImages.vocal,
    name1: 'T-shirt Printed',
    price1: 'RS 1300',
    image1: appImages.Tshirtprinted,
    name2: 'Jacket Red',
    price2: 'RS 8364',
    image2: appImages.jacketred,
  },
];

const Market = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <AppHeader title={'Market'} />
      <AppInput
        borderRadius={40}
        flexDirection={'row'}
        placeholder={'Search'}
      />

      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '800',
            color: 'black',
            marginHorizontal: 18,
            marginVertical: 30,
          }}>
          Perfumes
        </Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Deal}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 190,
                  maxWidth: '100%',
                  flexDirection: 'row',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F6F6F6',
                    // height: 200,
                    width: 160,
                    borderColor: 'grey',
                    borderRadius: 8,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    resizeMode={'contain'}
                    style={{
                      marginVertical: 7,
                      height: 90,
                      width: 90,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                    }}>
                    {item.name}
                  </Text>
                  <Text>{item.price}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '800',
            color: 'black',
            marginHorizontal: 18,
            marginVertical: 30,
          }}>
          T-Shirts
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Deal}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 190,
                  maxWidth: '100%',
                  flexDirection: 'row',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F6F6F6',
                    // height: 200,
                    width: 160,
                    borderColor: 'grey',
                    borderRadius: 8,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image1}
                    resizeMode={'contain'}
                    style={{
                      marginVertical: 7,
                      height: 90,
                      width: 90,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                    }}>
                    {item.name1}
                  </Text>
                  <Text>{item.price1}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '800',
            color: 'black',
            marginHorizontal: 18,
            marginVertical: 30,
          }}>
          Jackets
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Deal}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: 190,
                  maxWidth: '100%',
                  flexDirection: 'row',
                  marginHorizontal: 20,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#F6F6F6',
                    width: 160,
                    borderColor: 'grey',
                    borderRadius: 8,
                    alignItems: 'center',
                    marginBottom:15,
                  }}>
                  <Image
                    source={item.image2}
                    resizeMode={'cover'}
                    style={{
                      marginVertical: 7,
                      height: 90,
                      width: 90,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'black',
                    }}>
                    {item.name2}
                  </Text>
                  <Text>{item.price2}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Market;
