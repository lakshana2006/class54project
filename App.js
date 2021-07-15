import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Audio } from 'expo-av';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class SoundButton extends React.Component{
  return (
    <View style{{width:200 , height:100 , marginTop:80}}>
    <Button>
    title = "Sound1"
    color = "red"
    onPress={()=>Alert.alert('playSound 1')}/>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </Button>
    </View>
  );
}

class SoundButton extends React.Component{
  return (
    <View style{{width:200 , height:100 , marginTop:80}}>
    <Button>
    title = "Sound1"
    color = "blue"
    onPress={()=>Alert.alert('playSound 1')}/>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </Button>
    </View>
  );
}

class SoundButton extends React.Component{
  return (
    <View style{{width:200 , height:100 , marginTop:70}}>
    <Button>
    title = "Sound1"
    color = "green"
    onPress={()=>Alert.alert('playSound 1')}/>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </Button>
    </View>
  );
}

class SoundButton extends React.Component{
  return (
    <View style{{width:200 , height:100 , marginTop:50}}>
    <Button>
    title = "Sound1"
    color = "purple"
    onPress={()=>Alert.alert('playSound 1')}/>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </Button>
    </View>
  );
}

class SoundButton extends React.Component{
  return (
    <View style{{width:200 , height:100 , marginTop:40}}>
    <Button>
    title = "Sound1"
    color = "black"
    onPress={()=>Alert.alert('playSound 1')}/>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
