import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { Spacer } from "../../../Components/spacer/Space.components";
import {Text} from "../../../Components/typography/text.components"
import { AuthenticationContext } from "../../../Services/Authentication/authentication.context";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout ,user} = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
    <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
};