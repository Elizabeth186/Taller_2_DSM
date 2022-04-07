import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, Dimensions, StyleSheet,
  ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe'
import { BackgroundCarousel } from "./BackgroundCarousel";

const images = [
  "https://eloutput.com/app/uploads-eloutput.com/2022/01/peliculas-taquilleras.jpg?x=480&y=375&quality=40",
  "https://i.blogs.es/461366/diseno-sin-titulo/450_1000.jpeg",
  "https://areajugones.sport.es/wp-content/uploads/2021/12/cine-2021-1080x609.jpg",
  "https://blogthinkbig.com/wp-content/uploads/sites/4/2020/01/cabecera_pel%C3%ADculas_m%C3%A1s_taquilleras.jpg?resize=450%2C220",
];
const {width, height} = Dimensions.get('window');
const Stack = createNativeStackNavigator();
// NAVEGACION PRINCIPAL----------------------------------
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'black'}} >
      <View style={styles.containerprincipal} >
<ScrollView >
  {/* -----------------COMEDIA-------------------------- */}
<View style={styles.viewcategoria}>
<View style={{width:width, height:height*0.4}}>
        <BackgroundCarousel images={images} />
        </View>
        <Text style={styles.txtcategoria}>Comedia</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Doce en Casa')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/16136/n39reWDqNkRhkLr9rLomq98Wjitt9lRrCrRoQhvH.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Sonic')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/17109/jm8JXQBfUtpSNvnerBQdKKEMjMPDfKo7zvtgr0FC.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Shrek')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15414/YRkVCu8RWguIXUIFVgDPmDsyYWMuURH9Y1t8l8i9.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Red')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15320/Dui7azbMz9XVNnEi6ejLmGt9Bj4Q6NzNVVAcn9ok.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Los pinguinos de papa')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/16836/gi5km9llMTrh8E9x6SXsR9xNHqGt9XrlNx0trZPn.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Son como niños')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/16078/DVn29rRi0UHu6FwaXqAGQEyGUF3dbMCZJKL4Low8.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
    {/* -----------------ROMANCE-------------------------- */}
<View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>Romance</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Aguas profundas')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15879/ZMs2m0M5UiH4lzUTBqIooZ7P7D05WsTzXuD39cfk.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Hasta que nos volvamos a encontrar')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/16041/DNM6iqIQ96OzRxzSoVs9CppwxAKyajsqrSB8BEX3.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('4 Mitades')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/13618/8uRqXFopsDU4n6EO1wp6UnWrMEaTn0fzcY7nCkad.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Tacticas de amor')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/14611/YPWIhxPWjEARjjMWhtMt1Lqc4G2M8KylyTylbKxT.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('No me mates')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/14887/93SO1zKanHcytvbcIK83bnAUa2cTvW1hPOweibpt.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Millonario sin amor')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/12549/kCmD8KRF8Uc4QMgUwr9goEBXDq9XJDEO1FsoeRU9.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
     {/* -----------------ACCION-------------------------- */}
<View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>ACCION</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Troya')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15506/IDxosk0DlrfGpzncaD3tko4j4KiG1LIFXwj5qNcP.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('El dia despues de mañana')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15498/bAwBlSsoniZyGXyhFBkiC42EGq7aI5KvjBZiRdBk.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Batman')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15111/cQtcQJtt5NV2vHQ8OsYj5IFwxmmJKJxnGdua7nNU.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Venganza')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15143/F7NTDDob1lRcuzE2bCuvZcTvhWI8ctbpsVdiv43C.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('El ultimo sharknado')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/2008/vfXZBA3XK70BakpomznB6bi8XcSZ715E6A5D9s2o.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Resident Evil')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/13216/WRl3knk3U2tU5jLF80tgnQpjblv6xilon13mDszz.jpg' }}></Image>
        <Text></Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  );
};

