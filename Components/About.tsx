import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList={
    Home: undefined,
    About: {user: {name: string,age: number}}
}
type AboutScreenProp=NativeStackScreenProps<RootStackParamList,'About'>
type props={
    navigation: AboutScreenProp
    route: AboutScreenProp
}

const About: React.FC<AboutScreenProp> = ({navigation,route}) => {
    const {user}=route.params;
    console.log(user.name," ",user.age);

  return (
    <View>
      <Text>About</Text>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})