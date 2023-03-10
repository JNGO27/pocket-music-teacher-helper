import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen, Students } from "@src/screens";
import type { RootStackParamList } from "@src/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Students"
          component={Students}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;
