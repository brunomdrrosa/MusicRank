import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text style={styles.text}>Avalie suas músicas favoritas</Text>
        <Text style={styles.text}>Descubra os próximos lançamentos</Text>
        <Text style={styles.text}>
          Conecte-se com amantes da música e muito mais
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar-se</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.botao2}>
            <Image
              source={require("../../assets/images/spotify.png")}
              style={styles.icone}
            />
            <Text style={styles.textoBotao2}>Entrar com Spotify</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.botao2}>
            <Image
              source={require("../../assets/images/appleMusic.png")}
              style={styles.icone}
            />
            <Text style={styles.textoBotao2}>Entrar com Apple Music</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.contaExistente}>
            Já possui uma conta? Faça login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    bottom: 35,
    right: 235,
    width: 888,
    height: 414,
    transform: [{ rotate: "-10.629deg" }],
    flexShrink: 0,
    opacity: 0.4,
  },
  containerText: {
    bottom: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    width: 330,
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  botao2: {
    flexDirection: "row",
    width: 330,
    height: 50,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#1B1C1B",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  textoBotao: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  textoBotao2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  icone: {
    width: 22,
    height: 22,
  },
  contaExistente: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
  },
});
