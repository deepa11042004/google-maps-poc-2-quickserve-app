import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppBackground from '../../components/AppBackground';
import SectionCard from '../../components/SectionCard';
import ActionButton from '../../components/ActionButton';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

export default function RoleSelectScreen({ navigation }: Props) {
  const cardA = useRef(new Animated.Value(0)).current;
  const cardB = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(140, [
      Animated.timing(cardA, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
      Animated.timing(cardB, {
        toValue: 1,
        duration: 420,
        useNativeDriver: true,
      }),
    ]).start();
  }, [cardA, cardB]);

  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Choose Experience</Text>
          <Text style={styles.subtitle}>
            Select your client mode to continue with an elegant, focused flow.
          </Text>

          <Animated.View
            style={[
              styles.animatedCard,
              {
                opacity: cardA,
                transform: [
                  {
                    translateY: cardA.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <SectionCard>
              <Text style={styles.cardTitle}>Customer</Text>
              <Text style={styles.cardDescription}>
                Book pickups in seconds, track live courier movement, and get fast
                delivery confidence.
              </Text>
              <View style={styles.metricRow}>
                <Text style={styles.metric}>2 min booking</Text>
                <Text style={styles.metric}>99.2% on-time</Text>
              </View>
              <ActionButton
                label="Continue as Customer"
                onPress={() => navigation.navigate('CustomerHome')}
              />
            </SectionCard>
          </Animated.View>

          <Animated.View
            style={[
              styles.animatedCard,
              {
                opacity: cardB,
                transform: [
                  {
                    translateY: cardB.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <SectionCard>
              <Text style={styles.cardTitle}>Driver</Text>
              <Text style={styles.cardDescription}>
                Manage daily tasks, maximize earnings, and keep deliveries smooth
                with active order controls.
              </Text>
              <View style={styles.metricRow}>
                <Text style={styles.metric}>High demand</Text>
                <Text style={styles.metric}>Instant payouts</Text>
              </View>
              <ActionButton
                label="Continue as Driver"
                variant="secondary"
                onPress={() => navigation.navigate('DriverDashboard')}
              />
            </SectionCard>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 16,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 32,
  },
  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
  },
  animatedCard: {
    width: '100%',
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 24,
    marginBottom: 8,
  },
  cardDescription: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  metricRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  metric: {
    color: colors.textPrimary,
    backgroundColor: 'rgba(31,162,255,0.22)',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    fontFamily: typography.body,
    fontSize: 12,
  },
});
