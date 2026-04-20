import React from 'react';
import {
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

type Props = NativeStackScreenProps<RootStackParamList, 'CustomerHome'>;

export default function CustomerHomeScreen({ navigation }: Props) {
  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Customer Home</Text>
          <Text style={styles.subtitle}>Map-based pickup and drop preview</Text>

          <SectionCard style={styles.mapCard}>
            <View style={styles.gridOverlay} />
            <View style={[styles.pin, styles.pickupPin]} />
            <View style={[styles.pin, styles.dropPin]} />
            <View style={styles.route} />
            <Text style={styles.pinLabel}>Pickup</Text>
            <Text style={styles.dropLabel}>Drop</Text>
          </SectionCard>

          <SectionCard>
            <Text style={styles.sectionTitle}>Smart Match</Text>
            <Text style={styles.sectionText}>
              4 nearby couriers can pick up within 3-5 minutes.
            </Text>
          </SectionCard>

          <ActionButton
            label="Review Booking"
            onPress={() => navigation.navigate('BookingConfirm')}
          />
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
    paddingVertical: 22,
    gap: 14,
  },
  title: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 30,
  },
  subtitle: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    marginBottom: 2,
  },
  mapCard: {
    height: 270,
    overflow: 'hidden',
    backgroundColor: '#1A3257',
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 20,
  },
  pin: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    borderColor: '#fff',
  },
  pickupPin: {
    backgroundColor: colors.accentStrong,
    top: 70,
    left: 56,
  },
  dropPin: {
    backgroundColor: colors.accentWarm,
    right: 58,
    bottom: 62,
  },
  route: {
    position: 'absolute',
    top: 95,
    left: 74,
    width: 160,
    borderTopWidth: 3,
    borderColor: 'rgba(255,255,255,0.8)',
    transform: [{ rotate: '26deg' }],
  },
  pinLabel: {
    position: 'absolute',
    top: 94,
    left: 56,
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
  },
  dropLabel: {
    position: 'absolute',
    bottom: 46,
    right: 54,
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 12,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 20,
    marginBottom: 6,
  },
  sectionText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
});
