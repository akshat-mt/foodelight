import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../Services/location/location.context";
import { useContext , useState ,useEffect } from "react";

const SearchContainer = styled.View`
padding : ${(props) => props.theme.space[3]};
background-color : ${(props) => props.theme.colors.bg.primary};
`;



export default Search = () => {
    const {keyword , search} = useContext(LocationContext);
    const [searchKeyword , setsearchKeyword] = useState(keyword);
    
    return (
        <SearchContainer>
            <Searchbar placeholder='search location' 
            value={searchKeyword}
            onSubmitEditing={() => {
                search(searchKeyword)
            }}
            onChangeText={(text) => {
                setsearchKeyword(text);
            }}
            />
        </SearchContainer>
    )
}