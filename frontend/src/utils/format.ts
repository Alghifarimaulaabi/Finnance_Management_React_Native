/**
 * Safe, internationalized formatting utilities for Finly
 */

export function formatCurrency(
  amount: number,
  currency: string = 'IDR',
  locale: string = 'id-ID'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: currency === 'IDR' ? 0 : 2,
    }).format(amount);
  } catch {
    // Fallback if Intl fails or currency code is invalid
    return `${currency} ${amount.toLocaleString()}`;
  }
}

export function formatCompactNumber(
  amount: number,
  locale: string = 'id-ID'
): string {
  try {
    return new Intl.NumberFormat(locale, {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1,
    }).format(amount);
  } catch {
    return `${amount}`;
  }
}

export function calculatePercentageChange(
  current: number,
  previous: number
): { formatted: string; isPositive: boolean; isZero: boolean } {
  if (previous === 0) {
    if (current === 0) {
      return { formatted: '0%', isPositive: true, isZero: true };
    }
    return { formatted: '+100%', isPositive: true, isZero: false };
  }

  const change = ((current - previous) / previous) * 100;
  const isPositive = change >= 0;
  const isZero = Math.abs(change) < 0.01;

  const formatted = `${isPositive && !isZero ? '+' : ''}${change.toFixed(1).replace('.', ',')}%`;

  return { formatted, isPositive, isZero };
}
