import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import {
  getFirestore,
  serverTimestamp,
  doc,
  setDoc,
} from "@firebase/firestore";

const ModalScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const db = getFirestore();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteForm = !image || !job || !age;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "Update your profile",
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: { color: "white" },
    });
  }, []);

  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayname: user.displayName,
      photoURL: user.photoURL,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center pt-1`}>
      <Image
        style={[tw`h-30 w-full`, { backgroundColor: "transparent" }]}
        resizeMode="contain"
        source={{
          uri: "https://download.logo.wine/logo/Tinder_(app)/Tinder_(app)-Logo.wine.png",
        }}
      />
      <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
        Welcome {user.displayname}
      </Text>

      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 1: The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter a Profile Pic URL"
      />

      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter your occupation"
      />

      <Text style={tw`text-center p-4 font-bold text-red-400`}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        style={tw`text-center text-xl pb-2`}
        placeholder="Enter your age"
        maxLength={2}
        keyboardType="numeric"
      />

      <TouchableOpacity
        disabled={incompleteForm}
        style={[
          tw`w-64 p-3 rounded-xl absolute bottom-10 bg-red-400`,
          incompleteForm ? tw`bg-gray-400` : tw`bg-red-400`,
        ]}
        onPress={updateUserProfile}
      >
        <Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ModalScreen;