// CONETENDORES DE PELICULAS
// INFOPELIS COMEDIA
const P1C = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'A5Hf2fyFk68'}
    />
    <Text style={styles.txttitleinfo}>Doce en Casa</Text>
    <Text style={styles.txtsubtitleinfo}>Un padre está muy ocupado con sus doce hijos y la administración del negocio familiar</Text>
    </View>
  );
};
const P2C = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'2OMixTIRQcY'}
    />
    <Text style={styles.txttitleinfo}>SONIC 2 (2022)</Text>
    <Text style={styles.txtsubtitleinfo}>Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.</Text>
    </View>
    
  );
};
const P3C = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'BKQyvsbbQHk'}
    />
    <Text style={styles.txttitleinfo}>SHREK PARA SIEMPRE</Text>
    <Text style={styles.txtsubtitleinfo}>Cuando Shrek y la princesa Fiona regresan de su luna de miel, los padres de ella los invitan a visitar el reino de Muy Muy Lejano para celebrar la boda. Para Shrek, al que nunca abandona su fiel amigo Asno, esto constituye un gran problema. Los padres de Fiona, por su parte, no esperaban que su yerno tuviera un aspecto semejante y, mucho menos, que su hija hubiera cambiado tanto. Todo esto trastoca los planes del rey respecto al futuro del reino. Pero entonces entran en escena la maquiavélica Hada Madrina, su arrogante hijo el Príncipe Encantador y un minino muy especial: el Gato con Botas, experto cazador de ogros.</Text>
    </View>
  );
};
const P4C = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'XdKzUbAiswE'}
      />
      <Text style={styles.txttitleinfo}>Red</Text>
      <Text style={styles.txtsubtitleinfo}>Mei Lee, una niña de 13 años un poco rara pero segura de sí misma, se debate entre ser la hija obediente que su madre quiere que sea y el caos propio de la adolescencia. Ming, su protectora y ligeramente exigente madre, no se separa nunca de ella lo que es una situación poco deseable para una adolescente. Y por si los cambios en su vida y en su cuerpo no fueran suficientes, cada vez que se emociona demasiado (lo que le ocurre prácticamente todo el tiempo), se convierte en un panda rojo gigante.</Text>
      </View>
  );
};
const P5C = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'9X-4vTs_bas'}
      />
      <Text style={styles.txttitleinfo}>Los Pinguinos de Papa</Text>
      <Text style={styles.txtsubtitleinfo}>Mr. Popper vive en una tranquila y pequeña ciudad americana llamada Stillwater. Allí nunca pasa nada. Quizá por eso se ha convertido en un soñador y en un especialista en temas del Ártico y de la Antártida, incluso podría decir el nombre de todos sus exploradores y qué fueron a hacer a los polos. Un día conversa, gracias a un programa de radio, con el almirante Drake sobre su expedición a la Antártida, y éste le dice que pronto recibirá una sorpresa… Lo que nadie podía suponer es que el almirante iba a enviar una caja con ¡un pingüino de la mismísima Antártida! La vida de nuestro protagonista cambiará radicalmente, y la aburrida vida en Stillwater se transformará en una fantástica y permanente aventura llena de pingüinos.</Text>
      </View>
  );
};
const P6C = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'kBCvLJBcsIE'}
      />
      <Text style={styles.txttitleinfo}>Son Como Niños 2</Text>
      <Text style={styles.txtsubtitleinfo}>Lenny se ha trasladado con su familia a la pequeña ciudad donde tanto él como sus amigos se criaron. En esta ocasión, los adultos serán quienes reciban toda una lección de sus propios hijos. Secuela de "Niños grandes".</Text>
      </View> 
  );
};
// INFOPELIS ROMANCE
const P1R = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'MuPVioiR7D0'}
    />
    <Text style={styles.txttitleinfo}>Aguas Profundas</Text>
    <Text style={styles.txtsubtitleinfo}>Un marido adinerado, que permite que su esposa tenga relaciones extramatrimoniales para evitar el divorcio, se convierte en el principal sospechoso de la desaparición de los amantes de ella... Adaptación de la novela de Patricia Highsmith.</Text>
    </View>
  );
};
const P2R = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'tud_GOgQLeA'}
    />
    <Text style={styles.txttitleinfo}>Hasta que nos  volvamos a encontrar</Text>
    <Text style={styles.txtsubtitleinfo}>Salvador Campodónico es un joven y exitoso empresario español cuya familia es dueña de la corporación hotelera más importante de toda España. Para la construcción de su primer proyecto internacional eligen aterrizar en Cusco. Es en este místico y mágico lugar donde Salvador conoce a Ariana, una aventurera mochilera que vive una vida completamente opuesta a la suya, libre de ataduras.</Text>
    </View>
    
  );
};
const P3R = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'LQsSCuW8gxw'}
    />
    <Text style={styles.txttitleinfo}>4 Mitades</Text>
    <Text style={styles.txtsubtitleinfo}>Que para cada persona haya un alma gemela es una teoría muy romántica pero quizás poco científica, y para Luca y Sara la tentación de probarla es fuerte. Pero sobre todo, ¿cómo se hace esta alma gemela? ¿Se parece a nosotros o es nuestro contrario? Es así como, casi como un desafío, los dos invitan a cenar a cuatro amigos que, casualmente, están solteros: Chiara, Matteo, Giulia y Dario. ¿Quién se enamorará de quién?</Text>
    </View>
  );
};
const P4R = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'AX6w1pWvyjw'}
      />
      <Text style={styles.txttitleinfo}>Tácticas en el amor</Text>
      <Text style={styles.txtsubtitleinfo}>Un publicista y una diseñadora de moda/bloguera no creen en el amor, así que apuestan que conseguirán conquistar al otro... por medio de tácticas poco convencionales.</Text>
      </View>
  );
};
const P5R = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'TyBNVfnMiZs'}
      />
      <Text style={styles.txttitleinfo}>No me mates</Text>
      <Text style={styles.txtsubtitleinfo}>Mirta, una adolescente de 19 años, muere de sobredosis junto a Robin, su novio. Entonces, resucita sola y se da cuenta de que para seguir viviendo necesita devorar a otras personas.</Text>
      </View>
  );
};
const P6R = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'vIhCHVcaxoc'}
      />
      <Text style={styles.txttitleinfo}>Millonario sin amor</Text>
      <Text style={styles.txtsubtitleinfo}>Un exitoso ejecutivo de televisión cambia su identidad y se traslada a un barrio pobre en busca de una verdadera conexión humana. Allí se enamora de una aspirante a actriz que intenta iniciar su carrera en el canal que dirige.</Text>
      </View>
  )}
  // INFOPELIS ACCION
