import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { Input } from "@rneui/themed";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <Text style={[styles.login, styles.loginFlexBox]}>Login</Text>
      <Text style={[styles.newJerseyResourceContainer, styles.loginFlexBox]}>
        <Text style={styles.newJersey}>{`New Jersey
`}</Text>
        <Text
          style={[styles.resourceFinder, styles.resourceFinderTypo]}
        >{`Resource 
Finder`}</Text>
      </Text>
      <Text style={[styles.pleaseSignIn, styles.passwordClr]}>
        Please sign in to continue
      </Text>
      <Text style={[styles.dontHaveAn, styles.passwordClr]}>
        Don’t have an account?
      </Text>
      <View style={styles.loginPageChild} />
      <Image
        style={styles.loginPageItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.password, styles.passwordClr]}>Password</Text>
      <Image
        style={[styles.iconLockLocked, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-lock-locked.png")}
      />
      <Text style={[styles.forgot, styles.forgotTypo]}>FORGOT?</Text>
      <Text style={[styles.signUp, styles.forgotTypo]}>SIGN UP</Text>
      <Button
        style={[styles.blueButton, styles.blueShadowBox]}
        mode="contained"
        labelStyle={styles.blueButtonBtn}
        contentStyle={styles.blueButtonBtn1}
      >
        LOGIN
      </Button>
      <Input
        value="Email"
        placeholder="Email"
        required={false}
        autoFocus={false}
        inputStyle={{ color: "#696969" }}
        containerStyle={styles.textFieldTextInputInput}
      />
      <Button
        style={[styles.blueButton1, styles.blueShadowBox]}
        mode="contained"
        labelStyle={styles.blueButton1Btn}
        contentStyle={styles.blueButton1Btn1}
      >
        LOGIN
      </Button>
      <Text style={[styles.nowWithAiPoweredContainer, styles.passwordClr]}>
        <Text style={styles.nowWith}>Now with</Text>
        <Text style={styles.resourceFinderTypo}>{` 
AI-Powered 
Chatbot. `}</Text>
      </Text>
      <Image
        style={[styles.iconMessageChatbot, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-message-chatbot.png")}
      />
      <Text style={styles.continueWithoutLogin}>{`Continue 
Without Login`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blueButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  blueButtonBtn1: {
    height: 57,
    width: 157,
  },
  textFieldTextInputInput: {
    left: 55,
    width: 282,
    height: 59,
    top: 350,
    position: "absolute",
  },
  blueButton1Btn: {
    color: "#fff",
  },
  blueButton1Btn1: {
    height: 57,
    width: 157,
  },
  loginFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  resourceFinderTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  passwordClr: {
    color: Color.colorDimgray,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  forgotTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorMediumslateblue,
    textAlign: "left",
    position: "absolute",
  },
  blueShadowBox: {
    left: 180,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  login: {
    top: 243,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    left: 55,
  },
  newJersey: {
    color: Color.colorMediumslateblue,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_17xl,
  },
  resourceFinder: {
    fontSize: 27,
    color: Color.colorGreen,
  },
  newJerseyResourceContainer: {
    top: 39,
    left: 11,
    width: 215,
    height: 141,
  },
  pleaseSignIn: {
    top: 290,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 55,
  },
  dontHaveAn: {
    left: 79,
    top: 767,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  loginPageChild: {
    top: 439,
    width: 282,
    height: 59,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 55,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  loginPageItem: {
    top: -55,
    left: 234,
    width: 258,
    height: 258,
    position: "absolute",
  },
  password: {
    left: 104,
    top: 459,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  iconLockLocked: {
    height: "2.61%",
    width: "4.83%",
    top: "53.76%",
    right: "78.12%",
    bottom: "43.64%",
    left: "17.05%",
  },
  forgot: {
    left: 253,
    top: 459,
  },
  signUp: {
    left: 265,
    top: 767,
  },
  blueButton: {
    top: 528,
  },
  blueButton1: {
    top: 599,
  },
  nowWith: {
    fontFamily: FontFamily.interRegular,
  },
  nowWithAiPoweredContainer: {
    top: 42,
    left: 266,
    fontSize: 13,
  },
  iconMessageChatbot: {
    height: "8.22%",
    width: "17.81%",
    top: "8.92%",
    right: "-0.25%",
    bottom: "82.86%",
    left: "82.44%",
  },
  continueWithoutLogin: {
    top: "72.07%",
    left: "52.16%",
    fontSize: 14,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  loginPage: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage;
