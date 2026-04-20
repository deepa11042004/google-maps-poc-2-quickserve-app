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
import { driverStats } from '../../data/mockData';
import { currency } from '../../utils/format';

type Props = NativeStackScreenProps<RootStackParamList, 'DriverDashboard'>;

export default function DriverDashboardScreen({ navigation }: Props) {
  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Driver Dashboard</Text>
          <Text style={styles.subtitle}>Your daily performance at a glance</Text>

          <View style={styles.statRow}>
            <SectionCard style={styles.statCard}>
              <Text style={styles.statLabel}>Deliveries</Text>
              <Text style={styles.statValue}>{driverStats.todayDeliveries}</Text>
            </SectionCard>
            <SectionCard style={styles.statCard}>
              <Text style={styles.statLabel}>Earnings</Text>
              <Text style={styles.statValue}>{currency(driverStats.earnings)}</Text>
            </SectionCard>
          </View>

          <SectionCard>
            <Text style={styles.cardTitle}>Rating</Text>
            <Text style={styles.statValue}>{driverStats.rating.toFixed(1)} / 5.0</Text>
            <Text style={styles.cardText}>Top 7% performer in your zone today</Text>
          </SectionCard>

          <SectionCard>
            <Text style={styles.cardTitle}>Next Delivery</Text>
            <Text style={styles.cardText}>Pickup: Central Avenue</Text>
            <Text style={styles.cardText}>Drop-off: Lake View Towers</Text>
            <Text style={styles.badge}>Starts in 4 min</Text>
          </SectionCard>

          <ActionButton
            label="Go To Active Delivery"
            onPress={() => navigation.navigate('ActiveDelivery')}
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
  statRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
  },
  statLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
  },
  statValue: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 24,
    marginTop: 6,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 19,
    marginBottom: 8,
  },
  cardText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  badge: {
    marginTop: 12,
    alignSelf: 'flex-start',
    color: colors.textPrimary,
    backgroundColor: 'rgba(255,158,68,0.22)',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 12,
    fontFamily: typography.body,
    fontSize: 12,
  },
});
