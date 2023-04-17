import { StyleSheet, Text, View,Image } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";


import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home"
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const stack = createNativeStackNavigator();

//header for some screens SignIn and SignUp

const SignInHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 200,
        borderBottomRightRadius: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        shadowColor: "rgba(100, 100, 111, 0.2)",
        shadowOffset: { width: -2, height: 6 },
        shadowOpacity: 0.7,
        shadowRadius: 3
      }}
    >
      <View style={{ width: "70%", height: "50%" }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            color: "#5059dc",
            marginBottom: 10
          }}
        >
          Welcome !
        </Text>
        <Text style={{ fontSize: 13 }}>Sign in and get Started .</Text>
      </View>
    </View>
  );
}
const SignUpHeader = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 200,
        borderBottomRightRadius: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        shadowColor: "rgba(100, 100, 111, 0.2)",
        shadowOffset: { width: -2, height: 6 },
        shadowOpacity: 0.7,
        shadowRadius: 3
      }}
    >
      <View style={{ width: "70%", height: "50%" }}>
        <Text style={{ fontSize: 30, fontWeight: "500", color: "#5059dc",marginBottom:10}}>
          New Account
        </Text>
        <Text style={{fontSize:13}} >Sign up and get Started .</Text>
      </View>
    </View>
  );
}

export default function App() {
  //check if the App is ready or not to lench the next screen
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onReady={onLayoutRootView}>
        <stack.Navigator>
          <stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: "",
              headerBackTitle: "",
              headerBackVisible: false,
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerShown: true
            }}
          />

          <stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              header: (props) => <SignUpHeader {...props} />
            }}
          />

          <stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              header: (props) => <SignInHeader {...props} />
            }}
          />
          <stack.Screen
            name="Home"
            component={Home}
            options={{
              //   header: (props) => <HomeHeader {...props} />
              headerTitle: "",
              headerBackTitle: "",
              headerBackVisible: false,
              headerShadowVisible: false
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
