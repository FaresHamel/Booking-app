import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.imageContainer}>
        <Image source={require("../assets/welcomePage.png")} />
      </View>
      <View style={style.textContainer}>
        <View style={{ width: "78%" }}>
          <Text style={(style.text, { fontSize: 30, fontWeight: "600" })}>
            Welcome !
          </Text>
          <Text style={style.text}>Log in with your data that you entered</Text>
          <Text style={style.text}>during Your registration .</Text>
        </View>
      </View>
      <View style={style.buttonsContainer}>
        <TouchableOpacity
          style={style.buttonSingUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.buttonSingIn}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={{ color: "black", fontSize: 16 }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    backgroundColor: "white",
    marginTop: 10,
    fontSize: 18
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonSingUp: {
    backgroundColor: "#5059dc",
    width: "70%",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20
  },
  buttonSingIn: {
    backgroundColor: "#fff",
    borderColor: "#5059dc",
    borderWidth: 2,
    width: "70%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 20
  }
});

export default Welcome;
