import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GPTChat = () => {
  return (
    <View style={styles.gptChat}>
      <View style={[styles.gptChatChild, styles.gptChatChildPosition]} />
      <Text style={styles.newJerseyResourceContainer}>
        <Text style={styles.newJersey}>{`New Jersey `}</Text>
        <Text style={styles.resourceFinder}>Resource Finder</Text>
      </Text>
      <Image
        style={[styles.screenShot20240215At527, styles.gptChatChildPosition]}
        contentFit="cover"
        source={require("../assets/screen-shot-20240215-at-527-1.png")}
      />
      <View style={[styles.smalldropdown, styles.gptChatChildPosition]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.homelessResources, styles.homelessResourcesTypo]}>
          Homeless Resources
        </Text>
        <Image
          style={[styles.iconChevronBottom, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-chevron-bottom.png")}
        />
      </View>
      <View style={[styles.largedropdown, styles.gptChatChildPosition]}>
        <View style={styles.childShadowBox} />
        <Text
          style={[
            styles.affordableElderlyDisabled,
            styles.homelessResourcesTypo,
          ]}
        >{`Affordable Elderly, Disabled,
and Special Needs Housing`}</Text>
        <Image
          style={[styles.iconChevronBottom1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-chevron-bottom.png")}
        />
      </View>
      <View style={[styles.gptChatItem, styles.gptShadowBox]} />
      <View style={[styles.gptChatInner, styles.gptShadowBox]} />
      <Text style={[styles.filterResources, styles.searchTypo]}>
        FILTER RESOURCES
      </Text>
      <Text style={[styles.search, styles.searchTypo]}>SEARCH</Text>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gptChatChildPosition: {
    width: 393,
    left: 0,
    position: "absolute",
  },
  homelessResourcesTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "2.8%",
    right: "88.55%",
    width: "8.65%",
    position: "absolute",
    overflow: "hidden",
  },
  gptShadowBox: {
    height: 60,
    width: 196,
    backgroundColor: Color.colorGainsboro,
    top: 496,
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
  searchTypo: {
    color: Color.colorGray,
    top: 516,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  gptChatChild: {
    top: 0,
    height: 39,
    backgroundColor: Color.colorWhite,
    width: 393,
  },
  newJersey: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorMediumslateblue,
  },
  resourceFinder: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGreen,
  },
  newJerseyResourceContainer: {
    top: 5,
    left: 59,
    fontSize: 20,
    textAlign: "left",
    width: 289,
    height: 24,
    position: "absolute",
  },
  screenShot20240215At527: {
    top: 37,
    height: 459,
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorMediumslateblue,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  homelessResources: {
    top: "25%",
    left: "28.75%",
  },
  iconChevronBottom: {
    height: "58.5%",
    top: "20%",
    bottom: "21.5%",
  },
  smalldropdown: {
    top: 556,
    height: 40,
  },
  affordableElderlyDisabled: {
    top: "15.09%",
    left: "21.63%",
  },
  iconChevronBottom1: {
    height: "44.15%",
    top: "28.3%",
    bottom: "27.55%",
  },
  largedropdown: {
    top: 678,
    height: 53,
  },
  gptChatItem: {
    left: 0,
    height: 60,
    width: 196,
    backgroundColor: Color.colorGainsboro,
    top: 496,
  },
  gptChatInner: {
    left: 197,
  },
  filterResources: {
    left: 21,
  },
  search: {
    left: 261,
  },
  searchIcon: {
    top: 514,
    left: 224,
    width: 23,
    height: 23,
    position: "absolute",
  },
  gptChat: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GPTChat;
