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

type Props = NativeStackScreenProps<RootStackParamList, 'ActiveDelivery'>;

const checks = [
  'Package picked and verified',
  'Customer notified of ETA',
  'Drop-off location confirmed',
];

export default function ActiveDeliveryScreen({ navigation }: Props) {
  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Active Delivery</Text>
          <Text style={styles.subtitle}>Order #QS-22081 in progress</Text>

          <SectionCard>
            <Text style={styles.cardTitle}>Route Details</Text>
            <Text style={styles.cardText}>Pickup: Central Avenue, Downtown</Text>
            <Text style={styles.cardText}>Drop-off: Sunset Towers, Lake View</Text>
            <Text style={styles.cardText}>Remaining: 3.1 km • 11 mins</Text>
          </SectionCard>

          <SectionCard>
            <Text style={styles.cardTitle}>Delivery Checklist</Text>
            {checks.map(item => (
              <View key={item} style={styles.checkItem}>
                <View style={styles.checkDot} />
                <Text style={styles.cardText}>{item}</Text>
              </View>
            ))}
          </SectionCard>

          <ActionButton
            label="Mark As Completed"
            onPress={() => navigation.replace('DriverDashboard')}
          />
          <ActionButton
            label="Back To Role Selection"
            variant="secondary"
            onPress={() => navigation.popToTop()}
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
    marginBottom: 8,
  },
  cardText: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.success,
    marginRight: 9,
  },
});
