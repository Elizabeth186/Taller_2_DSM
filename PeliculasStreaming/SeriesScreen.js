import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, Dimensions, StyleSheet,
  ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import YoutubePlayer from 'react-native-youtube-iframe'

const {width, height} = Dimensions.get('window');
const Stack = createNativeStackNavigator();
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
      <View style={styles.containerprincipal}>
<ScrollView>

  {/* -----------------COMEDIA-------------------------- */}
<View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>Comedia</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
        style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Sin novedad')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/storage/13408/1MC1Hm1pEpXKMlrktFs1yrUZma9qhLDExiUbo67B.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>SIN NOVEDAD</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Emily en paris')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/13274/JsEtbtHsCfxUjgoyYwE1NGWtaXtAqofil8MbSs8T.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>EMILY EN PARIS</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Acapulco')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/11217/sgir7Nx3uxleZQu6Kq0Z0WOZ98SpMQCHRmPW7DSC.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>ACAPULCO</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Entrelazados')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/storage/12274/4TPTQO7daBckItWgX0wMmj67bQUpEyyAGYQ0LYeo.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>ENTRELAZADOS</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Guerra de vecinos')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/8557/rb594zf6bFiwUOtnLhRkW4fUDoogRYb7F0S5I9nI.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>GUERRA DE VECINOS</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Monstruos a la obra')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/8507/xkD3cdtfXvtUiMUiRXY30w2VYVQAqqg6rA88dh5c.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>MONSTRUOS A LA OBRA</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
    </View>
    {/* -----------------AVENTURA-------------------------- */}
<View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>Aventura</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('El juego del calamar')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/storage/10705/R2K7vpx4yec1oRQzQsbkxsjAbi9SUmgdlehOJjd6.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>EL JUEGO DEL CALAMAR</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Game of thrones')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/9859/jAzoSd6mk6ZunAiV1LtunT6OcZrE9f57lmnoB8f6.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>GAME OF THRONES</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 8</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Loki')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/7618/9xtlQ7NGrAIdxaOHs2aATmIgGXG2QiMsFbmKotyH.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>LOKI</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Diabolical')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/15102/bNiLdrStG99PWFor2kH0GZU3T7RVMiWqA6U45TJO.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>DIABOLICAL</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('La fortuna')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/14063/7uAg7lvh8bWpTiE9bUkat4kFzOGdQUV94zmStH7W.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>LA FORTUNA</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Panic')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/7628/khifEZrdduevT8jVkR1fg5n9dDc9KHx4aDZ0yG0J.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>PANIC</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
    </View>
     {/* -----------------FANTASIA-------------------------- */}
