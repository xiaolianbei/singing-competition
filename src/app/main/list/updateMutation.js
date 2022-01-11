import React from 'react';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useLogout } from "../auth/auth";

export const loginMutationGQL = gql`
  mutation updateVote($input: [SongInputInsertInput]) {
    updateVote(input:$input) {
      output
    }
  }
`;

export const useUpdateMutation = () => {

  const  logout= useLogout();

  const [mutation,mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      logout();
      return true;
    },
  });
  // full login function
  const updateVote = (vote) => {
    return mutation({
      variables: {
        input: vote
      },
    });
  }
  return [updateVote,mutationResults]
};