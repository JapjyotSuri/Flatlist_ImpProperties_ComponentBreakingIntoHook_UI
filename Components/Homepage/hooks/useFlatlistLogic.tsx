import React, { useCallback, useEffect, useState } from 'react'
import PokemonCard from '../../PokemonCard';

interface pokemon{
  name: string,
  url: string,
  
}
const useFlatlist = () => {
 
const [pokemons,setPokemons]=useState<pokemon[]>([]);
const [offset,setOffest]=useState<number>(0);
const [refreshing,SetRefreshing]=useState(false);
useEffect(() => {
  async function fetchData(){
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`)
    const data=await res.json();
    setPokemons((prev) => [...prev,...data.results])
    console.log(data)

  }
   fetchData()

},[offset])
function fetchMoreData(){
  setOffest((prev) => prev+6)
}
function resetData(){
  setPokemons([])
  setOffest(0);

}
const PokemonCardPerformance=useCallback(({item}: {item: pokemon}) => {
  return <PokemonCard item={item}/>
},[pokemons])

  return {
    fetchMoreData,
    resetData,
    PokemonCardPerformance,
    refreshing,
    pokemons
  }
}

export default useFlatlist