<View style={styles.viewcategoria}>
        <Text style={styles.txtcategoria}>Fantasia</Text>
        </View>
    <View style={styles.categrias}>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Estamos muertos')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/14215/MeoF9klbC8fEWyE6NdynBnjZ2ISyyoQ6yq4BkHS0.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>ESTAMOS MUERTOS</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('El descubrimiento de las brujas')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/13684/rmu1XRiNvXuSbBdBEVNI9b00lGqqfPixlAHbKpWS.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>EL DESCUBRIMIENTO DE LAS BRUJAS</Text>
        
        <Text style={styles.txtseriesub}>TEMPORADAS: 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
       style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Archivo 81')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/13875/MwmNRwjeVUKGwJeFjWFl8czbreuJvGXUyQmotdjJ.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>ARCHIVO 81</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.categrias}>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Invasion')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/11519/XXLvN8x3R5axMaBpAl4wEBsyrRVENLk9EsATMnBd.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>INVASION</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('Criado por lobos')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/14490/H7RXAgMDpDNcvyYT1l7FDp7Qm5pOz2i4ETTN3AXm.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>CRIADO POR LOBOS</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnGeneral}
        onPress={() =>
          navigation.navigate('La brea')}>
        <Image style={styles.video} source={{ uri: 'https://ww3.cuevana.pro/resize/200/storage/10932/Gi8aVHKRj4FLpZQ26RaIi4F92cu8lVRU0eLx9WmE.jpg' }}></Image>
        <View>
        <Text style={styles.txtserie}>LA BREA</Text>
        <Text style={styles.txtseriesub}>TEMPORADAS: 1</Text>
        </View>
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
    videoId={'RMNhkI_mgrE'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Dos policías esperando la misión que los convierta en héroes. Dos delincuentes esperando el golpe de su vida. Dos inspectoras esperando pasar a la acción. ¡La comedia nocturna que todos estaban esperando!</Text>
    </View>
  );
};
const P2C = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'bagpW4TbVQY'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Tras aceptar el trabajo de sus sueños en París, Emily Cooper, ejecutiva de marketing de Chicago, estrena una vida de aventuras mientras compagina trabajo, amistad y amor.</Text>
    </View>
    
  );
};
const P3C = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'INhHj6HTvLE'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>El sueño de Máximo Gallardo, de veintitantos años, se hace realidad cuando consigue el trabajo de su vida como chico de cabaña en el complejo turístico más popular de Acapulco. Pronto se da cuenta de que el trabajo es mucho más complicado de lo que imaginaba y, para tener éxito, debe aprender a desenvolverse entre una clientela exigente, un mentor mercurial y una vida familiar complicada, sin perder el rumbo por atajos o tentaciones.</Text>
    </View>
  );
};
const P4C = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'8IjRSNEl-oQ'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Allegra sueña con unirse a la compañía de teatro musical Eleven O'clock, pero su madre, Caterina, se niega a aceptarlo. La vida de Allegra cambia drásticamente cuando encuentra un brazalete mágico que la transporta a 1994, el año en que Caterina tenía su edad y daba comienzo a su carrera en Eleven O'clock mientras vivía a la sombra de Cocó, la abuela de Allegra. ¿Será capaz Allegra de cambiar el pasado?</Text>
      </View>
  );
};
const P5C = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'3wCGThQH70E'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Cuando dos familias antagónicas terminan viviendo al lado en un vecindario elegante, las matriarcas provocan una guerra a gran escala de consecuencias no deseadas.</Text>
      </View>
  );
};
const P6C = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'PszH-rItc5o'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Spin-off de Monstruos S.A que se ambienta justo el día después de que la planta de energía Monstruos S.A. comienza a cosechar las risas de los niños para proporcionar energía a la ciudad de Monstruópolis, ya que la risa genera diez veces más energía que los gritos. La historia sigue a Tylor Tuskmon, un ansioso y joven monstruo que se graduó como el mejor de su promoción en Monstruos University y que siempre ha soñado en convertirse en un Asustador, hasta que consigue un trabajo en Monstruos S.A. y descubre que lo que tiene que hacer es en realidad hacer reír a los niños.</Text>
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
    videoId={'CtrjHEHPC_A'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Cientos de jugadores con problemas de dinero aceptan una invitación rarísima para competir en juegos infantiles. Dentro les esperan un tentador premio y desafíos letales.</Text>
    </View>
  );
};
const P2R = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'JGYizS6kRTE'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por el trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece 'Juego de tronos'.</Text>
    </View>
    
  );
};
const P3R = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'wcvbK_k_MgI'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>En “Loki”, de Marvel Studios, el volátil villano Loki (Tom Hiddleston) retoma su papel como el Dios de las Mentiras en una nueva serie que transcurre después de los eventos de “Avengers: Endgame”. Kate Herron dirige y Michael Waldron es el guionista principal.</Text>
    </View>
  );
};
const P4R = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'7uEC_R5AVdU'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Sumérgete a fondo en el universo de THE BOYS con DIABOLICAL, una serie animada antológica de ocho episodios. Cada uno de ellos exprimidos de algunas de las mentes más desquiciadas, confusas y maníacas que, de alguna forma, aún siguen trabajando en el mundo del entretenimiento.</Text>
      </View>
  );
};
const P5R = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'fpGIUDo9Ico'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Álex Ventura, un joven e inexperto diplomático, se ve convertido sin proponérselo en el líder de una misión que pondrá a prueba todas sus convicciones: recuperar el tesoro submarino robado por Frank Wild, un aventurero que recorre el mundo saqueando el patrimonio común que reposa en las profundidades del mar.</Text>
      </View>
  );
};
const P6R = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'KG2_U65Pj9w'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>En un pueblo perdido como Carp, Texas, Pánico es la única salida. Cada verano los graduados se juegan la vida en una serie de retos donde afrontan sus mayores temores para poder ganar mucho dinero. Tras la muerte de dos jugadores, las apuestas y el peligro están a un nivel muy alto. Este verano hay 23 jugadores. La vida de todos cambiará. Solo habrá un ganador. Que empiece el juego.</Text>
      </View>
  )}
  // INFOPELIS fatasia
