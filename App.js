import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens_core/Home";
import WelcomeScreen from "./screens/WelcomeScreen";
import SelectVideoScreen from "./screens/SelectVideoScreen";
import PlayVideoScreen from "./screens/PlayVideoScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SelectVideoScreen" component={SelectVideoScreen} />
        <Stack.Screen name="PlayVideoScreen" component={PlayVideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
