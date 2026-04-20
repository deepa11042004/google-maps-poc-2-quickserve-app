import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppBackground from '../../components/AppBackground';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 650,
        useNativeDriver: true,
      }),
      Animated.timing(rise, {
        toValue: 0,
        duration: 650,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('RoleSelect');
    }, 1500);

    return () => clearTimeout(timer);
  }, [fade, navigation, rise]);

  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[
            styles.content,
            { opacity: fade, transform: [{ translateY: rise }] },
          ]}
        >
          <View style={styles.logoOrb}>
            <Text style={styles.logoText}>Q</Text>
          </View>
          <Text style={styles.title}>QuickServe</Text>
          <Text style={styles.subtitle}>Fast deliveries. Premium experience.</Text>
        </Animated.View>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logoOrb: {
    width: 94,
    height: 94,
    borderRadius: 47,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardStrong,
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoText: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 44,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 36,
    letterSpacing: 0.4,
  },
  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
  },
});
