import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "./auth";
import { useHistory } from 'react-router-dom';

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
      }else{
        let path = `/?warning`;
        history.push(path);
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