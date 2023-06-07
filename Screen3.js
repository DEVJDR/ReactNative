import React, { useEffect, useRef, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen3 = () => {
  const navigation = useNavigation();
  const [animatedCount, setAnimatedCount] = useState(15000);
  const countAnimation = useRef(new Animated.Value(animatedCount)).current;

  useEffect(() => {
    const countToValue = 40000;

    Animated.timing(countAnimation, {
      toValue: countToValue,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    countAnimation.addListener(({ value }) => {
      setAnimatedCount(Math.floor(value));
    });

    return () => countAnimation.removeAllListeners();
  }, [countAnimation]);

  const handleArrowPress = () => {
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/award_bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>4 Friends Gave U Some Love</Text>
        </View>
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
          <View style={styles.commentContainer}>
            <Image
              source={require('./assets/comment.jpg')}
              style={styles.commentImage}
              resizeMode="contain"
            />
            <Text style={styles.commentText}>Congrats!</Text>
          </View>
        </View>
        <Animated.View style={styles.overlayContainer}>
          <ImageBackground
            source={require('./assets/main-heart.png')}
            style={styles.overlayImage}
            resizeMode="contain"
          >
            <Text style={styles.overlayText}>{animatedCount}</Text>
          </ImageBackground>
        </Animated.View>
        <TouchableOpacity style={styles.arrowContainer} onPress={handleArrowPress}>
          <Image source={require('./assets/arrow.png')} style={styles.arrowImage} resizeMode="contain" />
        </TouchableOpacity>
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
  headingContainer: {
    position: 'absolute',
    top: 90,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f1ee8e',
    textAlign: 'center',
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
  arrowContainer: {
    position: 'absolute',
    bottom: 170,
    right: 40,
  },
  arrowImage: {
    width: 46,
    height: 50,
  },
  commentContainer: {
    position: 'absolute',
    top: -155,
    right: 20,
    alignItems: 'center',
    flexDirection: 'row', // Added flexDirection
  },
  commentImage: {
    width: 180,
    height: 80,
  },
  commentText: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e5a0c6',
    bottom: 30,
    right:58,
    top:15, // Adjusted positioning
  },
});

export default Screen3;
