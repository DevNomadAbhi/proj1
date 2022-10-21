import React from "react";
import {View,Text,Image} from 'react-native'

const Products=({route})=>{


          let data=route.params
          console.log(data);
          // Object.keys(data).map(key=>console.log(key))
          return(
                    <View style={{flex:1}}>
                            <View style={{flex:0.4 ,backgroundColor:'#fff',}}>
                              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginStart:20,marginEnd:20}}>
                              <Text style={{fontSize:14,color:'#000'}}>Rating : {data.rate.rate} </Text>
                              <Text style={{fontSize:14,color:'#000'}}>Sold : {data.rate.count} </Text>
                              </View>
                              <Image source={{uri:data.img }} style={{height:180,width:180,resizeMode:'contain',alignSelf:'center',marginTop:20}} />
                            </View>
                            <View style={{flex:0.6}}>
                              <View style={{marginStart:20,marginEnd:20,marginTop:10}}>
                              <Text style={{fontSize:18,color:'#000'}}>{data.title} </Text>
                              <Text style={{fontSize:16,color:'#000',marginTop:15}}>M.R.P : $ {data.price} </Text>

                              <Text style={{fontSize:14,color:'#000',marginTop:10}}>{data.desc} </Text>

                              </View>
                            </View>

                    </View>
          )
}
export default Products;