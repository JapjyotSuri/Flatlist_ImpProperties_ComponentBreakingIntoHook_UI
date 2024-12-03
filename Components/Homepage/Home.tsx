import { ActivityIndicator, FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EmptyList from '../EmptyList';
import PokemonCard from '../PokemonCard';
import useFlatlist from './hooks/useFlatlistLogic';
type RootStackParamList={
    Home: undefined,
    About: {user: {name: string,age: number}}
}
type HomeScreenProp=NativeStackNavigationProp<RootStackParamList,'Home'>
interface props{
    navigation: HomeScreenProp
}
interface pokemon{
  name: string,
  url: string,
  
}
const Home = ({navigation}: props) => {
  const {fetchMoreData,
    resetData,
    PokemonCardPerformance,
    refreshing,pokemons} = useFlatlist();
  return (
    <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
     <FlatList 
     keyExtractor={item => item.name}
     data={pokemons}
     renderItem={PokemonCardPerformance}
     onEndReached={fetchMoreData}
     onEndReachedThreshold={0.2}
     refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={resetData}></RefreshControl>

     }
     ListFooterComponent={ () => pokemons.length > 0 && <ActivityIndicator color='blue' size='large'></ActivityIndicator>}
     ListEmptyComponent={<EmptyList/>}
     >
     
     </FlatList>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  

})