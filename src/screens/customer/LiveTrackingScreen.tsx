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
import { liveStops } from '../../data/mockData';

type Props = NativeStackScreenProps<RootStackParamList, 'LiveTracking'>;

export default function LiveTrackingScreen({ navigation }: Props) {
  return (
    <AppBackground>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Live Tracking</Text>
          <Text style={styles.subtitle}>Courier is moving toward your destination</Text>

          <SectionCard>
            <Text style={styles.cardTitle}>Delivery Progress</Text>
            {liveStops.map((stop, index) => (
              <View key={stop.label} style={styles.timelineRow}>
                <View
                  style={[
                    styles.dot,
                    stop.done ? styles.doneDot : styles.pendingDot,
                  ]}
                />
                <View style={styles.timelineTextWrap}>
                  <Text style={styles.stopLabel}>{stop.label}</Text>
                  <Text style={styles.stopTime}>{stop.time}</Text>
                </View>
                {index !== liveStops.length - 1 && <View style={styles.connector} />}
              </View>
            ))}
          </SectionCard>

          <SectionCard>
            <Text style={styles.cardTitle}>Courier Contact</Text>
            <Text style={styles.stopLabel}>Alex Morgan</Text>
            <Text style={styles.stopTime}>Blue Scooter • KA-09-TR-2211</Text>
            <View style={styles.actionRow}>
              <ActionButton label="Call" variant="secondary" onPress={() => {}} style={styles.half} />
              <ActionButton label="Chat" variant="secondary" onPress={() => {}} style={styles.half} />
            </View>
          </SectionCard>

          <ActionButton
            label="Back To Roles"
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
    marginBottom: 10,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  doneDot: {
    backgroundColor: colors.success,
  },
  pendingDot: {
    backgroundColor: colors.accentWarm,
  },
  connector: {
    position: 'absolute',
    left: 5,
    top: 14,
    width: 2,
    height: 20,
    backgroundColor: colors.border,
  },
  timelineTextWrap: {
    flex: 1,
  },
  stopLabel: {
    color: colors.textPrimary,
    fontFamily: typography.body,
    fontSize: 15,
  },
  stopTime: {
    color: colors.textSecondary,
    fontFamily: typography.body,
    fontSize: 13,
    marginTop: 3,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  half: {
    flex: 1,
  },
});
