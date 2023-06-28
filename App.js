import { StyleSheet, View, Animated, Easing } from "react-native";
import Main from "./src/components/login/Main.jsx";
import { NativeRouter } from "react-router-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/components/singUp/Main.jsx";
import MainScreen from "./src/components/home/Main.jsx";
import "react-native-gesture-handler";
import EditProfile from "./src/components/editProfile/Main.jsx";
import SplashScreen from "./src/components/splashScreen/Main.jsx";
import { useState, useEffect } from "react";
import Notification from "./src/components/notification/Main.jsx";
import News from "./src/components/news/News.jsx";
import Treatment from "./src/components/treatments/Main.jsx";
import PaymentHistoryScreen from "./src/components/payments/Home.jsx";
import AboutScreen from "./src/components/About/Main.jsx";
import AppointmentDetails from "./src/components/appointmentDetails/Main.jsx";

const Stack = createStackNavigator();
export default function App() {


  const [isSplashAnimationFinished, setIsSplashAnimationFinished] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const splashAnimation = Animated.timing(new Animated.Value(1), {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    splashAnimation.start(() => {
      setIsSplashAnimationFinished(true);
      setTimeout(() => {
        setIsAppReady(true);
      }, 500);
    });

    return () => {
      splashAnimation.stop();
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {!isAppReady && <SplashScreen isAnimationFinished={isSplashAnimationFinished} />}

      {isAppReady && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="News" component={News} options={{ headerShown: false }} />
            <Stack.Screen name="Treatments" component={Treatment} options={{ headerShown: false }} />
            <Stack.Screen name="PaymentHistory" component={PaymentHistoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Main} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Stack.Screen name='AppointmentDetails' component={AppointmentDetails} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
