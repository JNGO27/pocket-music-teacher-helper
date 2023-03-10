import { StyleSheet } from "react-native";
import globalStyles from "@src/globalStyles";

const {
  spacing,
  colors: { whites, grays, purples, pinks },
  typography,
} = globalStyles;

export default StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
  },
  card: {
    display: "flex",
    gap: spacing.multipleReg * 2,
    width: spacing.multipleReg * 40,
    height: spacing.multipleReg * 42.5,
    margin: -spacing.multipleReg * 7,
    paddingTop: spacing.multipleL * 2,
    backgroundColor: whites.white200,
    borderRadius: spacing.multipleReg * 4.5,
  },
  image: {
    width: spacing.multipleReg * 42,
    height: spacing.multipleReg * 30,
    marginRight: 11,
    borderRadius: spacing.multipleReg * 4.5,
  },
  decorationsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  decorationsContainerInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.multipleXS,
    marginBottom: spacing.multipleReg,
  },
  decorationCircle: {
    backgroundColor: pinks.pink100,
    width: spacing.multipleXS,
    height: spacing.multipleXS,
    borderRadius: 50,
  },
  decorationBox: {
    backgroundColor: purples.purple100,
    height: spacing.multipleXS,
    width: spacing.multipleReg * 4,
    borderRadius: spacing.multipleReg * 4.5,
  },
  accountPerson: {
    display: "flex",
    justifyContent: "center",
    width: spacing.multipleL * 3,
    height: spacing.multipleL * 3,
    marginBottom: spacing.multipleXL,
  },
  logInContainer: {
    display: "flex",
    alignItems: "center",
    gap: spacing.multipleM,
    width: "100%",
    marginTop: spacing.multipleReg * 3.5,
  },
  text: {
    color: grays.gray400,
  },
  headlineContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.multipleReg * 2,
  },
  headlineText: {
    color: "hsl(252.5, 94.7%, 85.1%)",
    fontFamily: typography.bold,
    fontSize: 28,
    textAlign: "center",
  },
  headlineSubText: {
    color: grays.gray300,
    fontFamily: typography.medium,
    fontSize: 14,
    paddingHorizontal: spacing.multipleReg * 4,
  },
});
