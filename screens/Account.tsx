import * as React from "react";
import { Text, StyleSheet, Pressable, View, Alert, Button } from "react-native";
import { Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  StyleVariable,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Color,
} from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native';
import { TextInput } from "react-native";
import { useEffect, useState } from "react";

const Account = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonColor, setButtonColor] = useState('#939896');
  useEffect(() => {
    setIsButtonDisabled(!password || !confirmPassword);
    if (password && confirmPassword) {
      setButtonColor('#2ecc71'); // Màu xanh khi cả hai ô password được điền
    } else {
      setButtonColor('#939896'); // Trở lại màu mặc định nếu một trong hai ô password còn trống
    }
  }, [password, confirmPassword]);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setIsButtonDisabled(!text || !confirmPassword);
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setIsButtonDisabled(!password || !text);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please make sure passwords match.');
      return;
    }

    // Passwords match, you can proceed with further actions
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  return (
    <SafeAreaView style={styles.account}>
      <ScrollView>
        <Text style={styles.smf}>SMF</Text>
        <Image
          style={styles.iconLeaf}
          resizeMode="cover"
          source={require("../assets/-icon-leaf.png")}
        />
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.back1}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.userProfile}>
          <View style={styles.frame}>
            <View style={[styles.frame1, styles.frameSpaceBlock]}>
              <View style={styles.frame2}>
                <View style={styles.avatar}>
                  <Image
                    style={styles.avaterIcon}
                    resizeMode="cover"
                    source={require("../assets/avater.png")}
                  />
                </View>
                <View style={styles.frame3}>
                  <Text style={styles.irwinWilliams}>Irwin Williams</Text>
                  <Text style={styles.personalAccount}>Personal account</Text>
                </View>
              </View>
              <View style={styles.avatar}>
                <View style={[styles.label1, styles.labelFlexBox]}>
                  <Text style={[styles.label2, styles.labelTypo]}>Upgrade</Text>
                </View>
              </View>
            </View>
            <View style={[styles.divider, styles.dividerSpaceBlock]}>
              <View style={styles.dividerLayout} />
            </View>
            <View style={[styles.frame4, styles.frameSpaceBlock]}>
              <Pressable style={[styles.tabFlexBox, { backgroundColor: Color.colorAliceblue }]}
                onPress={() => navigation.navigate("Notification")}
              >
                <View style={styles.frame5}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/icon.png")}
                  />
                  <Text style={[styles.tabItem, styles.tabItemTypo]}>
                    Messages
                  </Text>
                </View>
                <View style={styles.counterLayout}>
                  <View style={[styles.round, styles.textFlexBox]}>
                    <Text style={[styles.text, styles.textFlexBox]}>12</Text>
                  </View>
                </View>
                <Image
                  style={[styles.icon1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.tab1, styles.tabFlexBox]}>
              <View style={styles.frame5}>
                <Image
                  style={styles.iconLayout}
                  resizeMode="cover"
                  source={require("../assets/icon2.png")}
                />
                <Text style={[styles.tabItem, styles.tabItemTypo]}>
                  Change password
                </Text>
              </View>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon1.png")}
              />
              <View style={styles.label3}>
                <View style={[styles.label4, styles.labelFlexBox]}>
                  <Text style={[styles.label5, styles.labelTypo]}>Label</Text>
                </View>
              </View>
              <View style={[styles.counter1, styles.counterLayout]}>
                <View style={[styles.round, styles.textFlexBox]}>
                  <Text style={[styles.text, styles.textFlexBox]}>12</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameInner1}>
              <View style={styles.frameParentLayout}>
                <View style={styles.enterNewPasswordWrapper}>
                  <Text style={[styles.enterNewPassword, styles.atLeast8Typo]}>
                    Enter new password
                  </Text>
                </View>
                <TextInput
                  style={[styles.atLeast8CharacterWrapper, styles.wrapperLayout, styles.atLeast8, styles.text3Position]}
                  placeholder="     At least 8 characters"
                  onChangeText={handlePasswordChange}
                  value={password}
                  secureTextEntry={true}
                />

              </View>
            </View>
            <View style={[styles.frameParent14, styles.frameParentLayout]}>
              <View style={styles.enterNewPasswordWrapper}>
                <Text style={[styles.enterNewPassword, styles.atLeast8Typo]}>
                  Confirm Password
                </Text>
              </View>
              <TextInput
                style={[styles.atLeast8CharacterWrapper, styles.wrapperLayout, styles.atLeast8, styles.text3Position]}
                placeholder="    Confirm your password"
                onChangeText={handleConfirmPasswordChange}
                value={confirmPassword}
                secureTextEntry={true}
              />

            </View>
            <TouchableOpacity
              style={[styles.sendWrapper, styles.wrapperLayout, { backgroundColor: buttonColor }]}
              onPress={handleSubmit}
              disabled={isButtonDisabled}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <View style={[styles.frame16, styles.frameSpaceBlock]}>
              <View style={styles.tabFlexBox}>
                <View style={styles.frame5}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/icon9.png")}
                  />
                  <Text style={[styles.tabItem7, styles.tabItemTypo]}>
                    Log out
                  </Text>
                </View>
                <Image
                  style={[styles.icon1, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/icon1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    paddingVertical: 10,
    alignSelf: "stretch",
  },
  labelFlexBox: {
    paddingHorizontal: StyleVariable.spacingSpacingXs,
    justifyContent: "flex-end",
    height: 24,
    borderRadius: StyleVariable.radiusRadiusRound,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  labelTypo: {
    textAlign: "center",
    fontSize: FontSize.headingHeading07_size,
    fontFamily: FontFamily.headingHeading07,
    fontWeight: "500",
    lineHeight: 24,
  },
  dividerSpaceBlock: {
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  tabItemTypo: {
    marginLeft: 4,
    fontSize: FontSize.headingHeading07_size,
    fontFamily: FontFamily.headingHeading07,
    lineHeight: 24,
    textAlign: "left",
    flex: 1,
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  textFlexBox: {
    justifyContent: "center",
    height: 24,
  },
  alertSpaceBlock: {
    padding: Padding.p_xs,
    borderRadius: Border.br_9xs,
  },
  frame1FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  upgradeTypo: {
    color: Color.neutral700,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.headingHeading07_size,
    textAlign: "left",
  },
  insertTypo: {
    marginTop: 4,
    color: Color.neutral700,
    fontFamily: FontFamily.lato,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  frameChildLayout: {
    width: 16,
    height: 16,
  },
  alertLayout: {
    left: 2,
    padding: Padding.p_xs,
    height: 50,
    width: 356,
    backgroundColor: Color.colorPaleturquoise,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  tabFlexBox: {
    padding: StyleVariable.numbersSpacingXs,
    borderRadius: StyleVariable.spacingSpacingXxs,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  counterLayout: {
    borderRadius: StyleVariable.numbersRadiusRound,
    marginLeft: 8,
  },
  atLeast8Typo: {
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
  },
  wrapperLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  text2Position: {
    left: 12,
    top: 10,
    color: Color.colorGray_200,
  },
  text3Position: {
    left: 0,
    top: 10,
    color: Color.colorGray_200,
  },
  frameParentLayout: {
    height: 103,
    width: 319,
  },
  sendTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
    position: "absolute",
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.colorGray_800,
    alignSelf: "stretch",
  },
  roundFlexBox: {
    alignItems: "flex-end",
    paddingVertical: 0,
  },
  smf: {
    marginLeft: -38,
    top: 46,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_500,
    width: 91,
    height: 37,
    textAlign: "left",
    fontFamily: FontFamily.michroma,
    position: "absolute",
  },
  iconLeaf: {
    height: "4.5%",
    width: "7.39%",
    top: "1.75%",
    right: "46.22%",
    bottom: "93.75%",
    left: "46.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  back1: {
    letterSpacing: 4.1,
    color: Color.colorBlack,
    width: 68,
    height: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.michroma,
  },
  back: {
    left: 17,
    top: 14,
    position: "absolute",
  },
  avaterIcon: {
    width: 40,
    height: 40,
  },
  avatar: {
    flexDirection: "row",
  },
  irwinWilliams: {
    fontSize: FontSize.headingHeading06_size,
    color: Color.colorGray_300,
    fontFamily: FontFamily.headingHeading07,
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "left",
  },
  personalAccount: {
    color: Color.colorGray_200,
    fontSize: FontSize.headingHeading07_size,
    fontFamily: FontFamily.headingHeading07,
    lineHeight: 24,
    textAlign: "left",
  },
  frame3: {
    marginLeft: 8,
  },
  frame2: {
    flexDirection: "row",
    alignItems: "center",
  },
  label2: {
    color: Color.colorRoyalblue,
    textAlign: "center",
    display: "none",
  },
  label1: {
    display: "none",
    backgroundColor: Color.colorAliceblue,
    paddingHorizontal: StyleVariable.spacingSpacingXs,
    justifyContent: "flex-end",
    height: 24,
  },
  frame1: {
    paddingHorizontal: StyleVariable.numbersSpacingS,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    marginTop: 16,
  },
  tabItem: {
    color: Color.colorGray_300,
  },
  frame5: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon1: {
    display: "none",
    marginLeft: 8,
  },
  label5: {
    color: Color.colorRoyalblue,
    textAlign: "center",
  },
  label4: {
    backgroundColor: Color.colorAliceblue,
    paddingHorizontal: StyleVariable.spacingSpacingXs,
    justifyContent: "flex-end",
    height: 24,
  },
  label3: {
    display: "none",
    marginLeft: 8,
    flexDirection: "row",
  },
  text: {
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.headingHeading07_size,
    fontFamily: FontFamily.headingHeading07,
    fontWeight: "500",
    lineHeight: 24,
    color: Color.colorGray_300,
    alignItems: "center",
    alignSelf: "stretch",
  },
  round: {
    backgroundColor: Color.colorWhitesmoke_100,
    paddingHorizontal: StyleVariable.numbersSpacingXs,
    alignItems: "flex-end",
    paddingVertical: 0,
    borderRadius: StyleVariable.radiusRadiusRound,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
  },
  frame4: {
    paddingHorizontal: StyleVariable.spacingSmall,
    marginTop: 16,
  },
  insertYourAlert: {
    fontWeight: "600",
  },
  insertTheAlert: {
    display: "none",
  },
  insertYourAlertTitleHereParent: {
    display: "none",
  },
  upgrade: {
    textDecorationLine: "underline",
    fontWeight: "500",
   },
   
  upgradeContainer: {
    marginLeft: 16,
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  frameGroup: {
    width: 250,
    marginLeft: 8,
  },
  upgrade2: {
    fontWeight: "500",
  },
  directionsIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  alertNotificationToastInner: {
    alignSelf: "stretch",
  },
  alertNotificationToast: {
    top: 7,
    left: 4,
    height: 50,
    width: 356,
    backgroundColor: Color.colorPaleturquoise,
    padding: Padding.p_xs,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  alertNotificationToast1: {
    top: 78,
  },
  alertNotificationToast2: {
    top: 149,
  },
  alertNotificationToast3: {
    top: 220,
  },
  alertNotificationToast4: {
    top: 278,
  },
  alertNotificationToastParent: {
    backgroundColor: Color.colorAliceblue,
    overflow: "scroll",
    height: 160,
    marginTop: 16,
    width: 380,
  },
  counter1: {
    display: "none",
  },
  tab1: {
    marginTop: 16,
  },
  enterNewPassword: {
    color: Color.colorDarkslategray_100,
    fontWeight: "600",
    fontSize: FontSize.headingHeading07_size,
    fontFamily: FontFamily.montserrat,
  },
  enterNewPasswordWrapper: {
    padding: 1,
    flexDirection: "row",
  },
  atLeast8: {
    fontFamily: FontFamily.montserrat,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 10,
    position: "absolute",
    left: 10,
  },
  atLeast8CharacterWrapper: {
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 0.7,
    marginTop: 8,
    width: 319,
    borderRadius: Border.br_xl,
    height: 40,
    borderStyle: "solid",
  },
  frameInner1: {
    width: 320,
    height: 107,
    marginTop: 16,
  },
  text2: {
    left: 24,
    top: 10,
    color: Color.colorGray_200,
  },
  frameParent14: {
    marginTop: 16,
  },
  send: {
    top: 18,
    left: 112,
    color: Color.colorWhite,
    width: 69,
    height: 28,
    fontWeight: "500",
  },
  sendWrapper: {
    backgroundColor: "#939896",
    width: 304,
    height: 63,
    marginTop: 16,
  },
  upgradeParent4: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameWrapper4: {
    display: "none",
    flexDirection: "row",
  },
  alertNotificationToast5: {
    backgroundColor: Color.greenLigher,
    width: 30,
    padding: Padding.p_xs,
    borderRadius: Border.br_9xs,
    marginTop: 16,
    height: 37,
  },
  frame7: {
    width: 64,
    height: 34,
    marginTop: 16,
  },
  frame8: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  frame: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  divider5: {
    display: "none",
  },
  icon4: {
    display: "none",
  },
  tabItem2: {
    display: "none",
    color: Color.colorGray_300,
  },
  frame11: {
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  tab3: {
    paddingLeft: StyleVariable.numbersSpacingL,
    paddingTop: StyleVariable.numbersSpacingXs,
    paddingRight: StyleVariable.numbersSpacingXs,
    borderRadius: StyleVariable.spacingSpacingXxs,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    paddingBottom: StyleVariable.numbersSpacingXs,
  },
  label20: {
    color: Color.colorSeagreen,
  },
  label19: {
    backgroundColor: Color.colorHoneydew_100,
  },
  frame10: {
    marginTop: 8,
    paddingHorizontal: StyleVariable.numbersSpacingS,
    alignSelf: "stretch",
  },
  divider6: {
    marginTop: 8,
  },
  tabItem7: {
    color: "#d31510",
  },
  frame16: {
    marginTop: 50,
    paddingHorizontal: StyleVariable.numbersSpacingS,
    paddingLeft: 290,
  },
  frame9: {
    marginTop: 8,
    alignItems: "center",
    alignSelf: "stretch",
  },
  userProfile: {
    top: 79,
    left: 8,
    borderRadius: StyleVariable.radiusRadiusM,
    height: 720,
    paddingTop: StyleVariable.numbersSpacingS,
    paddingBottom: StyleVariable.numbersSpacingXs,
    borderWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
    width: 400,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  account: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 20,
  },
});

export default Account;
