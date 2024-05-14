import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native"

const LoginPage = () => {
    // const {id} = useLocalSearchParams<{id : string}>();
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}> Login Page </Text>
            <TextInput style={styles.input} placeholder='User Name'/>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Password'/>
            <Link href="/home" style={styles.butn} > 
                Login
            </Link>
        </View>    
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    butn: {
      fontSize: 20,
      padding:20,
      margin:10,
      backgroundColor: 'yellow',
    },
    textt: {
        fontWeight:'bold',
        padding : 10,
    },
    input: {
        borderWidth:1,
        borderColor:'#bbb',
        padding:20,
        margin:20,
        width:200,
    },
});
