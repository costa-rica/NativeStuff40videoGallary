import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet, View, Dimensions } from "react-native";
import ViewTemplate from "../screens_core/components/ViewTemplate";
import { useRoute } from "@react-navigation/native";
// const videoSource =
//   "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function PlayVideoScreen({ navigation }) {
  const route = useRoute();
  const { videoUri } = route.params;
  console.log(`videoUri: ${videoUri}`);

  // Remove "file://" prefix from the URI string
  const videoSource = route.params.videoUri.startsWith("file://")
    ? route.params.videoUri.replace("file://", "")
    : route.params.videoUri;

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <ViewTemplate navigation={navigation}>
      <VideoView style={styles.vwVideo} player={player} />
    </ViewTemplate>
  );
}
const styles = StyleSheet.create({
  vwVideo: {
    width: Dimensions.get("window").width,
    height: 300,
  },
});

// import { StyleSheet, Text, View } from "react-native";
// import ViewTemplate from "../screens_core/components/ViewTemplate";

// export default function PlayVideoScreen({ navigation }) {
//   return (
//     <ViewTemplate navigation={navigation}>
//       <View style={styles.container}>
//         <Text>Play Video</Text>
//       </View>
//     </ViewTemplate>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "gray",
//     justifyContent: "center",
//     padding: 10,
//   },
// });
