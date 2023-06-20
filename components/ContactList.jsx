import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const contacts = [
  {
    uid: 1,
    name: "Balogun Muaz",
    status: "online",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qa_3YkGUArtrYczkNjGqegHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    uid: 2,
    name: "Balogun Musthapha",
    status: "online",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qa_3YkGUArtrYczkNjGqegHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    uid: 3,
    name: "Balogun Zaynab",
    status: "online",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qa_3YkGUArtrYczkNjGqegHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    uid: 4,
    name: "Balogun Halimah",
    status: "offline",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qa_3YkGUArtrYczkNjGqegHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    uid: 5,
    name: "Balogun Aisah",
    status: "offline",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qa_3YkGUArtrYczkNjGqegHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>Contact Lists</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userstatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8d3daf",
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  userstatus: {},
});
