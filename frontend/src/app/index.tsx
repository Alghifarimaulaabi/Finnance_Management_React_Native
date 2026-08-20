import "../global.css";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Transaction = {
  icon: string;
  color: string;
  title: string;
  category: string;
  amount: string;
  income?: boolean;
};

const transactions: Transaction[] = [
  { icon: "⌂", color: "#EEE9FF", title: "Sewa Apartemen", category: "Rumah · Hari ini", amount: "- Rp850.000" },
  { icon: "↗", color: "#DDF7ED", title: "Gaji Bulanan", category: "Pemasukan · 28 Mei", amount: "+ Rp7.500.000", income: true },
  { icon: "☕", color: "#FFF0DD", title: "Kopi Sore", category: "Makan & Minum · 27 Mei", amount: "- Rp28.000" },
];

const chartValues = [48, 67, 42, 76, 58, 88, 70];
const chartLabels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export default function App() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [period, setPeriod] = useState<"Minggu ini" | "Bulan ini">("Minggu ini");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Selamat pagi,</Text>
            <Text style={styles.name}>Nadya <Text style={styles.wave}>✦</Text></Text>
          </View>
          <Pressable style={styles.profileButton} accessibilityLabel="Profil pengguna">
            <Text style={styles.profileInitial}>N</Text>
            <View style={styles.notificationDot} />
          </Pressable>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.cardGlowLarge} />
          <View style={styles.cardGlowSmall} />
          <View style={styles.balanceLabelRow}>
            <Text style={styles.balanceLabel}>Total saldo</Text>
            <Pressable hitSlop={10} onPress={() => setBalanceVisible((current) => !current)} accessibilityLabel={balanceVisible ? "Sembunyikan saldo" : "Tampilkan saldo"}>
              <Text style={styles.eyeIcon}>{balanceVisible ? "◉" : "○"}</Text>
            </Pressable>
          </View>
          <Text style={styles.balance}>{balanceVisible ? "Rp12.750.000" : "Rp ••••••••"}</Text>
          <View style={styles.balanceFooter}>
            <View style={styles.trendPill}><Text style={styles.trendArrow}>↗</Text><Text style={styles.trendText}>8,4%</Text></View>
            <Text style={styles.balanceHint}>dari bulan lalu</Text>
            <Text style={styles.cardMark}>finly</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, styles.incomeCard]}>
            <View style={[styles.statIcon, { backgroundColor: "#DFF8EB" }]}><Text style={[styles.statIconText, { color: "#157B58" }]}>↓</Text></View>
            <Text style={styles.statLabel}>Pemasukan</Text><Text style={styles.statValue}>Rp8,2 jt</Text><Text style={styles.statChange}>+12,5% bulan ini</Text>
          </View>
          <View style={[styles.statCard, styles.expenseCard]}>
            <View style={[styles.statIcon, { backgroundColor: "#FFE5E1" }]}><Text style={[styles.statIconText, { color: "#D45B53" }]}>↑</Text></View>
            <Text style={styles.statLabel}>Pengeluaran</Text><Text style={styles.statValue}>Rp3,4 jt</Text><Text style={styles.statChange}>+4,8% bulan ini</Text>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Arus kas</Text>
          <View style={styles.segmentedControl}>
            {(["Minggu ini", "Bulan ini"] as const).map((item) => {
              const selected = period === item;
              return <Pressable key={item} onPress={() => setPeriod(item)} style={[styles.segment, selected && styles.segmentSelected]}><Text style={[styles.segmentText, selected && styles.segmentTextSelected]}>{item}</Text></Pressable>;
            })}
          </View>
        </View>

        <View style={styles.chartCard}>
          <View style={styles.chartSummary}>
            <View><Text style={styles.chartAmount}>{period === "Minggu ini" ? "Rp1.240.000" : "Rp4.860.000"}</Text><Text style={styles.chartCaption}>Pengeluaran tercatat</Text></View>
            <View style={styles.chartBadge}><Text style={styles.chartBadgeText}>− 6,2%</Text></View>
          </View>
          <View style={styles.chartArea}>
            <View style={styles.gridLineTop} /><View style={styles.gridLineMiddle} />
            <View style={styles.chartBars}>
              {chartValues.map((height, index) => {
                const active = index === 5;
                return <View key={chartLabels[index]} style={styles.barColumn}>{active && <Text style={styles.barTooltip}>Rp320k</Text>}<View style={[styles.bar, { height }, active && styles.barActive]} /><Text style={[styles.barLabel, active && styles.barLabelActive]}>{chartLabels[index]}</Text></View>;
              })}
            </View>
          </View>
        </View>

        <Text style={styles.quickTitle}>Aksi cepat</Text>
        <View style={styles.quickActions}>
          {[
            { icon: "+", label: "Tambah", color: "#3B7A69" }, { icon: "⇄", label: "Transfer", color: "#546E9D" },
            { icon: "▣", label: "Tagihan", color: "#B06F5B" }, { icon: "◎", label: "Lainnya", color: "#76669B" },
          ].map((action) => <Pressable key={action.label} style={styles.quickAction}><View style={[styles.quickIcon, { backgroundColor: action.color }]}><Text style={styles.quickIconText}>{action.icon}</Text></View><Text style={styles.quickLabel}>{action.label}</Text></Pressable>)}
        </View>

        <View style={styles.transactionHeader}><Text style={styles.sectionTitle}>Transaksi terbaru</Text><Pressable><Text style={styles.seeAll}>Lihat semua</Text></Pressable></View>
        <View style={styles.transactionList}>
          {transactions.map((transaction) => <Pressable key={transaction.title} style={styles.transactionRow}>
            <View style={[styles.transactionIcon, { backgroundColor: transaction.color }]}><Text style={styles.transactionIconText}>{transaction.icon}</Text></View>
            <View style={styles.transactionInfo}><Text style={styles.transactionTitle}>{transaction.title}</Text><Text style={styles.transactionCategory}>{transaction.category}</Text></View>
            <Text style={[styles.transactionAmount, transaction.income && styles.incomeAmount]}>{transaction.amount}</Text>
          </Pressable>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F7F8F5" }, content: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 34 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }, greeting: { color: "#78817D", fontSize: 14, fontWeight: "500" }, name: { color: "#17211D", fontSize: 25, fontWeight: "800", marginTop: 2, letterSpacing: -0.6 }, wave: { color: "#F0A54A", fontSize: 18 },
  profileButton: { width: 45, height: 45, alignItems: "center", justifyContent: "center", backgroundColor: "#DED2C3", borderRadius: 16 }, profileInitial: { color: "#765F4B", fontSize: 18, fontWeight: "800" }, notificationDot: { position: "absolute", width: 10, height: 10, borderRadius: 5, right: -1, top: -1, backgroundColor: "#EF6B57", borderWidth: 2, borderColor: "#F7F8F5" },
  balanceCard: { backgroundColor: "#255E53", borderRadius: 28, minHeight: 188, padding: 24, overflow: "hidden", shadowColor: "#173F37", shadowOpacity: 0.23, shadowRadius: 20, shadowOffset: { width: 0, height: 12 }, elevation: 6 }, cardGlowLarge: { position: "absolute", width: 210, height: 210, backgroundColor: "#3F8374", borderRadius: 105, right: -62, top: -108, opacity: 0.72 }, cardGlowSmall: { position: "absolute", width: 110, height: 110, backgroundColor: "#6BAC8B", borderRadius: 55, right: 30, bottom: -68, opacity: 0.27 },
  balanceLabelRow: { flexDirection: "row", alignItems: "center", gap: 8 }, balanceLabel: { color: "#D7E8E1", fontSize: 14, fontWeight: "600" }, eyeIcon: { color: "#D7E8E1", fontSize: 15 }, balance: { color: "#FFFFFF", fontSize: 31, fontWeight: "800", letterSpacing: -1, marginTop: 9 }, balanceFooter: { flexDirection: "row", alignItems: "center", marginTop: 24 }, trendPill: { backgroundColor: "#458675", borderRadius: 20, paddingHorizontal: 9, paddingVertical: 5, flexDirection: "row", gap: 3, alignItems: "center" }, trendArrow: { color: "#D6F8DF", fontSize: 12, fontWeight: "800" }, trendText: { color: "#E4FBEA", fontSize: 11, fontWeight: "800" }, balanceHint: { color: "#C0D8CF", fontSize: 12, marginLeft: 8 }, cardMark: { color: "#C7E1D8", fontSize: 17, fontWeight: "800", marginLeft: "auto", letterSpacing: -1 },
  statsRow: { flexDirection: "row", gap: 12, marginTop: 16 }, statCard: { flex: 1, minHeight: 137, borderRadius: 22, padding: 15 }, incomeCard: { backgroundColor: "#ECF8F2" }, expenseCard: { backgroundColor: "#FFF3EF" }, statIcon: { width: 29, height: 29, borderRadius: 10, alignItems: "center", justifyContent: "center" }, statIconText: { fontSize: 17, fontWeight: "900" }, statLabel: { color: "#67736D", fontSize: 12, fontWeight: "600", marginTop: 12 }, statValue: { color: "#18221E", fontSize: 17, fontWeight: "800", marginTop: 3, letterSpacing: -0.3 }, statChange: { color: "#72817A", fontSize: 10, fontWeight: "600", marginTop: 5 },
  sectionHeading: { marginTop: 29, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, sectionTitle: { color: "#18221E", fontSize: 19, fontWeight: "800", letterSpacing: -0.4 }, segmentedControl: { flexDirection: "row", backgroundColor: "#E8ECE7", borderRadius: 10, padding: 3 }, segment: { borderRadius: 8, paddingHorizontal: 9, paddingVertical: 5 }, segmentSelected: { backgroundColor: "#FFFFFF", shadowColor: "#4A5850", shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 1 }, elevation: 1 }, segmentText: { color: "#7A847F", fontSize: 10, fontWeight: "700" }, segmentTextSelected: { color: "#30463E" },
  chartCard: { marginTop: 14, backgroundColor: "#FFFFFF", borderRadius: 24, padding: 18, shadowColor: "#77857D", shadowOpacity: 0.08, shadowRadius: 15, shadowOffset: { width: 0, height: 6 }, elevation: 2 }, chartSummary: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }, chartAmount: { color: "#1C2722", fontSize: 20, fontWeight: "800", letterSpacing: -0.4 }, chartCaption: { color: "#8A948F", fontSize: 11, fontWeight: "500", marginTop: 3 }, chartBadge: { borderRadius: 9, backgroundColor: "#E7F7EE", paddingHorizontal: 8, paddingVertical: 5 }, chartBadgeText: { color: "#2D9167", fontSize: 11, fontWeight: "800" }, chartArea: { height: 133, marginTop: 14, position: "relative", justifyContent: "flex-end" }, gridLineTop: { position: "absolute", left: 0, right: 0, top: 23, borderTopWidth: 1, borderColor: "#EDF0ED", borderStyle: "dashed" }, gridLineMiddle: { position: "absolute", left: 0, right: 0, top: 73, borderTopWidth: 1, borderColor: "#EDF0ED", borderStyle: "dashed" }, chartBars: { flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", height: 122 }, barColumn: { alignItems: "center", justifyContent: "flex-end", width: "12%", height: 122 }, bar: { width: 19, borderRadius: 10, backgroundColor: "#B9D8CD", marginBottom: 8 }, barActive: { backgroundColor: "#2F7868" }, barTooltip: { position: "absolute", top: 0, backgroundColor: "#213D35", color: "#FFFFFF", fontSize: 9, fontWeight: "700", borderRadius: 7, paddingHorizontal: 6, paddingVertical: 3 }, barLabel: { color: "#98A19C", fontSize: 10, fontWeight: "600" }, barLabelActive: { color: "#2F7868", fontWeight: "800" },
  quickTitle: { color: "#18221E", fontSize: 19, fontWeight: "800", letterSpacing: -0.4, marginTop: 28 }, quickActions: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 }, quickAction: { alignItems: "center", width: "23%" }, quickIcon: { width: 52, height: 52, alignItems: "center", justifyContent: "center", borderRadius: 18 }, quickIconText: { color: "#FFFFFF", fontSize: 23, fontWeight: "500" }, quickLabel: { color: "#56625C", fontSize: 11, fontWeight: "600", marginTop: 8 },
  transactionHeader: { marginTop: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, seeAll: { color: "#307A69", fontSize: 12, fontWeight: "800" }, transactionList: { marginTop: 11, backgroundColor: "#FFFFFF", borderRadius: 22, paddingHorizontal: 15, shadowColor: "#77857D", shadowOpacity: 0.06, shadowRadius: 13, shadowOffset: { width: 0, height: 5 }, elevation: 1 }, transactionRow: { flexDirection: "row", alignItems: "center", paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#EDF0ED" }, transactionIcon: { width: 41, height: 41, borderRadius: 14, alignItems: "center", justifyContent: "center" }, transactionIconText: { color: "#42544D", fontSize: 18, fontWeight: "800" }, transactionInfo: { flex: 1, marginLeft: 11 }, transactionTitle: { color: "#26332D", fontSize: 13, fontWeight: "800" }, transactionCategory: { color: "#8C9691", fontSize: 10, marginTop: 3, fontWeight: "500" }, transactionAmount: { color: "#425049", fontSize: 12, fontWeight: "800" }, incomeAmount: { color: "#24946A" },
});
