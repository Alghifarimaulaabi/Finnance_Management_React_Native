import { Text, View } from "react-native";

const Card = () => {
  return (
    <View className="w-full flex-row gap-3 px-4">
      <View className="flex-1 rounded-xl bg-yellow-400 p-5">
        <Text>Card 1</Text>
      </View>

      <View className="flex-1 rounded-xl bg-yellow-400 p-5">
        <Text>Card 2</Text>
      </View>
    </View>
  );
};

export default Card;