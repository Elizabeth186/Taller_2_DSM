import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: { temp, humidity, temp_min, temp_max },
            wind: { speed }
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;   
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'white'
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={{alignItems: 'center', marginTop:'7%', borderRadius:15, backgroundColor:'rgba(1,198,250, 0.78)', marginHorizontal:'20%', paddingBottom:8 }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 25, }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor,}}>{temp} °C</Text>
                    <Text style={{ ...styles.headerText, color: textColor,}}>min {temp_min} °C</Text>
                    <Text style={{ ...styles.headerText, color: textColor,}}>max {temp_max} °C</Text>
                </View>

                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: '#606060', fontWeight: 'bold' }}>Humedad</Text>
                        <Text style={{ fontSize: 22, color: '#606060' }}>{humidity} %</Text>
                    </View>

                    
                
                </View>
                <View style={styles.extraInfo}>
                <View style={styles.info}>
                        <Text style={{ fontSize: 22, color: '#606060', fontWeight: 'bold', textAlign:'center' }}>Viento (Velocidad)</Text>
                        <Text style={{ fontSize: 22, color: '#606060' }}>{speed} m/s</Text>
                    </View>
                </View>
                

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 20,
        marginTop: 10,
        
    },
    extraInfo: {
        marginTop: 1,
        alignSelf: 'center',
        padding: 10,
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        
    }
});
  