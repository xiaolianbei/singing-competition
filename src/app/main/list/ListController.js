import React from "react";
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
import View from "./View"
import FinalView from "./FinalView"
import HomeView from "../home/HomeView"
import { useAuthToken } from "../auth/auth";

const GET_SONG_LIST = gql`
query get_song_list($access_token: String!,$revieweremail: String!) {
  songLists(query: {access_token: $access_token, revieweremail: $revieweremail}) {
    SongName
    SongLink
    rank
    _id
  }
  }`;

function ListController(props) {

  // check access token is presented or not
  const [cookie] = useAuthToken();
  
  let token = "";
  let email = "" 
  if(cookie && cookie!==null){
    token = cookie.split('&&')[0];
    email = cookie.split('&&')[1];
  }

 let { loading, error, data } = useQuery(GET_SONG_LIST,{
	    variables: { 
	    	access_token: token,
        revieweremail: email
	     },
	 });

 if (error) return <HomeView warning/>;
 if (typeof(token) === 'undefined' || token === "") {
 		return <HomeView />;
 }
 if(Date.now() < new Date(2022, 1, 14, 21, 0, 0) ) {
     return <View loading={loading} error={error}  data={ data } token={token} />
 }
 return <FinalView loading={loading} error={error}  data={ data } token={token} />
}
export default ListController;