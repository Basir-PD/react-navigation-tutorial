import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';
import Svg, {Path} from 'react-native-svg';

const CustomTabBarButton = props => {
  const {route, children, accessibilityState, onPress} = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopLeftRadius: route === 'home' ? 10 : 0,
              },
            ]}
          />
          <Svg width={71} height={58} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View
            style={[
              styles.svgGapFiller,
              {
                borderTopRightRadius: route === 'settings' ? 10 : 0,
              },
            ]}
          />
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[styles.activeBtn]}>
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.inactiveBtn,
          {
            borderTopLeftRadius: route === 'home' ? 10 : 0,
            borderTopRightRadius: route === 'settings' ? 10 : 0,
          },
        ]}>
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  activeBtn: {
    flex: 1,
    position: 'absolute',
    top: -22,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  inactiveBtn: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgGapFiller: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
