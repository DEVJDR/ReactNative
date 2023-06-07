import React, { useEffect, useRef, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const userProfileAnimation = useRef(new Animated.Value(0)).current;
  const [isUserContainerVisible, setUserContainerVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen3');
    }, 20000); // Timeout set to 20 seconds (20000 milliseconds)

    return () => clearTimeout(timeout);
  }, [navigation]);

  const userProfileTranslateX = userProfileAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });
  
  const handleArrowPress = () => {
    Animated.timing(userProfileAnimation, {
      toValue: isUserContainerVisible ? 0 : 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setUserContainerVisible(!isUserContainerVisible);
    });
  };
  
  
  useEffect(() => {
    Animated.timing(userProfileAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setUserContainerVisible(true);
    });
  }, []);

  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('./assets/award_bg.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Text style={styles.title}>Gave U Some Love</Text>
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
        <Animated.View
          style={[
            styles.userContainer,
            { transform: [{ translateX: userProfileTranslateX }] },
          ]}
        >
          <Image
            source={require('./assets/avtar2.png')}
            style={styles.userImage}
            resizeMode="contain"
          />
          <View style={styles.userInfo}>
            <Text style={styles.titleText}>D-Lister</Text>
            <Text style={styles.subtitleText}>Solly</Text>
          </View>
        </Animated.View>
        <TouchableOpacity style={styles.arrowContainer} onPress={handleArrowPress}>
          <Image source={require('./assets/arrow.png')} style={styles.arrowImage} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.overlayContainer}>
          <ImageBackground
            source={require('./assets/main-heart.png')}
            style={styles.overlayImage}
            resizeMode="contain"
          >
            <Text style={styles.overlayText}>15000</Text>
          </ImageBackground>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f1ee8e',
    marginBottom: 20,
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
    bottom: 168,
    zIndex: 1,
  },
  userContainer: {
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: 'lightyellow',
    borderWidth: 2,
    borderColor: '#f1ee8e',
  },
  userInfo: {
    marginLeft: 10,
  },
  titleText: {
    fontSize: 40,
    right: -20,
    fontWeight: 'bold',
    color: '#f1ee8e',
  },
  subtitleText: {
    fontSize: 19,
    right: -20,
    color: '#ffff',
    textAlign: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 170,
    right: 40,
  },
  arrowImage: {
    width: 46,
    height: 50,
  },
  overlayContainer: {
    position: 'absolute',
    top: 200,
    width: '100%',
    alignItems: 'center',
  },
  overlayImage: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f1ee8e',
  },
});

export default Screen2;
