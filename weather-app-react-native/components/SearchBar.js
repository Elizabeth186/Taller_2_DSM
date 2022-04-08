import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Picker } from '@react-native-picker/picker';

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>

    <Picker style={styles.itempais} onValueChange={(itemValue) => fetchWeatherData(itemValue)}>
    <Picker.Item label="--seleccione una ciudad--" value="Aguilares"/>
    <Picker.Item label="Aguilares" value="Aguilares" />
    <Picker.Item label="Apopa" value={"Apopa"} />
    <Picker.Item label="Ayutuxtepeque" value={cityName} />
    <Picker.Item label="Ciudad Delgado" value={"Ciudad-Delgado"} />
    <Picker.Item label="Cuscatancingo" value={cityName} />
    <Picker.Item label="El Paisnal" value={cityName} />
    <Picker.Item label="Guazapa" value="Guazapa" />
    <Picker.Item label="Ilopango" value="Ilopango" />
    <Picker.Item label="Mejicanos" value={cityName} />
    <Picker.Item label="Nejapa" value={cityName} />
    <Picker.Item label="Panchimalco" value={cityName} />
    <Picker.Item label="Rosario de Mora" value={cityName} />
    <Picker.Item label="San Marcos" value={cityName} />
    <Picker.Item label="San Martín" value={cityName} />
    <Picker.Item label="San Salvador" value={cityName} />
    <Picker.Item label="Santiago Texacuangos" value={cityName} />
    <Picker.Item label="Santo Tomás" value={cityName}/>
    <Picker.Item label="Soyapango" value="Soyapango" />
    <Picker.Item label="Tonacatepeque" value={cityName} />
    </Picker>

        </View>
    )
}

const styles = StyleSheet.create({
     searchBar: {
         marginTop: "6%",
         borderRadius: 25,
         marginHorizontal: "5%",
         backgroundColor: 'rgba(255,255,255, 0.4)',
         fontWeight: 'bold'
     }
})
