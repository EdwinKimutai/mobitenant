import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.large,
    borderColor: COLORS.gray,
    fontSize: SIZES.xxLarge,
  },
  Btn: {
    backgroundColor: COLORS.blue,
  },
});
export default styles;
