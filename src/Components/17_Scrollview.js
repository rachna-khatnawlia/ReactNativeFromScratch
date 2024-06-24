//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

// create a component
const Scrollview = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              source={{
                uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
              }}
              style={styles.img_bg}>
              <Image
                source={require('../Assets/Images/img.jpg')}
                style={styles.profileIcon}
              />
              <Text style={{color: '#FFF', fontSize: 18}}>Rachna</Text>
            </ImageBackground>
            <ImageBackground
              source={{
                uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
              }}
              style={styles.img_bg}>
              <Image
                source={require('../Assets/Images/img.jpg')}
                style={styles.profileIcon}
              />
              <Text style={{color: '#FFF', fontSize: 18}}>Rachna</Text>
            </ImageBackground>
            <ImageBackground
              source={{
                uri: 'https://images.pexels.com/photos/10269534/pexels-photo-10269534.jpeg',
              }}
              style={styles.img_bg}>
              <Image
                source={require('../Assets/Images/img.jpg')}
                style={styles.profileIcon}
              />
              <Text style={{color: '#FFF', fontSize: 18}}>Rachna</Text>
            </ImageBackground>
          </View>
        </ScrollView>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/20888052/pexels-photo-20888052/free-photo-of-sunset-in-zurich.jpeg',
          }}
          style={styles.contentImg}
        />
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/22941112/pexels-photo-22941112/free-photo-of-peaceful-sunset-by-the-sea.jpeg',
          }}
          style={styles.contentImg}
        />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 1,
    backgroundColor: '#FFFFFF',
  },
  img_bg: {
    height: 220,
    width: 140,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 12,
    justifyContent: 'space-between',
    marginRight: 10,
  },
  profileIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: 'blue',
  },
  contentImg: {
    height: 300,
    width: '100%',
    marginTop: 20,
    borderRadius: 8,
  },
});

//make this component available to the app
export default Scrollview;
