import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Screen1 = () => {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryItem, setCategoryItem] = useState(null);

  const [sortSelect, setSortSelect] = useState('');
  const navigation = useNavigation();
  const [file, setFile] = useState(false);
  const [limit, setLimit] = useState(5);
  const [totalLimit, setTotalLimit] = useState(0);
  useEffect(() => {
    getApi();
  }, [file]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => {
        console.log(res), setCategoryList(res.data);
      })
      .catch(err => console.log({...err}));
  }, []);
  const selectionSort = data => {
    setSortSelect(data);
    setFile(!file);
  };
  const selectionOfItem = async data => {
    console.log(data);
    await axios
      .get(`https://fakestoreapi.com/products/category/${data}`)
      .then(res => {console.log(res.data, 'dhdhg'),setData(res.data)})
      .catch(err => console.log(err));
  };
  const getApi = () => {
    axios
      .get(`https://fakestoreapi.com/products?limit=5&&sort=${sortSelect}`)
      .then(res => {
        console.log(res), setData(res.data);
      })
      .catch(err => console.log({...err}));
  };
  const getProdId = id => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        console.log(res.data), navigation.navigate('Products', {desc:res.data.description,img:res.data.image,price:res.data.price,title:res.data.title,rate:res.data.rating});
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ccc'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 20,
          marginEnd: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            padding: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#222',
            height: 40,
            width: 150,
            justifyContent: 'center',
          }}>
          <Picker
            onValueChange={data => selectionSort(data)}
            dropdownIconColor="#fff"
            selectedValue={sortSelect}
            style={{color: '#fff'}}>
            <Picker.Item label="Sort by" style={{color: '#222'}} />
            <Picker.Item label="Desc" value={'desc'} style={{color: '#222'}} />
          </Picker>
        </View>
        <View
          style={{
            padding: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#222',
            height: 40,
            width: 150,
            justifyContent: 'center',
          }}>
          <Picker
            onValueChange={data => selectionOfItem(data)}
            dropdownIconColor="#fff"
            selectedValue={categoryItem}
            style={{color: '#fff'}}>
            <Picker.Item label="Categories" style={{color: '#222'}} />

            {categoryList &&
              categoryList.map(
                (data, index) => (
                  console.log(data, index),
                  (
                    <Picker.Item
                      key={index}
                      label={data}
                      value={data}
                      style={{color: '#9CB1CE'}}
                    />
                  )
                ),
              )}
          </Picker>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          marginStart: 10,
          marginEnd: 10,
        }}>
        {data.map(Item => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => getProdId(Item.id)}
              style={{
                marginTop: 15,
                paddingTop: 15,
                marginStart: 15,
                marginEnd: 15,
                marginBottom: 10,
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
              }}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginStart:20,marginEnd:20}}>
                <Text style={{color: '#000',alignSelf:'flex-start'}}>Rating : {Item.rating.rate} </Text>
 
              <ImageBackground
                source={{uri: Item.image}}
                style={{height: 150, width: 150}}
                resizeMode={'contain'}>
              </ImageBackground>
              <Text style={{color: '#000',}}>Sold : {Item.rating.count} </Text>

              </View>
              <Text style={{marginTop: 10,marginBottom:10}}>{Item.title} </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Screen1;
