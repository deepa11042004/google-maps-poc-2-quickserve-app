import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/common/SplashScreen';
import RoleSelectScreen from '../screens/common/RoleSelectScreen';
import CustomerHomeScreen from '../screens/customer/CustomerHomeScreen';
import BookingConfirmScreen from '../screens/customer/BookingConfirmScreen';
import LiveTrackingScreen from '../screens/customer/LiveTrackingScreen';
import DriverDashboardScreen from '../screens/driver/DriverDashboardScreen';
import ActiveDeliveryScreen from '../screens/driver/ActiveDeliveryScreen';
import { RootStackParamList } from './types';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bgDeep,
    card: colors.bgDeep,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen name="CustomerHome" component={CustomerHomeScreen} />
        <Stack.Screen name="BookingConfirm" component={BookingConfirmScreen} />
        <Stack.Screen name="LiveTracking" component={LiveTrackingScreen} />
        <Stack.Screen name="DriverDashboard" component={DriverDashboardScreen} />
        <Stack.Screen name="ActiveDelivery" component={ActiveDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
