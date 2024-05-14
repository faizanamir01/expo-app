import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

const HomePage = () => {
    // const {id} = useLocalSearchParams<{id : string}>();
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}> Home Page </Text>
            <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque porro ad quibusdam minus quaerat at corrupti magnam, adipisci iure omnis? Modi atque quasi eligendi consequatur quis amet, sint nam? </Text>
            <Link href="/" style={styles.butn} > 
                Logout
            </Link>
        </View>
    );
};

export default HomePage;

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
});
