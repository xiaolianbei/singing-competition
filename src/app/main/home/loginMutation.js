import React from 'react';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "../auth/auth";
import { useHistory } from 'react-router-dom';
import View from "./HomeView"


export const loginMutationGQL = gql`
  mutation login($email: String!, $code: String!) {
    login(input: { email: $email,code:$code }) {
      token
    }
  }
`;

export const useLoginMutation = () => {
  
  let history = useHistory();

  const [_, setAuthToken, removeAuthtoken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      if(data.login!==null){
        setAuthToken(data.login.token);
        let path = `/list`;
        history.push(path);
        return
      }else{
       return <View warning={true}/>
      }
    },
  });

  // full login function
  const login = (email, code) => {
    removeAuthtoken();
    return mutation({
      variables: {
        email: email,
        code: code,
      },
    });
  }
  return [login, mutationResults]
};