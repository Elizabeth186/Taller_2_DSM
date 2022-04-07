import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe'


const { width, height } = Dimensions.get('window');
const EstrenosScreen = () => {
  return (
    
    <SafeAreaView style={{backgroundColor:'black'}}>
      <ScrollView>
        <View style={styles.containerprincipal}>
          <View style={styles.viewcategoria}>
            <Text style={styles.txtcategoria}>Proximas Peliculas</Text>
          </View>
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'5RNAOapAWug'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Alcarràs</Text>
              <Text style={styles.txtsubtitleinfo}>Jake Gyllenhaal, Yahya Abdul-Mateen II y Eiza González están en lo último de Michael Bay, titulado en la versión original 'Ambulance'. Dos hermanos planean un asalto pero no sale como esperaban. Para escapar, asaltarán una ambulancia en la que no están solos. Todos juntos, secuestradores y rehenes, vivirán la huida por las calles de Los Ángeles.</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>13 de abril</Text>
              </View>
            </View>
          </View>
          {/* ************************************************************* */}
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'1k7o3GUDsiQ'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Ambulance. Plan de huida</Text>
              <Text style={styles.txtsubtitleinfo}>Ha tenido muy buena acogida en la Berlinale. Tras 'Verano 1993', la cineasta trae otro drama familiar ambientado en la vida rural, concretamente en Alcarràs, una localidad catalana. En primavera llegará a los cines.</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>29 de abril</Text>
              </View>
            </View>
          </View>
          {/* ************************************************************* */}
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'afeUTi7QRxI'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Doctor Strange en el Multiverso de la Locura</Text>
              <Text style={styles.txtsubtitleinfo}>Sam Raimi vuelve a dirigir una historia de Marvel. ¿Qué nos deparará esta segunda parte? de momento Benedict Cumberbatch volverá a estar acompañado por Benedict Wong, Rachel McAdams, Chiwetel Ejiofor... Y Elisabeth Olsen.</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>6 de mayo</Text>
              </View>
            </View>
          </View>
          {/* ************************************************************* */}
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'9m9yRauMJIQ'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Jurassic World: Dominion</Text>
              <Text style={styles.txtsubtitleinfo}>La tercera entrega de la nueva trilogía contará con uno de los momentos más esperados -y nostálgicos- de los fans: la reunión de Sam Neill, Laura Dern y Jeff Goldblum. Chris Pratt y Bryce Dallas Howard volverán también a la carga en este tercer capítulo.</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>10 de junio</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>Proximas Series</Text>
        </View>
        <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'51H-sk_pCmI'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Bienvenidos a Edén</Text>
              <Text style={styles.txtsubtitleinfo}>Bienvenido a Edén es una serie thriller que sigue la historia de un grupo de cinco jóvenes atractivos e influencers que son invitados a una de las fiestas más exclusivas de la historia en una isla</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>6 de abril 2022</Text>
              </View>
            </View>
          </View>
{/* *************************************************************** */}
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'SGluiIsL3Yk'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Ice Age, las desventuras de Scrat</Text>
              <Text style={styles.txtsubtitleinfo}>En esta serie de historias vemos a Scrat enfrentarse a la paternidad, intentando establecer un vínculo con el pequeño y travieso Baby Scrat. Ambos lucharán juntos por hacerse con la preciada bellota de las películas</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>13 de abril 2022</Text>
              </View>
            </View>
          </View>
          {/* *************************************************************** */}
          <View style={styles.trailers}>
            <YoutubePlayer
              height={300}
              play={false}
              videoId={'1bfwYwcepzc'} />
            <View style={styles.estrenos}>
              <Text style={styles.txttitleinfo}>Star Wars: Obi-Wan Kenobi</Text>
              <Text style={styles.txtsubtitleinfo}>Bienvenido a Edén es una serie thriller que sigue la historia de un grupo de cinco jóvenes atractivos e influencers que son invitados a una de las fiestas más exclusivas de la historia en una isla</Text>
              <View style={styles.viewfecha}>
                <Text style={styles.fechaestreno}>Fecha de Estreno:</Text>
                <Text style={styles.respuesta}>27 de mayo 2022</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default EstrenosScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1E2E3C'
  },
  viewcategoria: {
    backgroundColor: '#1E2E3C',
    width: width * 1,
    height: height * 0.05,
    marginBottom: '2%'
  },
  txtcategoria: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  containerprincipal: {
    width: width,
    backgroundColor: '#071217',
    alignItems: 'center',

  },
  txttitleinfo: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  txtsubtitleinfo: {
    color: '#ffffff',
    fontSize: 15,
  },
  viewfecha: {
    flexDirection: 'row'
  },
  estrenos: {
    width: width,
    alignItems: 'center'
  },
  fechaestreno: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 10
  },
  respuesta: {
    color: '#ffffff',
    fontSize: 16,
  },
  trailers: {
    borderTopColor: '#24365A',
    borderWidth: 2,
  }
});