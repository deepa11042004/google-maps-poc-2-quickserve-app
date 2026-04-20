import { Platform } from 'react-native';

const iosHeading = 'AvenirNext-Bold';
const iosBody = 'AvenirNext-Regular';

export const typography = {
  heading: Platform.select({
    ios: iosHeading,
    android: 'sans-serif-medium',
    default: 'System',
  }),
  body: Platform.select({
    ios: iosBody,
    android: 'sans-serif',
    default: 'System',
  }),
};
