import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import signin from "../connection/signin";

const SingIn = ({ navigation}) => {
  
  const SignIpSchema = Yup.object().shape({
    lastname: Yup.string()
      .max(10, "Top Long!")
      .min(5, "Top Short!")
      .required("Please enter your last name !"),
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Please enter your first name !"),
    email: Yup.string()
      .email("please enter valid email")
      .required("please enter your email"),
    password: Yup.string()
      .min(4)
      .max(20, "Password should not excced 10 chars.")
      .required()
  });

  const signinHandler = async (values) => {
  
     const resul = await signin(values);
     
     if (resul == true) {
       setTimeout(() => {
         navigation.navigate("Home");
       }, 1000);
     } else {
       if (resul == "auth/user-not-found") {
         alert("you need to create account this user is not existe");
       }
     }
   };

 
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={SignIpSchema}
          style={styles.formik}
        >
          {({
            handleChange,
            handleBlur,
            values,
            touched,
            errors
          }) => (
            <>
              <View style={styles.fieldsContainer}>
                <View style={styles.EmailInputContainer}>
                  <Text style={{ color: "#497174", fontWeight: "400" }}>
                    Email
                  </Text>
                  <TextInput
                    placeholder="Email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoCompleteType="email"
                    style={{
                      borderColor: "#497174",
                      borderWidth: 1,
                      borderRadius: 10,
                      height: 40,
                      marginTop: 9,
                      padding: 10,
                      color: "#5059dc",
                      textTransform: "lowercase"
                    }}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text
                      style={{ fontSize: 12, color: "#FF0D10", width: "80%" }}
                    >
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View>
                  <Text style={{ color: "#497174", fontWeight: "400" }}>
                    Password
                  </Text>
                  <TextInput
                    placeholder="Password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    secureTextEntry={true}
                    value={values.password}
                    style={{
                      borderColor: "#497174",
                      borderWidth: 1,
                      borderRadius: 10,
                      height: 40,
                      marginTop: 9,
                      padding: 10,
                      color: "#5059dc",
                      textTransform: "lowercase"
                    }}
                    textContentType="password"
                  />
                  {touched.password && errors.password && (
                    <Text
                      style={{ fontSize: 12, color: "#FF0D10", width: "80%" }}
                    >
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View>
                  <TouchableOpacity
                    onPress={()=>{signinHandler(values)}}
                    style={{
                      borderRadius: 40,
                      height: 50,
                      marginTop: 9,
                      padding: 10,
                      backgroundColor: "#5059dc",
                      textTransform: "lowercase",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "600"
                      }}
                    >
                      Sign in
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{ backgroundColor: "white", alignItems: "center" }}
                  onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 16,
                      color: "#5059dc"
                    }}
                  >
                    Forget Password ?
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={styles.socialMediaContainer}>
        <View
          style={{
            backgroundColor: "white",
            width: "70%",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              borderRadius: 10,
              shadowColor: "rgba(100, 100, 111, 0.2)",
              shadowOffset: { width: -2, height: 6 },
              shadowOpacity: 0.7,
              shadowRadius: 3
            }}
          >
            <Image source={require("../assets/icontwitter.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              borderRadius: 10,
              shadowColor: "rgba(100, 100, 111, 0.2)",
              shadowOffset: { width: -2, height: 6 },
              shadowOpacity: 0.7,
              shadowRadius: 3
            }}
          >
            <Image source={require("../assets/iconsfacebook.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              borderRadius: 10,
              shadowColor: "rgba(100, 100, 111, 0.2)",
              shadowOffset: { width: -2, height: 6 },
              shadowOpacity: 0.7,
              shadowRadius: 3
            }}
          >
            <Image source={require("../assets/icongoogle.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signInContainer}>
        <TouchableOpacity
          style={{
            borderRadius: 40,
            height: 50,
            marginTop: 9,
            padding: 10,
            backgroundColor: "white",
            textTransform: "lowercase",
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            borderColor: "#5059dc",
            borderWidth: 1,
            borderStyle: "solid"
          }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text
            style={{
              color: "#5059dc",
              fontSize: 16,
              fontWeight: "600"
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  formContainer: {
    backgroundColor: "white",
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },
  fieldsContainer: {
    backgroundColor: "white",
    flex: 1,
    width: "70%",
    justifyContent: "space-around"
  },
  EmailInputContainer: {
    backgroundColor: "white",
    height: "20%"
  },
  userInfoContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "20%"
  },
  socialMediaContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signInContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center"
  }
});
export default SingIn;
