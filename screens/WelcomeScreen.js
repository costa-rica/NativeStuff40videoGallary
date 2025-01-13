import { StyleSheet, Text, View } from "react-native";
import ViewTemplate from "../screens_core/components/ViewTemplate";

export default function WelcomeScreen({ navigation }) {
  return (
    <ViewTemplate navigation={navigation}>
      <View style={styles.container}>
        <Text>Native Stuff 15</Text>
      </View>
    </ViewTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
