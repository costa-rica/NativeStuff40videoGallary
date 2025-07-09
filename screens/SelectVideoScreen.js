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

  return (
    <ViewTemplate navigation={navigation}>
      <View style={styles.container}>
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
