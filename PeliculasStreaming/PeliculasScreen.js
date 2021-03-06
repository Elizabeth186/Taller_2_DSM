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
          navigation.navigate('Son como ni??os')}>
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
          navigation.navigate('El dia despues de ma??ana')}>
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
    <Text style={styles.txtsubtitleinfo}>Un padre est?? muy ocupado con sus doce hijos y la administraci??n del negocio familiar</Text>
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
    <Text style={styles.txtsubtitleinfo}>Despu??s de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de aut??ntico h??roe, pero Robotnik regresa con nuevo compa??ero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.</Text>
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
    <Text style={styles.txtsubtitleinfo}>Cuando Shrek y la princesa Fiona regresan de su luna de miel, los padres de ella los invitan a visitar el reino de Muy Muy Lejano para celebrar la boda. Para Shrek, al que nunca abandona su fiel amigo Asno, esto constituye un gran problema. Los padres de Fiona, por su parte, no esperaban que su yerno tuviera un aspecto semejante y, mucho menos, que su hija hubiera cambiado tanto. Todo esto trastoca los planes del rey respecto al futuro del reino. Pero entonces entran en escena la maquiav??lica Hada Madrina, su arrogante hijo el Pr??ncipe Encantador y un minino muy especial: el Gato con Botas, experto cazador de ogros.</Text>
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
      <Text style={styles.txtsubtitleinfo}>Mei Lee, una ni??a de 13 a??os un poco rara pero segura de s?? misma, se debate entre ser la hija obediente que su madre quiere que sea y el caos propio de la adolescencia. Ming, su protectora y ligeramente exigente madre, no se separa nunca de ella lo que es una situaci??n poco deseable para una adolescente. Y por si los cambios en su vida y en su cuerpo no fueran suficientes, cada vez que se emociona demasiado (lo que le ocurre pr??cticamente todo el tiempo), se convierte en un panda rojo gigante.</Text>
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
      <Text style={styles.txtsubtitleinfo}>Mr. Popper vive en una tranquila y peque??a ciudad americana llamada Stillwater. All?? nunca pasa nada. Quiz?? por eso se ha convertido en un so??ador y en un especialista en temas del ??rtico y de la Ant??rtida, incluso podr??a decir el nombre de todos sus exploradores y qu?? fueron a hacer a los polos. Un d??a conversa, gracias a un programa de radio, con el almirante Drake sobre su expedici??n a la Ant??rtida, y ??ste le dice que pronto recibir?? una sorpresa??? Lo que nadie pod??a suponer es que el almirante iba a enviar una caja con ??un ping??ino de la mism??sima Ant??rtida! La vida de nuestro protagonista cambiar?? radicalmente, y la aburrida vida en Stillwater se transformar?? en una fant??stica y permanente aventura llena de ping??inos.</Text>
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
      <Text style={styles.txttitleinfo}>Son Como Ni??os 2</Text>
      <Text style={styles.txtsubtitleinfo}>Lenny se ha trasladado con su familia a la peque??a ciudad donde tanto ??l como sus amigos se criaron. En esta ocasi??n, los adultos ser??n quienes reciban toda una lecci??n de sus propios hijos. Secuela de "Ni??os grandes".</Text>
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
    <Text style={styles.txtsubtitleinfo}>Un marido adinerado, que permite que su esposa tenga relaciones extramatrimoniales para evitar el divorcio, se convierte en el principal sospechoso de la desaparici??n de los amantes de ella... Adaptaci??n de la novela de Patricia Highsmith.</Text>
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
    <Text style={styles.txtsubtitleinfo}>Salvador Campod??nico es un joven y exitoso empresario espa??ol cuya familia es due??a de la corporaci??n hotelera m??s importante de toda Espa??a. Para la construcci??n de su primer proyecto internacional eligen aterrizar en Cusco. Es en este m??stico y m??gico lugar donde Salvador conoce a Ariana, una aventurera mochilera que vive una vida completamente opuesta a la suya, libre de ataduras.</Text>
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
    <Text style={styles.txtsubtitleinfo}>Que para cada persona haya un alma gemela es una teor??a muy rom??ntica pero quiz??s poco cient??fica, y para Luca y Sara la tentaci??n de probarla es fuerte. Pero sobre todo, ??c??mo se hace esta alma gemela? ??Se parece a nosotros o es nuestro contrario? Es as?? como, casi como un desaf??o, los dos invitan a cenar a cuatro amigos que, casualmente, est??n solteros: Chiara, Matteo, Giulia y Dario. ??Qui??n se enamorar?? de qui??n?</Text>
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
      <Text style={styles.txttitleinfo}>T??cticas en el amor</Text>
      <Text style={styles.txtsubtitleinfo}>Un publicista y una dise??adora de moda/bloguera no creen en el amor, as?? que apuestan que conseguir??n conquistar al otro... por medio de t??cticas poco convencionales.</Text>
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
      <Text style={styles.txtsubtitleinfo}>Mirta, una adolescente de 19 a??os, muere de sobredosis junto a Robin, su novio. Entonces, resucita sola y se da cuenta de que para seguir viviendo necesita devorar a otras personas.</Text>
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
      <Text style={styles.txtsubtitleinfo}>Un exitoso ejecutivo de televisi??n cambia su identidad y se traslada a un barrio pobre en busca de una verdadera conexi??n humana. All?? se enamora de una aspirante a actriz que intenta iniciar su carrera en el canal que dirige.</Text>
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
    <Text style={styles.txtsubtitleinfo}>A lo largo de los tiempos, los hombres han hecho la guerra. Unos por poder, otros por gloria o por honor, y algunos por amor. En la antigua Grecia, la pasi??n de dos de los amantes m??s legendarios de la historia, Paris, pr??ncipe de Troya (Orlando Bloom) y Helena (Diane Kruger), reina de Esparta, desencadena una guerra que asolar?? una civilizaci??n. El rapto de Helena por Paris, separ??ndola de su esposo, el rey Menelao (Bren-dan Gleeson), es un insulto que El orgullo familiar establece que una afrenta a Menelao es una afrenta a su hermano Agamen??n (Brian Cox), el poderoso rey de Micenas, que no tarda en reunir a todas las grandes tribus de Grecia para recuperar a Helena de manos de los troyanos y defender el honor de su hermano. La verdad es que la lucha por el honor por parte de Agamen??n est?? corrompida por su incontenible codicia ya que necesita conquistar Troya para asumir el control del mar Egeo.</Text>
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
    <Text style={styles.txttitleinfo}>El d??a despu??s de ma??ana</Text>
    <Text style={styles.txtsubtitleinfo}>Las investigaciones del climat??logo Jack Hall indican que el calentamiento global podr??a desencadenar un repentino y catastr??fico cambio clim??tico de la Tierra. Hall advierte a los dirigentes pol??ticos de la necesidad de adoptar inmediatamente medidas para evitarlo, pero sus advertencias llegan demasiado tarde: una serie de an??malos fen??menos clim??ticos empiezan a producirse en distintas partes del globo. El calentamiento global ha puesto el planeta al borde de una nueva era glacial. Mientras Jack advierte a la Casa Blanca del inminente cambio clim??tico, su hijo Sam y sus amigos se encuentran atrapados en Nueva York, a donde han ido para participar en un concurso acad??mico entre institutos.</Text>
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
    <Text style={styles.txtsubtitleinfo}>Cuando un asesino se dirige a la ??lite de Gotham con una serie de maquinaciones s??dicas, un rastro de pistas cr??pticas env??a Batman a una investigaci??n en los bajos fondos. A medida que las pruebas comienzan a acercarse a su casa y se hace evidente la magnitud de los planes del autor, Batman debe forjar nuevas relaciones, desenmascarar al culpable y hacer justicia al abuso de poder y la corrupci??n que durante mucho tiempo han asolado Gotham City.</Text>
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
      <Text style={styles.txtsubtitleinfo}>De excursi??n, las Fuerzas Especiales Brenner Baker se topa con el recinto de un Cartel. Su marido fue asesinado y ella se dio por muerta. El Cartel cometi?? dos errores, mat?? a su esposo y la dej?? con vida. No vivir??n para hacer otro.</Text>
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
      <Text style={styles.txttitleinfo}>El ??ltimo Sharknado: Ya era hora</Text>
      <Text style={styles.txtsubtitleinfo}>Todo est?? perdido, ??o no? Fin desbloquea el poder de viajar en el tiempo a trav??s de los SHARKNADOS para salvar el mundo y resucitar a su familia. En su b??squeda, Fin lucha contra nazis, dinosaurios, caballeros e incluso da un paseo en el Arca de No??. Esta vez, no se tratar?? de c??mo detener a los sharknados, sino cu??ndo.</Text>
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
      <Text style={styles.txtsubtitleinfo}>Nueva adaptaci??n al cine de los videojuegos de Capcom. La que fue una pujante ciudad sede del gigante farmac??utico Umbrella Corporation, Raccoon City, es ahora un pueblo agonizante del Medio Oeste. El ??xodo de la compa????a dej?? a la ciudad convertida en un erial??? con un gran mal gest??ndose bajo la superficie. Cuando ese mal se desata, un grupo de supervivientes deben unirse para destapar la verdad detr??s de Umbrella y sobrevivir a la noche.</Text>
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
        <Stack.Screen name="Son como ni??os" component={P6C} 
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
        <Stack.Screen name="El dia despues de ma??ana" component={P2A} 
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

