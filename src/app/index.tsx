import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  useEffect(() => {
    resetOnboarding();
  }, []);

  const resetOnboarding = async () => {
    await AsyncStorage.removeItem("hasOnboarded"); // remove saved state
    router.replace("/onboarding");
  };

  return null;
}
