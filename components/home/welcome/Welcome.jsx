import React from 'react'
import { View, Text, TextInput,TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router =useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Nimrod</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job in our site :) </Text>
      </View>
      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          styles={styles.searchInput} 
          value='' 
          onChange={()=> {} } 
          placeholder="What are you looking for ?">

          </TextInput>
        </View>
        
      </View>
    </View>
  )
}

export default Welcome