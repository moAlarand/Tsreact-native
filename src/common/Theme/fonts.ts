import { Platform } from "react-native";

export const fonts =  {
  normal: Platform.OS === "ios" ? "Noto Kufi Arabic" : "NotoKufiArabic-Regular",
  bold: Platform.OS === "ios" ? "Noto Kufi Arabic" : "NotoKufiArabic-Bold",
};
