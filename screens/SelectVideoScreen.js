import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Alert } from "react-native";
import ViewTemplate from "../screens_core/components/ViewTemplate";

export default function SelectVideoScreen({ navigation }) {
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleSelectVideo = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission denied", "We need access to your media.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["videos"],
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const assets = result.assets || [];
      setSelectedVideos((prev) => [...prev, ...assets]);
    }
  };

  const handleSendVideo = async (video) => {
    const formData = new FormData();
    formData.append("video", {
      uri: video.uri,
      name: video.fileName || "video.mp4",
      type: "video/mp4",
    });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 120000); // 120 sec timeout

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/video`, {
        method: "POST",
        body: formData,
        signal: controller.signal,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      clearTimeout(timeout);
      const data = await response.json();
      console.log("Upload response:", data);
      Alert.alert("Success", "Video sent successfully!");
    } catch (error) {
      clearTimeout(timeout);
      console.error("Upload error:", error);
      Alert.alert("Error", "Failed to send video.");
    }
  };

  const sendTestRequest = async () => {
    try {
      // const response = await fetch("http://localhost:3000/video-test", {
      const response = await fetch(
        // "http://h9bvjqu-costa-rica-3000.exp.direct/video-test",
        `${process.env.EXPO_PUBLIC_API_URL}/video-test`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            video: "test",
          }),
        }
      );

      const data = await response.json();
      console.log("Test response:", data);
      Alert.alert("Success", "Test request sent successfully!");
    } catch (error) {
      console.error("Test request error:", error);
      Alert.alert("Error", "Failed to send test request.");
    }
  };

  return (
    <ViewTemplate navigation={navigation}>
      <View style={styles.container}>
        <Button title="Send Test Request" onPress={sendTestRequest} />
        <Text style={styles.title}>Select Video:</Text>
        <Button title="Choose Video" onPress={handleSelectVideo} />

        <FlatList
          data={selectedVideos}
          keyExtractor={(item) => item.uri}
          renderItem={({ item }) => (
            <View style={styles.videoItem}>
              <Text numberOfLines={1} style={styles.videoText}>
                {item.fileName || "Unnamed Video"}
              </Text>
              <Text style={styles.videoUri}>{item.uri}</Text>
              <Button
                title="Play"
                onPress={() =>
                  navigation.navigate("PlayVideoScreen", {
                    videoUri: item.uri,
                  })
                }
              />
              <Button
                title="Send Video"
                onPress={() => handleSendVideo(item)}
              />
            </View>
          )}
          // renderItem={({ item }) => (
          //   <View style={styles.videoItem}>
          //     <Text numberOfLines={1} style={styles.videoText}>
          //       {item.fileName || "Unnamed Video"}
          //     </Text>
          //     <Text style={styles.videoUri}>{item.uri}</Text>
          //   </View>
          // )}
        />
      </View>
    </ViewTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  videoItem: {
    marginVertical: 8,
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 6,
  },
  videoText: {
    fontWeight: "bold",
  },
  videoUri: {
    fontSize: 10,
    color: "#333",
  },
});
