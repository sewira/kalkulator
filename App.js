import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { color } from "./color/color";

export default function App() {
  const [hasil, setHasil] = useState(5);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);

  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.hasil,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Kalkulator</Text>
      </View>

      <View
        style={{
          margin: 23,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TextInput
            style={styles.textInput}
            value={input1}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(angka) => setInput1(angka)}
          />
          <TextInput
            style={styles.textInput}
            value={input2}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(angka) => setInput2(angka)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Kurang</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Kali</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Bagi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>{input1}</Text>
      <Text>{input2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    paddingHorizontal: 30,
  },

  textInput: {
    height: 50,
    width: 180,
    marginBottom: 20,
    borderColor: "#7a42f4",
    borderWidth: 1,
    fontSize: 30,
    textAlign: "center",
    borderRadius: 10,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 70,
    borderColor: "#7a42f4",
    borderWidth: 1,
    borderRadius: 10,
  },
  textBtn: {
    fontWeight: "bold",
  },
});