const P1A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'Bw8wZ02f-_Q'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Un grupo de estudiantes se da cuenta de que tienen que enfrentarse con las pocas existencias que tienen a una situación de crisis extrema. Estos quedan atrapados en el instituto donde estudian mientras que un virus zombie se propaga por todo el mundo.</Text>
    </View>
  );
};
const P2A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'Aio37yhcMTc'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Diana Bishop, una académica que huye de su condición de bruja, descubre un antiguo manuscrito de alquimia que la lleva a situarse en el centro de un peligroso misterio. En su camino se encontrará también con el genetista Matthew Clairmont, que mantiene en secreto su condición de vampiro.</Text>
    </View>
    
  );
};
const P3A = () => {
  return (
    <View style={styles.trailers}>
    <YoutubePlayer
    height={300}
    play={true}
    videoId={'rVGyshqBy6A'}
    />
    <Text style={styles.txttitleinfo}>Sipnosis</Text>
    <Text style={styles.txtsubtitleinfo}>Mientras restaura unas cintas de vídeo dañadas, un archivista se ve envuelto en una misteriosa trama relacionada con la directora desaparecida y una secta demoniaca.</Text>
    </View>
  );
};
const P4A = () => {
  return (
      <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'xnUiu7N1rvg'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>La llegada de una especie alienígena a la Tierra pone en peligro a toda la humanidad. Sigue los acontecimientos a través de la perspectiva de cinco personas que, desde diferentes lugares del mundo, se esfuerzan por dar sentido al caos que las rodea.</Text>
      </View>
  );
};
const P5A = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'cWM9lvSF9Vg'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>"Criado por lobos" sigue la historia de Padre y Madre, dos robots que tienen como misión criar hijos humanos en un desconocido planeta. Todo es como lo establecido hasta que la población de humanos comienza a aumentar y, la religión crea diferencias entre sus miembros. Llegado este momento, los androides se dan cuenta que es difícil controlar las creencias de una forma racional.</Text>
      </View>
  );
};
const P6A = () => {
  return (
    <View style={styles.trailers}>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={'rNfFn6v9bhk'}
      />
      <Text style={styles.txttitleinfo}>Sipnosis</Text>
      <Text style={styles.txtsubtitleinfo}>Un agujero gigantesco, de origen inexplicable, destruye Los Ángeles y separa a una familia en dos mundos distintos: la madre y el hijo quedan atrapados en una tierra salvaje, mientras que, en la superficie, el padre y la hija intentan rescatarlos.</Text>
      </View>
  )}

const SeriesScreen = () => {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Sin novedad" component={P1C}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Emily en paris" component={P2C}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Acapulco" component={P3C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Entrelazados" component={P4C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Guerra de vecinos" component={P5C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Monstruos a la obra" component={P6C} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="El juego del calamar" component={P1R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Game of thrones" component={P2R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Loki" component={P3R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Diabolical" component={P4R} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="La fortuna" component={P5R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Panic" component={P6R}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Estamos muertos" component={P1A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="El descubrimiento de las brujas" component={P2A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="Archivo 81" component={P3A}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Invasion" component={P4A}
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}} />
        <Stack.Screen name="Criado por lobos" component={P5A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
        <Stack.Screen name="La brea" component={P6A} 
         options={{headerStyle: {backgroundColor: '#1E2E3C'},
         headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold'}}}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
export default SeriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: width *0.28,
    height: height * 0.2,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  categrias: {
    width:  width,
  },
  containerprincipal:{
    width: width,
    backgroundColor:'#071217',
    
  },
  viewcategoria:{
    backgroundColor:'#1E2E3C',
    width: width * 1,
    height: height*0.05,
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
  },
  txtserie:{
   color:'#ffffff',
   fontWeight:'bold',
   textAlign:'center',
   width:width*0.7,
marginTop: '10%',
fontSize:25
  },
  txtseriesub:{
    color:'#ffffff',
    fontWeight:'bold',
    textAlign:'center',
    width:width*0.7,
 marginTop: '3%',
 fontSize:15
   },
  btnGeneral:{
    width: width,
    backgroundColor:'black',
    flexDirection:'row',
   borderTopColor:'#24365A',
    borderWidth:2,
    marginBottom:1
  }
});

