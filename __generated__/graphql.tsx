export type Maybe<T> = T | null;

export interface UserWhereInput {
  id: string;
}

export interface PostWhereInput {
  id: string;
}

export interface PostsWhereInput {
  userId: string;
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type GetPostVariables = {
  id: string;
};

export type GetPostQuery = {
  __typename?: "Query";

  post: GetPostPost;
};

export type GetPostPost = {
  __typename?: "Post";

  id: string;

  body: string;

  title: string;
};

export type GetUserVariables = {
  id: string;
};

export type GetUserQuery = {
  __typename?: "Query";

  user: GetUserUser;
};

export type GetUserUser = UserInfoFragment;

export type UserInfoFragment = {
  __typename?: "User";

  id: string;

  name: string;

  username: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Fragments
// ====================================================

export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    name
    username
  }
`;

// ====================================================
// Components
// ====================================================

export const GetPostDocument = gql`
  query GetPost($id: ID!) {
    post(where: { id: $id }) {
      id
      body
      title
    }
  }
`;
export class GetPostComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetPostQuery, GetPostVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetPostQuery, GetPostVariables>
        query={GetPostDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetPostProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPostQuery, GetPostVariables>
> &
  TChildProps;
export function GetPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPostQuery,
        GetPostVariables,
        GetPostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetPostQuery,
    GetPostVariables,
    GetPostProps<TChildProps>
  >(GetPostDocument, operationOptions);
}
export const GetUserDocument = gql`
  query GetUser($id: ID!) {
    user(where: { id: $id }) {
      ...UserInfo
    }
  }

  ${UserInfoFragmentDoc}
`;
export class GetUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetUserQuery, GetUserVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetUserQuery, GetUserVariables>
        query={GetUserDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetUserProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUserQuery, GetUserVariables>
> &
  TChildProps;
export function GetUserHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUserQuery,
        GetUserVariables,
        GetUserProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUserQuery,
    GetUserVariables,
    GetUserProps<TChildProps>
  >(GetUserDocument, operationOptions);
}
