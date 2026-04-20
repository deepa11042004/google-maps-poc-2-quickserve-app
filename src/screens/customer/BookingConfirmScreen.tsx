import React, { useEffect, useState } from 'react';
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
import { getBookingDraft } from '../../services/mockService';
import { currency, kilometers } from '../../utils/format';

type Props = NativeStackScreenProps<RootStackParamList, 'BookingConfirm'>;

type BookingDraft = {
  pickup: string;
  dropoff: string;
  etaMinutes: number;
  distanceKm: number;
  fee: number;
  courierName: string;
  courierVehicle: string;
};

export default function BookingConfirmScreen({ navigation }: Props) {
  const [booking, setBooking] = useState<BookingDraft | null>(null);

  useEffect(() => {
    let mounted = true;

    getBookingDraft().then(data => {
      if (mounted) {
        setBooking(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Booking Confirm</Text>
          <Text style={styles.subtitle}>Review your request before dispatch</Text>

          <SectionCard>
            <Text style={styles.cardTitle}>Delivery Route</Text>
            <Text style={styles.itemLabel}>Pickup</Text>
            <Text style={styles.itemValue}>{booking?.pickup ?? 'Loading...'}</Text>
            <Text style={styles.itemLabel}>Drop-off</Text>
            <Text style={styles.itemValue}>{booking?.dropoff ?? 'Loading...'}</Text>
            <View style={styles.rowBetween}>
              <Text style={styles.badge}>{booking?.etaMinutes ?? 0} min ETA</Text>
              <Text style={styles.badge}>{kilometers(booking?.distanceKm ?? 0)}</Text>
            </View>
          </SectionCard>

          <SectionCard>
            <Text style={styles.cardTitle}>Courier Preview</Text>
            <Text style={styles.itemValue}>{booking?.courierName ?? 'Loading...'}</Text>
            <Text style={styles.itemLabel}>{booking?.courierVehicle ?? '...'}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>{currency(booking?.fee ?? 0)}</Text>
            </View>
          </SectionCard>

          <ActionButton
            label="Confirm and Track Live"
            onPress={() => navigation.replace('LiveTracking')}
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
  cardTitle: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 19,
    marginBottom: 10,
  },
  itemLabel: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
    marginTop: 8,
  },
  itemValue: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
    marginTop: 3,
  },
  rowBetween: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    color: colors.textPrimary,
    backgroundColor: 'rgba(0,194,168,0.2)',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontFamily: typography.body,
    fontSize: 12,
  },
  priceRow: {
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  totalText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
  },
  totalAmount: {
    color: colors.textPrimary,
    fontFamily: typography.heading,
    fontSize: 28,
  },
});
