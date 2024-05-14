import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "Landing Page",
            headerStyle:{
                backgroundColor: 'red'
            }
        }}/>
        <Stack.Screen name="login" options={{
            headerTitle: "Login Page",
            headerStyle:{
                backgroundColor: 'pink'
            }
        }}/>
        <Stack.Screen name="home" options={{
            headerTitle: "Home Page",
            headerStyle:{
                backgroundColor: 'pink'
            }
        }}/>
    </Stack>
  );
}
