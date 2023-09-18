import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack,useRouter } from "expo-router";

import {CCOLORS, COLORS, icons, images,SIZES} from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn, Welcome } from '../components';


const Home = () => {
    const router=useRouter();
    return (
        <SafeAreaView style={{flex : 1, backgroundColor : COLORS.lightWhite}}>
            <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible : false, 
        headerLeft: () => (
            <ScreenHeaderBtn iconUrl = {icons.menu} dimesion="60%"/> ),
        headerRight: () => (
            <ScreenHeaderBtn iconUrl = {images.profile} dimesion="100%"/> ), 
            headerTitle : ""
            }}> 
            </Stack.Screen>   
            
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    style={{flex : 1, padding: SIZES.medium
                    }}
                >
                    <Welcome></Welcome>
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs></Nearbyjobs>
                </View>
                
            </ScrollView> 

        </SafeAreaView>
    )

}

export default Home;