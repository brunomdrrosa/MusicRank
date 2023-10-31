import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="login"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="albums"
        options={{
          title: "Álbuns",
          tabBarIcon: ({ color }) => <TabBarIcon name="music" color={color} />,
          tabBarLabelStyle: {
            marginVertical: 4,
          },
        }}
      />
      <Tabs.Screen
        name="shows"
        options={{
          title: "Shows",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="stadium" size={40} color={color} />
          ),
          tabBarLabelStyle: {
            marginVertical: 4,
          },
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Descobrir",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          tabBarLabelStyle: {
            marginVertical: 4,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarLabelStyle: {
            marginVertical: 4,
          },
        }}
      />
      <Tabs.Screen
        name="grammy"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="albumsDetails"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="musicDetails"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
