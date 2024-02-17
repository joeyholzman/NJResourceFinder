import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Image
        style={[styles.homeScreenChild, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.homeScreenItem, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.homeScreenInner, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text
        style={[styles.affordableHousingOpportuniti, styles.yourFlexBox]}
      >{`Affordable Housing
Opportunities`}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.yourLocalPublic, styles.yourFlexBox]}>{`Your Local 
Public Housing
Agency/Authority`}</Text>
      <Image
        style={[styles.homeScreenChild1, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text
        style={[styles.yourClosestHousing, styles.yourFlexBox]}
      >{`Your Closest
Housing and Urban
Development Office`}</Text>
      <Text
        style={[styles.affordableElderlyDisabled, styles.homelessResourcesTypo]}
      >{`Affordable Elderly,
Disabled, and
Special Needs
Housing`}</Text>
      <Text style={[styles.homelessResources, styles.homelessResourcesTypo]}>
        Homeless Resources
      </Text>
      <Text style={styles.welcomeToNewContainer}>
        <Text style={styles.welcomeTo}>{`Welcome to `}</Text>
        <Text style={styles.newJersey}>{`New Jersey `}</Text>
        <Text style={styles.resourceFinder}>Resource Finder</Text>
        <Text style={styles.newJersey}>.</Text>
      </Text>
      <Text style={[styles.selectAllThatContainer, styles.yourFlexBox]}>
        <Text style={styles.selectAllThat}>{`Select all that apply.
`}</Text>
        <Text style={styles.youAreLooking}>You are looking for...</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
    height: 182,
    width: 182,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 204,
    height: 182,
    width: 182,
    position: "absolute",
  },
  yourFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  homelessResourcesTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homeScreenChild: {
    left: 7,
    width: 182,
    position: "absolute",
    top: 236,
  },
  homeScreenItem: {
    top: 433,
    left: 7,
    width: 182,
    position: "absolute",
  },
  homeScreenInner: {
    top: 236,
  },
  affordableHousingOpportuniti: {
    top: 289,
    left: 24,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  ellipseIcon: {
    top: 433,
  },
  yourLocalPublic: {
    top: 486,
    left: 228,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  homeScreenChild1: {
    top: 630,
    left: 8,
    width: 182,
    position: "absolute",
  },
  yourClosestHousing: {
    top: 683,
    left: 23,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  affordableElderlyDisabled: {
    top: 490,
    left: 27,
  },
  homelessResources: {
    top: 293,
    left: 215,
  },
  welcomeTo: {
    color: Color.colorDimgray,
  },
  newJersey: {
    color: Color.colorMediumslateblue,
  },
  resourceFinder: {
    color: Color.colorGreen,
  },
  welcomeToNewContainer: {
    top: 65,
    left: 37,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  selectAllThat: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  youAreLooking: {
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
  },
  selectAllThatContainer: {
    top: 130,
    left: 69,
    fontSize: 25,
    color: Color.colorDimgray,
  },
  homeScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default HomeScreen;
