import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="p-4 gap-4 bg-white dark:bg-gray-900">
      <ThemeSwitcher />
    </View>
  );
}
