import React from "react";
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
import View from "./View"
import HomeView from "../home/HomeView"
import { useAuthToken } from "../auth/auth";

const GET_SONG_LIST = gql`
query get_song_list($access_token: String!) {
  songLists(query: {access_token: $access_token}) {
    singer
    song
    rank
    _id
  }
  }`;

function ListController(props) {

  // check access token is presented or not
  const [token, setAuthToken, removeAuthtoken] = useAuthToken();
  

 let { loading, error, data } = useQuery(GET_SONG_LIST,{
	    variables: { 
	    	access_token: token,
	     },
	 });

 if (error) return <HomeView warning/>;
 if (typeof(token) === 'undefined' || token === "") {
 		return <HomeView />;
 }
 return <View loading={loading} error={error}  data={ data } token={token} />
}
export default ListController;