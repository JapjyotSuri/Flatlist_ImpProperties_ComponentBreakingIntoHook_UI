import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface pokemon{
    name: string,
    url: string,
    
  }
  interface PokemonCardPrpos{
     item: pokemon
  }

  
const PokemonCard = ({item}: PokemonCardPrpos) => {
  return (
    <View style={styles.card}><Text>
    {item.name}
  </Text></View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#DAE0E2',
        width: 300,
        margin: 16,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 5,
       }
})