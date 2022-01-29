import React, { useState, useContext } from "react";
import { Spacer } from "../../../Components/spacer/Space.components";
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import { AccountBackground, AuthButton, AccountCover, AccountContainer, AuthInput, Title, ErrorContainer } from "../components/account.styles";
// import { Text } from "react-native";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
export const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error , isLoading } = useContext(AuthenticationContext);
   
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </Spacer>
                {error && (
                    <ErrorContainer size="large">
                        <Text style={style.Text}>{error}</Text>
                    </ErrorContainer>
                )}

                <Spacer size="large">
                  <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={() => onRegister(email, password, repeatedPassword)}
                >
                  Register
                </AuthButton>
              
                </Spacer>
            </AccountContainer> 
            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );

}

const style = StyleSheet.create({
  Text : {
      color : "red",
      marginTop : 0,
      marginBottom : 0,
      fontWeight : "bold",
      fontFamily : "monospace"
  }
})