import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { color } from "./color/color";

export default function App() {
  const [hasil, setHasil] = useState(null);
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);

  const tambah = (a, b) => {
    const result = parseInt(a) + parseInt(b);
    setHasil(result);
    setInput1();
    setInput2();
  };

  const kurang = (a, b) => {
    const result = parseInt(a) - parseInt(b);
    setHasil(result);
    setInput1();
    setInput2();
  };
  const kali = (a, b) => {
    const result = parseInt(a) * parseInt(b);
    setHasil(result);
    setInput1();
    setInput2();
  };

  const bagi = (a, b) => {
    const result = parseInt(a) / parseInt(b);
    setHasil(result);
    setInput1();
    setInput2();
  };
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => tambah(input1, input2)}
          >
            <Text style={styles.textBtn}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => kurang(input1, input2)}
          >
            <Text style={styles.textBtn}>Kurang</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => kali(input1, input2)}
          >
            <Text style={styles.textBtn}>Kali</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => bagi(input1, input2)}
          >
            <Text style={styles.textBtn}>Bagi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ textAlign: "center", fontSize: 50, color: "red" }}>
        {hasil}
      </Text>
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
