import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="bg-white dark:bg-gray-900 h-full w-full">
        <SafeAreaView>
          <StatusBar style="auto" />
          <Slot />
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}
