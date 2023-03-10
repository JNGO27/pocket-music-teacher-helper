import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites },
  typography,
} = globalStyles;

export default StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.multipleL,
    width: "90%",
    height: spacing.multipleXL * 4,
    paddingLeft: spacing.multipleReg * 4.5,
    borderColor: "hsl(24, 6%, 80%)",
    borderWidth: 2,
    borderRadius: spacing.multipleReg * 4,
    backgroundColor: whites.white100,
  },
  icon: {
    width: spacing.multipleReg * 4,
    height: spacing.multipleReg * 4,
  },
  optionText: {
    fontFamily: typography.semiBold,
    fontSize: 12,
    marginTop: spacing.multipleS,
  },
});
