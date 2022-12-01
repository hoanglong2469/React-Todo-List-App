import { StyleSheet } from "react-native"

const GlobalStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  w100: {
    width: "100%",
  },
  h100: {
    height: "100%",
  },
  flex1: {
    flex: 1,
  },
  dFlex: {
    display: "flex",
  },
  centeredFlex: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    flexDirection: "column",
  },
})

export default GlobalStyles