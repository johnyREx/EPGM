import { useNavigation } from "expo-router";
import { useEffect } from "react";
import LoginScreen from "../screens/Auth/LoginScreen";

export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "E.P.G.M - B.P.A.M" });
  }, [navigation]);

  return <LoginScreen />;
}
