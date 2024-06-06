import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../AuthScreens/LoginScreen";
import SignUpScreen from "../AuthScreens/SignUpScreen";
import ForgotPasswordScreen from "../AuthScreens/ForgotPasswordScreen";
import OnBoarding from "../AuthScreens/OnBoarding";

const Auth = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='OnBoardingScreen' component={OnBoarding} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        </Stack.Navigator>
    )
};

export default Auth;