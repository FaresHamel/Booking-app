import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,Image
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import singup from "../connection/signup";

const SingUp = ({ navigation }) => {
  
  const SignUpSchema = Yup.object().shape({
    lastname: Yup.string().max(10, "Top Long!").min(5, "Top Short!").required("Please enter your last name !"),
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

    const singupHandler = async (values) => {
    
      const result = await singup(values);
      if (result == true) {
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1000);
      } else {
        if (result == "auth/email-already-in-use")
          alert("Please this email already exist try sing in with your email");
      }
    };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.formContainer}>
        <Formik
          style={styles.formik}
          initialValues={{
            email: "",
            firstname: "",
            lastname: "",
            password: ""
          }}
          onSubmit={singupHandler}
          validationSchema={SignUpSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
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
                      textTransform: "lowercase",
                    }}
                  />
                  {touched.email && errors.email && (
                    <Text
                      style={{ fontSize: 12, color: "#FF0D10", width: "80%" }}
                    >
                      {errors.email}
                    </Text>
                  )}
                </View>
                <View style={styles.userInfoContainer}>
                  <View style={{ backgroundColor: "white", width: "45%" }}>
                    <Text style={{ color: "#497174", fontWeight: "400" }}>
                      First Name
                    </Text>
                    <TextInput
                      placeholder="First Name"
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      style={{
                        borderColor: "#497174",
                        borderWidth: 1,
                        borderRadius: 10,
                        height: 40,
                        marginTop: 9,
                        padding: 10,
                        width: "97%",
                        color: "#5059dc",
                        textTransform: "lowercase"
                      }}
                      textContentType="name"
                    />
                    {touched.firstname && errors.firstname && (
                      <Text
                        style={{ fontSize: 12, color: "#FF0D10", width: "80%" }}
                      >
                        {errors.firstname}
                      </Text>
                    )}
                  </View>
                  <View style={{ backgroundColor: "white", width: "45%" }}>
                    <Text style={{ color: "#497174", fontWeight: "400" }}>
                      Last Name
                    </Text>
                    <TextInput
                      placeholder="Last Name"
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                      style={{
                        borderColor: "#497174",
                        borderWidth: 1,
                        borderRadius: 10,
                        height: 40,
                        marginTop: 9,
                        padding: 10,
                        color: "#5059dc",
                        textTransform: "lowercase",
                        width: "97%"
                      }}
                      textContentType="familyName"
                    />
                    {touched.lastname && errors.lastname && (
                      <Text
                        style={{ fontSize: 12, color: "#FF0D10", width: "80%" }}
                      >
                        {errors.lastname}
                      </Text>
                    )}
                  </View>
                </View>
                <View>
                  <Text style={{ color: "#497174", fontWeight: "400" }}>
                    Password
                  </Text>
                  <TextInput
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholder="Password"
                    value={values.password}
                    secureTextEntry={true}
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
                    onPress={handleSubmit}
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
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
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

          onPress={()=>{navigation.navigate("SignIn");}}
        >
          <Text
            style={{
              color: "#5059dc",
              fontSize: 16,
              fontWeight: "600"
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    flex: 5,
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
    alignItems:"center"
  },
});

export default SingUp;
