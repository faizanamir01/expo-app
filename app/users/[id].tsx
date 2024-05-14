import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native"

const userPage = () => {
    const {id} = useLocalSearchParams<{id : string}>();
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}> User Page - {id} </Text>
        </View>
    );
};

export default userPage;

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
