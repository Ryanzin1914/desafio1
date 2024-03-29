import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: "90%",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff8210",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
 
  textButtonCalculator: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  errorMessage:{
    fontSize:12,
    color: "red",
    fontWeight:"bold",
    paddingLeft:20,
  }
});

export default styles;