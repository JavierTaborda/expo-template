import { Pressable, Text, View } from "react-native";
import { Uniwind, useUniwind } from "uniwind";

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  type theme = {
    name: "light" | "dark" | "system";
    label: string;
    icon: string;
  };
  const themes: theme[] = [
    { name: "light", label: "Light", icon: "☀️" },
    { name: "dark", label: "Dark", icon: "🌙" },
    { name: "system", label: "System", icon: "⚙️" },
  ];
  const activeTheme = hasAdaptiveThemes ? "system" : theme;
  return (
    <View className="p-4 gap-4">
      <Text className="text-sm text-gray-600 dark:text-gray-300">
        Current: {activeTheme}
      </Text>

      <View className="flex-row gap-2">
        {themes.map((t) => {
          const isSelected = activeTheme === t.name;

          return (
            <Pressable
              key={t.name}
              onPress={() => Uniwind.setTheme(t.name)}
              className={`flex-1 px-4 py-3 rounded-lg items-center ${
                isSelected ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-800"
              }`}
            >
              <Text className="text-2xl mb-1">{t.icon}</Text>
              <Text
                className={`text-xs ${
                  activeTheme === t.name
                    ? "text-white"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
