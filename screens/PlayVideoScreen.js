import { StyleSheet, Text, View } from "react-native";
import ViewTemplate from "../screens_core/components/ViewTemplate";

export default function PlayVideoScreen({ navigation }) {
  return (
    <ViewTemplate navigation={navigation}>
      <View style={styles.container}>
        <Text>Play Video</Text>
      </View>
    </ViewTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 10,
  },
});
