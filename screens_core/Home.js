import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import BtnHomNav from "./components/BtnHomeNav";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.vwTitle}>
        <Text style={styles.txtTitle}>Home Screen</Text>
      </View>
      <ScrollView>
        <View style={styles.vwButtons}>
          <BtnHomNav
            goTo={"WelcomeScreen"}
            title={"Welcome Screen"}
            description={"How this works"}
            navigation={navigation}
          />
          <BtnHomNav
            goTo={"SelectVideoScreen"}
            title={"Select Video"}
            description={"Select a video"}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
    alignItems: "center",
  },
  vwTitle: {
    paddingTop: 50,
    paddingBottom: 100,
  },
  txtTitle: { fontSize: 30 },
  vwButtons: {
    gap: 5,
  },
});
