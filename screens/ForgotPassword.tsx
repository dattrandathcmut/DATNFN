import * as React from "react";
import { Image } from "react-native";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.forgotPasswordIcon}
      resizeMode="cover"
      source={require("../assets/forgotpassword.png")}
    >
      <Image
        style={styles.forgotPasswordChild}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.forgotPasswordChild}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Pressable style={styles.back} onPress={() => navigation.navigate("SMF")}>
        <Text style={styles.back1}>BACK</Text>
      </Pressable>
      <Image
        style={styles.iconLeaf}
        resizeMode="cover"
        source={require("../assets/-icon-leaf2.png")}
      />
      <View style={[styles.forgotPasswordInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
      <Text style={[styles.otp, styles.passwordTypo]}>OTP</Text>
      <Text style={[styles.logIn, styles.logInTypo]}>LOG IN</Text>
      <Text style={[styles.signUp, styles.logInTypo]}>SIGN UP</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.wrapperLayout]}
        onPress={() => navigation.navigate("General")}
      />
      <Text style={styles.smf}>{`SMF
`}</Text>
      <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
      <View style={[styles.forgotPasswordChild1, styles.forgotChildLayout]} />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <View style={[styles.forgotPasswordChild2, styles.passwordPosition]} />
      <Text style={[styles.confirmPassword, styles.passwordPosition]}>
        Confirm Password
      </Text>
      <Image
        style={[styles.visibleEyeEyeballOpenViewIcon, styles.visibleViewLayout]}
        resizeMode="cover"
        source={require("../assets/visibleeyeeyeballopenview1.png")}
      />
      <Image
        style={[
          styles.visibleEyeEyeballOpenViewIcon1,
          styles.visibleViewLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/visibleeyeeyeballopenview1.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 41,
    width: 306,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    marginLeft: -153,
    left: "50%",
    position: "absolute",
  },
  passwordTypo: {
    height: 2,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
  },
  logInTypo: {
    height: 16,
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    letterSpacing: 4.1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wrapperLayout: {
    height: 30,
    width: 287,
    left: 38,
    position: "absolute",
  },
  forgotChildLayout: {
    marginLeft: -152,
    height: 41,
    width: 306,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    left: "50%",
  },
  passwordPosition: {
    top: 518,
    position: "absolute",
  },
  visibleViewLayout: {
    left: "83.06%",
    right: "10.78%",
    width: "6.17%",
    height: "1.93%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordChild: {
    top: 0,
    left: 0,
    width: 360,
    position: "absolute",
    height: 800,
  },
  back1: {
    color: Color.colorMintcream_100,
    width: 63,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    letterSpacing: 4.1,
    fontSize: FontSize.size_xs,
  },
  back: {
    left: 16,
    top: 33,
    position: "absolute",
  },
  iconLeaf: {
    height: "8.74%",
    width: "12.64%",
    top: "7.5%",
    right: "43.75%",
    bottom: "83.76%",
    left: "43.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  forgotPasswordInner: {
    top: 312,
  },
  rectangleView: {
    top: 379,
  },
  username: {
    left: 40,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 312,
  },
  otp: {
    left: 40,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 379,
  },
  logIn: {
    marginLeft: -38,
    top: 685,
    width: 79,
  },
  signUp: {
    marginLeft: -48,
    top: 727,
    width: 98,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  wrapper: {
    top: 720,
  },
  rectanglePressable: {
    top: 678,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorForestgreen,
    borderWidth: 1.5,
    borderRadius: Border.br_xl,
  },
  smf: {
    marginLeft: -70,
    top: 146,
    fontSize: FontSize.size_21xl,
    color: Color.colorGray_100,
    width: 142,
    height: 55,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    position: "absolute",
  },
  forgotPassword: {
    top: 243,
    left: 28,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.gudea,
    width: 308,
    height: 36,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  forgotPasswordChild1: {
    top: 453,
    position: "absolute",
  },
  password: {
    top: 452,
    left: 45,
    position: "absolute",
  },
  forgotPasswordChild2: {
    marginLeft: -152,
    height: 41,
    width: 306,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_11xl,
    left: "50%",
  },
  confirmPassword: {
    left: 44,
    height: 2,
    width: 157,
    fontFamily: FontFamily.dhurjati,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
  },
  visibleEyeEyeballOpenViewIcon: {
    top: "58.25%",
    bottom: "39.83%",
  },
  visibleEyeEyeballOpenViewIcon1: {
    top: "66.25%",
    bottom: "31.83%",
  },
  forgotPasswordIcon: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default ForgotPassword;
