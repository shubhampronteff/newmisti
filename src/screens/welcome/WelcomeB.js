/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

// import components
import ContainedButton from '../../components/buttons/ContainedButton';
import GradientContainer from '../../components/gradientcontainer/GradientContainer';
import LinkButton from '../../components/buttons/LinkButton';
import Logo from '../../components/logo/Logo';
import OutlinedButton from '../../components/buttons/OutlinedButton';

// import colors
import Colors from '../../theme/colors';

// WelcomeB Config

// WelcomeB Styles

const wd = Dimensions.get('window').width;
const ht = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFCE00',
  },
  logoContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsGroup: {
    flex: 3,
    paddingHorizontal: 32,
    width: '100%',
  },
  vspace16: {
    height: 16,
  },
  vspace32: {
    height: 32,
  },
  linkButtonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});

// WelcomeB Screen
export default class WelcomeB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateTo = (screen) => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <GradientContainer>
        <StatusBar
          // backgroundColor={Colors.primaryColor}
          backgroundColor="#FFCE00"
          barStyle="light-content"
        />
        <SafeAreaView style={styles.screenContainer}>
          <View style={styles.logoContainer}>
            <View
              style={{
                width: wd * 0.3,
                height: wd * 0.3,
                backgroundColor: '#FFCE00',
                borderRadius: (wd * 0.5) / 2,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 10,
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  width: wd * 0.55,
                  height: wd * 0.3,
                  // backgroundColor: 'pink',
                }}
                source={require('../../../assets/splash.png')}
                tintColor="#fff"
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.buttonsGroup}>
            <ContainedButton
              onPress={this.navigateTo('SignUp')}
              color={Colors.white}
              title={'I am new'.toUpperCase()}
              // titleColor={Colors.primaryColor}
              titleColor="#FFCE00"
            />

            <View style={styles.vspace16} />

            <OutlinedButton
              onPress={this.navigateTo('SignIn')}
              title={'I have been here'.toUpperCase()}
              titleColor={Colors.white}
              rippleColor={'rgba(255, 255, 255, 0.32)'}
            />

            <View style={styles.vspace32} />

            <LinkButton
              title="Skip"
              onPress={this.navigateTo('HomeNavigator')}
              titleStyle={styles.linkButtonText}
            />
          </View>
        </SafeAreaView>
      </GradientContainer>
    );
  }
}
