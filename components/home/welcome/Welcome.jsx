import { View, Text, TextInput,TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes=["Full-Time", "Part-Time", "Contractor"];


const Welcome = () => {
  const router =useRouter();
  const [activeJobType,setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Nimrod</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          styles={styles.searchInput} 
          value='' 
          onChange={()=> {} } 
          placeholder="What are you looking for ?">

          </TextInput>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image 
          source={icons.search} 
          resizeMode='contain'
          style={styles.searchBtnImage}>
          </Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
        data={jobTypes}
        renderItem={({item}) => (
          <TouchableOpacity key={item} style={styles.tab(activeJobType, item)} 
          onPress={() =>{
            setActiveJobType(item);
            router.push('/serach/${item}')
          }}>
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal />
      </View>
    </View>
  );
};

export default Welcome