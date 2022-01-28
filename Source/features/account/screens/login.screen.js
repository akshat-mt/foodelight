import React, { useState, useContext } from "react";
import { Spacer } from "../../../Components/spacer/Space.components";

import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import { AccountBackground, AuthButton, AccountCover, AccountContainer, AuthInput, Title, ErrorContainer } from "../components/account.styles";
// import { Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
// import { Text } from "../../../Components/typography/text.components";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);
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
                {error && (
                    <ErrorContainer size="large">
                        <Text style={style.Text}>{error}</Text>
                    </ErrorContainer>
                )}

                <Spacer size="large">
                    {!isLoading ? (
                        <AuthButton
                            icon="lock-open-outline"
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton>
                    ) : (
                        <ActivityIndicator animating={true} color={Colors.blue300} />
                    )}
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
    Text: {
        color: "red",
        marginTop: 0,
        marginBottom: 0,
        fontWeight: "bold",
        fontFamily: "monospace"
    }
})