import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../AuthScreens/LoginScreen";
import SignUpScreen from "../AuthScreens/SignUpScreen";
import ForgotPasswordScreen from "../AuthScreens/ForgotPasswordScreen";
import OnBoarding from "../AuthScreens/OnBoarding";
import OtpScreen from "../AuthScreens/OtpScreen";
import ChangePasswordScreen from "../AuthScreens/ChangePasswordScreen";

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
            <Stack.Screen name='OtpScreen' component={OtpScreen}/>
            <Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} />
        </Stack.Navigator>
    )
};

export default Auth;