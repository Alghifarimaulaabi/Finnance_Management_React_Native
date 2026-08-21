import "../global.css";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/hooks/use-theme";

type Transaction = {
  id: string;
  icon: string;
  color: string;
  title: string;
  category: string;
  amount: string;
  income?: boolean;
};

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: "1", icon: "⌂", color: "#EEE9FF", title: "Sewa Apartemen", category: "Rumah · Hari ini", amount: "- Rp850.000" },
  { id: "2", icon: "↗", color: "#DDF7ED", title: "Gaji Bulanan", category: "Pemasukan · 28 Mei", amount: "+ Rp7.500.000", income: true },
  { id: "3", icon: "☕", color: "#FFF0DD", title: "Kopi Sore", category: "Makan & Minum · 27 Mei", amount: "- Rp28.000" },
];

const chartValues = [48, 67, 42, 76, 58, 88, 70];
const chartLabels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export default function App() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const [balanceVisible, setBalanceVisible] = useState(true);
  const [period, setPeriod] = useState<"Minggu ini" | "Bulan ini">("Minggu ini");
  const [transactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);

  const isTablet = width >= 600;

  return (
    <View style={[styles.root, { backgroundColor: theme.background }]}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: Math.max(insets.top, 16),
            paddingBottom: Math.max(insets.bottom, 24) + 24,
            paddingLeft: Math.max(insets.left, 20),
            paddingRight: Math.max(insets.right, 20),
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, isTablet && styles.containerTablet]}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.greetingContainer}>
              <Text style={[styles.greeting, { color: theme.textSecondary }]} numberOfLines={1}>
                Selamat pagi,
              </Text>
              <Text style={[styles.name, { color: theme.text }]} numberOfLines={1} ellipsizeMode="tail">
                Nadya <Text style={styles.wave}>✦</Text>
              </Text>
            </View>
            <Pressable
              style={[styles.profileButton, { backgroundColor: theme.avatarBg }]}
              android_ripple={{ color: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)", borderless: true }}
              accessibilityLabel="Profil pengguna"
              accessibilityRole="button"
              accessibilityHint="Buka pengaturan akun dan profil"
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={[styles.profileInitial, { color: theme.avatarText }]}>N</Text>
              <View style={[styles.notificationDot, { borderColor: theme.background }]} />
            </Pressable>
          </View>

          {/* Hero Balance Card */}
          <View style={[styles.balanceCard, { backgroundColor: theme.primary, shadowColor: theme.primaryDark }]}>
            <View style={[styles.cardGlowLarge, { backgroundColor: theme.primaryGlow }]} />
            <View style={[styles.cardGlowSmall, { backgroundColor: theme.primaryGlow }]} />
            <View style={styles.balanceLabelRow}>
              <Text style={[styles.balanceLabel, { color: theme.primarySoft }]}>Total saldo</Text>
              <Pressable
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                onPress={() => setBalanceVisible((current) => !current)}
                accessibilityLabel={balanceVisible ? "Sembunyikan saldo" : "Tampilkan saldo"}
                accessibilityRole="button"
                accessibilityHint="Tekan dua kali untuk menyembunyikan atau menampilkan total saldo"
              >
                <Text style={[styles.eyeIcon, { color: theme.primarySoft }]}>{balanceVisible ? "◉" : "○"}</Text>
              </Pressable>
            </View>

            <Text
              style={styles.balance}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
            >
              {balanceVisible ? "Rp12.750.000" : "Rp ••••••••"}
            </Text>

            <View style={styles.balanceFooter}>
              <View style={[styles.trendPill, { backgroundColor: theme.trendBadgeBg }]}>
                <Text style={[styles.trendArrow, { color: theme.trendBadgeText }]}>↗</Text>
                <Text style={[styles.trendText, { color: theme.trendBadgeText }]}>8,4%</Text>
              </View>
              <Text style={[styles.balanceHint, { color: theme.primarySoft }]}>dari bulan lalu</Text>
              <Text style={[styles.cardMark, { color: theme.primarySoft }]}>finly</Text>
            </View>
          </View>

          {/* Stats Row (Income / Expense) */}
          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: theme.incomeCardBg }]}>
              <View style={[styles.statIcon, { backgroundColor: theme.incomeBg }]}>
                <Text style={[styles.statIconText, { color: theme.incomeText }]}>↓</Text>
              </View>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Pemasukan</Text>
              <Text style={[styles.statValue, { color: theme.text }]} numberOfLines={1}>
                Rp8,2 jt
              </Text>
              <Text style={[styles.statChange, { color: theme.textSecondary }]} numberOfLines={1}>
                +12,5% bulan ini
              </Text>
            </View>

            <View style={[styles.statCard, { backgroundColor: theme.expenseCardBg }]}>
              <View style={[styles.statIcon, { backgroundColor: theme.expenseBg }]}>
                <Text style={[styles.statIconText, { color: theme.expenseText }]}>↑</Text>
              </View>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Pengeluaran</Text>
              <Text style={[styles.statValue, { color: theme.text }]} numberOfLines={1}>
                Rp3,4 jt
              </Text>
              <Text style={[styles.statChange, { color: theme.textSecondary }]} numberOfLines={1}>
                +4,8% bulan ini
              </Text>
            </View>
          </View>

          {/* Section: Arus Kas */}
          <View style={styles.sectionHeading}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Arus kas</Text>
            <View
              style={[styles.segmentedControl, { backgroundColor: theme.surfaceSecondary }]}
              accessibilityRole="tablist"
            >
              {(["Minggu ini", "Bulan ini"] as const).map((item) => {
                const selected = period === item;
                return (
                  <Pressable
                    key={item}
                    onPress={() => setPeriod(item)}
                    android_ripple={{ color: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
                    accessibilityRole="tab"
                    accessibilityState={{ selected }}
                    accessibilityLabel={`Periode ${item}`}
                    hitSlop={{ top: 8, bottom: 8, left: 6, right: 6 }}
                    style={[
                      styles.segment,
                      selected && [
                        styles.segmentSelected,
                        { backgroundColor: theme.surface, shadowColor: isDark ? "#000000" : "#4A5850" },
                      ],
                    ]}
                  >
                    <Text
                      style={[
                        styles.segmentText,
                        { color: selected ? theme.primary : theme.textSecondary },
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Cashflow Chart Card */}
          <View style={[styles.chartCard, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={styles.chartSummary}>
              <View style={styles.chartHeaderLeft}>
                <Text style={[styles.chartAmount, { color: theme.text }]} numberOfLines={1}>
                  {period === "Minggu ini" ? "Rp1.240.000" : "Rp4.860.000"}
                </Text>
                <Text style={[styles.chartCaption, { color: theme.textSecondary }]}>
                  Pengeluaran tercatat
                </Text>
              </View>
              <View style={[styles.chartBadge, { backgroundColor: theme.incomeBg }]}>
                <Text style={[styles.chartBadgeText, { color: theme.incomeText }]}>− 6,2%</Text>
              </View>
            </View>

            <View style={styles.chartArea}>
              <View style={[styles.gridLineTop, { borderColor: theme.border }]} />
              <View style={[styles.gridLineMiddle, { borderColor: theme.border }]} />
              <View style={styles.chartBars}>
                {chartValues.map((height, index) => {
                  const active = index === 5;
                  return (
                    <View key={chartLabels[index]} style={styles.barColumn}>
                      {active && (
                        <Text style={[styles.barTooltip, { backgroundColor: theme.primaryDark }]}>
                          Rp320k
                        </Text>
                      )}
                      <View
                        style={[
                          styles.bar,
                          { height, backgroundColor: active ? theme.chartBarActive : theme.chartBarInactive },
                        ]}
                      />
                      <Text
                        style={[
                          styles.barLabel,
                          { color: active ? theme.chartBarActive : theme.textSecondary },
                          active && styles.barLabelActive,
                        ]}
                      >
                        {chartLabels[index]}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <Text style={[styles.quickTitle, { color: theme.text }]}>Aksi cepat</Text>
          <View style={styles.quickActions}>
            {[
              { icon: "+", label: "Tambah", color: "#3B7A69", hint: "Tambah transaksi baru" },
              { icon: "⇄", label: "Transfer", color: "#546E9D", hint: "Pindah dana antar akun" },
              { icon: "▣", label: "Tagihan", color: "#B06F5B", hint: "Bayar atau jadwalkan tagihan" },
              { icon: "◎", label: "Lainnya", color: "#76669B", hint: "Menu dan laporan tambahan" },
            ].map((action) => (
              <View key={action.label} style={styles.quickAction}>
                <Pressable
                  style={[styles.quickIcon, { backgroundColor: action.color }]}
                  android_ripple={{ color: "rgba(255, 255, 255, 0.25)" }}
                  accessibilityLabel={action.label}
                  accessibilityRole="button"
                  accessibilityHint={action.hint}
                >
                  <Text style={styles.quickIconText}>{action.icon}</Text>
                </Pressable>
                <Text style={[styles.quickLabel, { color: theme.textSecondary }]} numberOfLines={1}>
                  {action.label}
                </Text>
              </View>
            ))}
          </View>

          {/* Transaction History */}
          <View style={styles.transactionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Transaksi terbaru</Text>
            <Pressable
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              accessibilityRole="button"
              accessibilityLabel="Lihat semua transaksi"
            >
              <Text style={[styles.seeAll, { color: theme.primary }]}>Lihat semua</Text>
            </Pressable>
          </View>

          <View style={[styles.transactionList, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            {transactions.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyTitle, { color: theme.text }]}>Belum ada transaksi</Text>
                <Text style={[styles.emptySubtitle, { color: theme.textSecondary }]}>
                  Tekan tombol Tambah untuk mencatat transaksi pertama Anda.
                </Text>
              </View>
            ) : (
              transactions.map((transaction, index) => (
                <Pressable
                  key={transaction.id}
                  android_ripple={{ color: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)" }}
                  accessibilityRole="button"
                  accessibilityLabel={`${transaction.title}, ${transaction.category}, ${transaction.amount}`}
                  style={[
                    styles.transactionRow,
                    { borderBottomColor: theme.border },
                    index === transactions.length - 1 && styles.transactionRowLast,
                  ]}
                >
                  <View style={[styles.transactionIcon, { backgroundColor: isDark ? theme.surfaceSecondary : transaction.color }]}>
                    <Text style={[styles.transactionIconText, { color: theme.text }]}>{transaction.icon}</Text>
                  </View>
                  <View style={styles.transactionInfo}>
                    <Text style={[styles.transactionTitle, { color: theme.text }]} numberOfLines={1} ellipsizeMode="tail">
                      {transaction.title}
                    </Text>
                    <Text style={[styles.transactionCategory, { color: theme.textSecondary }]} numberOfLines={1} ellipsizeMode="tail">
                      {transaction.category}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.transactionAmount,
                      { color: transaction.income ? theme.incomeAmount : theme.text },
                    ]}
                    numberOfLines={1}
                  >
                    {transaction.amount}
                  </Text>
                </Pressable>
              ))
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: 580,
  },
  containerTablet: {
    maxWidth: 640,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  greetingContainer: {
    flex: 1,
    marginRight: 16,
  },
  greeting: {
    fontSize: 14,
    fontWeight: "500",
  },
  name: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 2,
    letterSpacing: -0.6,
  },
  wave: {
    color: "#F0A54A",
    fontSize: 18,
  },
  profileButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  profileInitial: {
    fontSize: 18,
    fontWeight: "800",
  },
  notificationDot: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    right: 2,
    top: 2,
    backgroundColor: "#EF6B57",
    borderWidth: 2,
  },
  balanceCard: {
    borderRadius: 28,
    minHeight: 188,
    padding: 24,
    overflow: "hidden",
    shadowOpacity: 0.23,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 6,
  },
  cardGlowLarge: {
    position: "absolute",
    width: 210,
    height: 210,
    borderRadius: 105,
    right: -62,
    top: -108,
    opacity: 0.65,
  },
  cardGlowSmall: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    right: 30,
    bottom: -68,
    opacity: 0.25,
  },
  balanceLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  balanceLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  eyeIcon: {
    fontSize: 16,
  },
  balance: {
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "800",
    letterSpacing: -1,
    marginTop: 9,
  },
  balanceFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  trendPill: {
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
  },
  trendArrow: {
    fontSize: 12,
    fontWeight: "800",
  },
  trendText: {
    fontSize: 11,
    fontWeight: "800",
  },
  balanceHint: {
    fontSize: 12,
    marginLeft: 8,
  },
  cardMark: {
    fontSize: 17,
    fontWeight: "800",
    marginLeft: "auto",
    letterSpacing: -1,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  statCard: {
    flex: 1,
    minHeight: 137,
    borderRadius: 22,
    padding: 15,
  },
  statIcon: {
    width: 29,
    height: 29,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  statIconText: {
    fontSize: 17,
    fontWeight: "900",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 12,
  },
  statValue: {
    fontSize: 17,
    fontWeight: "800",
    marginTop: 3,
    letterSpacing: -0.3,
  },
  statChange: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 5,
  },
  sectionHeading: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.4,
  },
  segmentedControl: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 3,
  },
  segment: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    overflow: "hidden",
  },
  segmentSelected: {
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  segmentText: {
    fontSize: 11,
    fontWeight: "700",
  },
  chartCard: {
    marginTop: 14,
    borderRadius: 24,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: "#77857D",
    shadowOpacity: 0.08,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  chartSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  chartHeaderLeft: {
    flex: 1,
    marginRight: 12,
  },
  chartAmount: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.4,
  },
  chartCaption: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 3,
  },
  chartBadge: {
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  chartBadgeText: {
    fontSize: 11,
    fontWeight: "800",
  },
  chartArea: {
    height: 133,
    marginTop: 14,
    position: "relative",
    justifyContent: "flex-end",
  },
  gridLineTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 23,
    borderTopWidth: 1,
    borderStyle: "dashed",
  },
  gridLineMiddle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 73,
    borderTopWidth: 1,
    borderStyle: "dashed",
  },
  chartBars: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 122,
  },
  barColumn: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "12%",
    height: 122,
  },
  bar: {
    width: 19,
    borderRadius: 10,
    marginBottom: 8,
  },
  barTooltip: {
    position: "absolute",
    top: 0,
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "700",
    borderRadius: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  barLabel: {
    fontSize: 10,
    fontWeight: "600",
  },
  barLabelActive: {
    fontWeight: "800",
  },
  quickTitle: {
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.4,
    marginTop: 28,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  quickAction: {
    alignItems: "center",
    width: "23%",
  },
  quickIcon: {
    width: 52,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    overflow: "hidden",
  },
  quickIconText: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "500",
  },
  quickLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 8,
  },
  transactionHeader: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeAll: {
    fontSize: 12,
    fontWeight: "800",
  },
  transactionList: {
    marginTop: 11,
    borderRadius: 22,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: "#77857D",
    shadowOpacity: 0.06,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
    overflow: "hidden",
  },
  transactionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  transactionRowLast: {
    borderBottomWidth: 0,
  },
  transactionIcon: {
    width: 41,
    height: 41,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionIconText: {
    fontSize: 18,
    fontWeight: "800",
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 11,
    minWidth: 0,
  },
  transactionTitle: {
    fontSize: 13,
    fontWeight: "800",
  },
  transactionCategory: {
    fontSize: 10,
    marginTop: 3,
    fontWeight: "500",
  },
  transactionAmount: {
    fontSize: 12,
    fontWeight: "800",
    marginLeft: 8,
  },
  emptyContainer: {
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  emptySubtitle: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 6,
    maxWidth: 240,
  },
});
