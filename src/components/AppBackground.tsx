import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

type AppBackgroundProps = {
  children: React.ReactNode;
};

export default function AppBackground({ children }: AppBackgroundProps) {
  return (
    <View style={styles.root}>
      <View style={[styles.glow, styles.glowTop]} />
      <View style={[styles.glow, styles.glowBottom]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgDeep,
  },
  glow: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 180,
    opacity: 0.25,
  },
  glowTop: {
    top: -120,
    right: -80,
    backgroundColor: colors.accent,
  },
  glowBottom: {
    bottom: -140,
    left: -80,
    backgroundColor: colors.accentStrong,
  },
});
