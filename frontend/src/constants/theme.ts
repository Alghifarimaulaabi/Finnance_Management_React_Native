/**
 * Finly Design System & Theme Tokens
 * Fully tokenized for Light and Dark modes according to DESIGN.md
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#17211D',
    textSecondary: '#5E6964',
    background: '#F7F8F5',
    surface: '#FFFFFF',
    surfaceSecondary: '#E8ECE7',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    border: '#EDF0ED',

    // Brand Primary (Botanical Emerald)
    primary: '#255E53',
    primaryDark: '#173F37',
    primaryGlow: '#3F8374',
    primarySoft: '#D7E8E1',
    primaryTextOnDark: '#FFFFFF',

    // Semantics (Income / Expense)
    incomeBg: '#DFF8EB',
    incomeCardBg: '#ECF8F2',
    incomeText: '#157B58',
    incomeAmount: '#24946A',

    expenseBg: '#FFE5E1',
    expenseCardBg: '#FFF3EF',
    expenseText: '#D45B53',
    expenseAmount: '#425049',

    // Charts & Stats
    chartBarInactive: '#B9D8CD',
    chartBarActive: '#2F7868',
    chartGrid: '#EDF0ED',
    trendBadgeBg: '#458675',
    trendBadgeText: '#E4FBEA',

    // Avatar
    avatarBg: '#DED2C3',
    avatarText: '#765F4B',
  },
  dark: {
    text: '#F2F5F3',
    textSecondary: '#9AA7A1',
    background: '#111715',
    surface: '#1A2320',
    surfaceSecondary: '#24302C',
    backgroundElement: '#212A26',
    backgroundSelected: '#2F3D37',
    border: '#26332E',

    // Brand Primary (Botanical Emerald - adjusted for dark)
    primary: '#2E7366',
    primaryDark: '#0D241F',
    primaryGlow: '#4A9686',
    primarySoft: '#C2DBD2',
    primaryTextOnDark: '#FFFFFF',

    // Semantics (Income / Expense)
    incomeBg: '#13382B',
    incomeCardBg: '#162C23',
    incomeText: '#4EE1A8',
    incomeAmount: '#4EE1A8',

    expenseBg: '#3F1F1C',
    expenseCardBg: '#301A18',
    expenseText: '#FF8F87',
    expenseAmount: '#F2F5F3',

    // Charts & Stats
    chartBarInactive: '#2C443C',
    chartBarActive: '#44A590',
    chartGrid: '#22302A',
    trendBadgeBg: '#2D6B5E',
    trendBadgeText: '#D7FCE5',

    // Avatar
    avatarBg: '#3A332C',
    avatarText: '#E5D6C5',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
