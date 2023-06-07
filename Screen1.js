import React, { useEffect } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/award_bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.stageContainer}>
          <Image
            source={require('./assets/girlClap.png')}
            style={styles.girlImage}
            resizeMode="contain"
          />
          <Image
            source={require('./assets/awardPlatform.png')}
            style={styles.stageImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.titleContainer}>
          <Image
            source={require('./assets/castingLogo.png')}
            style={styles.anotherImage}
            resizeMode="contain"
          />
          <Text style={styles.titleText}>The Results R In!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  stageContainer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    marginBottom: -100,
  },
  stageImage: {
    width: 360,
    height: 300,
  },
  girlImage: {
    width: 200,
    height: 250,
    position: 'absolute',
    bottom: 168, // Adjust the value based on your requirements
    zIndex: 1, // To place the girl image above the stage
  },
  titleContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f1ee8e',
    marginTop: 0,
    bottom:-100,
    
  },
  anotherImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
    marginTop:0,
  },
});

export default Screen1;