const P1A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'ORKSndBYAPk'}
    />
    <Text style={styles.txttitleinfo}>Troya</Text>
    <Text style={styles.txtsubtitleinfo}>A lo largo de los tiempos, los hombres han hecho la guerra. Unos por poder, otros por gloria o por honor, y algunos por amor. En la antigua Grecia, la pasión de dos de los amantes más legendarios de la historia, Paris, príncipe de Troya (Orlando Bloom) y Helena (Diane Kruger), reina de Esparta, desencadena una guerra que asolará una civilización. El rapto de Helena por Paris, separándola de su esposo, el rey Menelao (Bren-dan Gleeson), es un insulto que El orgullo familiar establece que una afrenta a Menelao es una afrenta a su hermano Agamenón (Brian Cox), el poderoso rey de Micenas, que no tarda en reunir a todas las grandes tribus de Grecia para recuperar a Helena de manos de los troyanos y defender el honor de su hermano. La verdad es que la lucha por el honor por parte de Agamenón está corrompida por su incontenible codicia ya que necesita conquistar Troya para asumir el control del mar Egeo.</Text>
    </View>
  );
};
const P2A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'yYAFP-Jy5Mo'}
    />
    <Text style={styles.txttitleinfo}>El día después de mañana</Text>
    <Text style={styles.txtsubtitleinfo}>Las investigaciones del climatólogo Jack Hall indican que el calentamiento global podría desencadenar un repentino y catastrófico cambio climático de la Tierra. Hall advierte a los dirigentes políticos de la necesidad de adoptar inmediatamente medidas para evitarlo, pero sus advertencias llegan demasiado tarde: una serie de anómalos fenómenos climáticos empiezan a producirse en distintas partes del globo. El calentamiento global ha puesto el planeta al borde de una nueva era glacial. Mientras Jack advierte a la Casa Blanca del inminente cambio climático, su hijo Sam y sus amigos se encuentran atrapados en Nueva York, a donde han ido para participar en un concurso académico entre institutos.</Text>
    </View>
    
  );
};
const P3A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'aVLWxqaGiSo'}
    />
    <Text style={styles.txttitleinfo}>The Batman</Text>
    <Text style={styles.txtsubtitleinfo}>Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos. A medida que las pruebas comienzan a acercarse a su casa y se hace evidente la magnitud de los planes del autor, Batman debe forjar nuevas relaciones, desenmascarar al culpable y hacer justicia al abuso de poder y la corrupción que durante mucho tiempo han asolado Gotham City.</Text>
    </View>
  );
};
const P4A = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'uAR2eCivkIg'}
      />
      <Text style={styles.txttitleinfo}>Venganza</Text>
      <Text style={styles.txtsubtitleinfo}>De excursión, las Fuerzas Especiales Brenner Baker se topa con el recinto de un Cartel. Su marido fue asesinado y ella se dio por muerta. El Cartel cometió dos errores, mató a su esposo y la dejó con vida. No vivirán para hacer otro.</Text>
      </View>
  );
};
const P5A = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'wHc58kxyS9U'}
      />
      <Text style={styles.txttitleinfo}>El último Sharknado: Ya era hora</Text>
      <Text style={styles.txtsubtitleinfo}>Todo está perdido, ¿o no? Fin desbloquea el poder de viajar en el tiempo a través de los SHARKNADOS para salvar el mundo y resucitar a su familia. En su búsqueda, Fin lucha contra nazis, dinosaurios, caballeros e incluso da un paseo en el Arca de Noé. Esta vez, no se tratará de cómo detener a los sharknados, sino cuándo.</Text>
      </View>
  );
};
const P6A = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'k4RHN2ks5VI'}
      />
      <Text style={styles.txttitleinfo}>Resident Evil: Bienvenidos a Raccoon City</Text>
      <Text style={styles.txtsubtitleinfo}>Nueva adaptación al cine de los videojuegos de Capcom. La que fue una pujante ciudad sede del gigante farmacéutico Umbrella Corporation, Raccoon City, es ahora un pueblo agonizante del Medio Oeste. El éxodo de la compañía dejó a la ciudad convertida en un erial… con un gran mal gestándose bajo la superficie. Cuando ese mal se desata, un grupo de supervivientes deben unirse para destapar la verdad detrás de Umbrella y sobrevivir a la noche.</Text>
      </View>
  )}
function PeliculasScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Doce en Casa" component={P1C}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Sonic" component={P2C}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Shrek" component={P3C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Red" component={P4C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Los pinguinos de papa" component={P5C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Son como niños" component={P6C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Aguas profundas" component={P1R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Hasta que nos volvamos a encontrar" component={P2R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="4 Mitades" component={P3R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Tacticas de amor" component={P4R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="No me mates" component={P5R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Millonario sin amor" component={P6R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Troya" component={P1A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="El dia despues de mañana" component={P2A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Batman" component={P3A}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Venganza" component={P4A}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="El ultimo sharknado" component={P5A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Resident Evil" component={P6A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PeliculasScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: width *0.34,
    height: height * 0.3,
  },
  viewtitle:{
    width: width,
    height: height*0.05,
  },
  txttitle:{
    color: '#ffffff',
    fontSize: 30,
    textAlign:'center',
    fontWeight:'bold',
  },
  categrias: {
    width:  width,
    flexDirection:"row"
  },
  containerprincipal:{
    width: width,
    backgroundColor:'#071217'
  },
  viewcategoria:{
    backgroundColor:'#1E2E3C',
    width: width * 1,
    marginBottom:'2%'
  },
  txtcategoria:{
  fontSize:25,
  color:'#ffffff',
  fontWeight:'bold',
  textAlign:'center'
   
  },
  trailers:{
    backgroundColor:'#071217',
    width: width,
    height: height,
  }, 
  txttitleinfo:{
    color:'#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  }, 
  txtsubtitleinfo:{
    color:'#ffffff',
    fontSize: 15,
  }
});

