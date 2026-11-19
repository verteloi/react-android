import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Chanson() {
  const nom = "dog";
  return (
    <View>
      <Text style={[style.texte, style.conteneur]}>{nom}</Text>
    </View>
  );
}

// export default function Playlist()
// {
//   return(
//     <SafeAreaView>
//       <Chanson/>
//       <Chanson/>
//       <Chanson/>
//       <Chanson/>
//     </SafeAreaView>
//   )
// }

// export default function Playlist()
// {
//   const tab = []
//   for (let i = 0; i < 4; i++){
//     tab[i] = <Chanson key={i}/>;
//   }
//   return(
//     <SafeAreaView>
//       {tab}
//     </SafeAreaView>
//   );
// }

export default function Playlist(){
  const tab = []
  for (let i=0 ; i<2; i++){
    tab[i] = <View style={style.ligne}><Chanson/> <Chanson/></View>
  }
  return(
    <SafeAreaView style={style.padding}>
      {tab}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  texte : {
    fontSize: 20,
    fontStyle: 'italic'
  },
  conteneur : {
    backgroundColor: "#ee33d1",
    margin: 2,
    borderRadius: 7,
  },
  ligne: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  padding:{
    padding: 6
  }

})