import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="p-4 gap-4 bg-white dark:bg-gray-900">
      <ThemeSwitcher />
      <View className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 ">
        <View className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
        <View className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
        <View className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
        <View className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded" />
      </View>
    </View>
  );
}
