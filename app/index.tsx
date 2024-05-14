import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Landing Page</Text>
      {/* <Link 
        href={{
          pathname:"/users/[id]",
          params: {id:1},
        }} style={styles.butn} > 
        Go to user 1 
      </Link> */}

      <Link href="/login" style={styles.butn} > 
        Go to login page
      </Link>

      <Link href="/home" style={styles.butn} > 
        Guest login
      </Link>

      {/* <Pressable onPress={()=>
        router.push({
          pathname:"/users/[id]",
          params: {id:1},
        })}>
        <Text style={styles.butn}>Go to user 1</Text>
      </Pressable>*/}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
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
