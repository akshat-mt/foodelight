import styled from "styled-components/native";
import React from "react";
import LottieView from "lottie-react-native"
import { AccountBackground, AccountCover } from "../components/account.styles";
import { Spacer } from "../../../Components/spacer/Space.components";
import { AccountContainer, AuthButton, Title } from "../components/account.styles";

 const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;


export const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
            <LottieView
                key="animation"
                autoPlay
                loop
                resizeMode="cover"
                source={require("../../../../assets/watermelon.json")}
            />
            </AnimationWrapper>
            <Title>Food Delight</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >Login</AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email-outline"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >Register</AuthButton>
                </Spacer>


            </AccountContainer>
        </AccountBackground>
    );

}