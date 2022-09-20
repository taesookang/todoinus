import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddTodo?: Maybe<Todo>;
  createRoom?: Maybe<Room>;
  createUser?: Maybe<User>;
  updateUserImage?: Maybe<User>;
};


export type MutationAddTodoArgs = {
  todo: TodoInput;
};


export type MutationCreateRoomArgs = {
  name: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateUserImageArgs = {
  id: Scalars['String'];
  imageFile?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type Query = {
  __typename?: 'Query';
  roomById?: Maybe<Room>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  todosByProjectId?: Maybe<Array<Maybe<Todo>>>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryRoomByIdArgs = {
  id: Scalars['String'];
};


export type QueryRoomsArgs = {
  userId: Scalars['String'];
};


export type QueryTodosByProjectIdArgs = {
  projectId: Scalars['String'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};

export type Room = {
  __typename?: 'Room';
  id?: Maybe<Scalars['ID']>;
  members?: Maybe<Array<Maybe<User>>>;
  name?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Project>>>;
};

export type Todo = {
  __typename?: 'Todo';
  content?: Maybe<Scalars['String']>;
  done_by?: Maybe<User>;
  id?: Maybe<Scalars['ID']>;
  project?: Maybe<Project>;
};

export type TodoInput = {
  content: Scalars['String'];
  projectId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  done_todos?: Maybe<Array<Maybe<Todo>>>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<Room>>>;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, image?: string | null, rooms?: Array<{ __typename?: 'Room', name?: string | null } | null> | null } | null };

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQuery = { __typename?: 'Query', userByEmail?: { __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, image?: string | null } | null };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id?: string | null, name?: string | null, email?: string | null, image?: string | null } | null> | null };

export type RoomsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type RoomsQuery = { __typename?: 'Query', rooms?: Array<{ __typename?: 'Room', id?: string | null, name?: string | null, projects?: Array<{ __typename?: 'Project', id?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id?: string | null } | null> | null } | null> | null };

export type RoomByIdQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type RoomByIdQuery = { __typename?: 'Query', roomById?: { __typename?: 'Room', name?: string | null, members?: Array<{ __typename?: 'User', id?: string | null } | null> | null } | null };


export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $name: String!, $password: String!) {
  createUser(email: $email, name: $name, password: $password) {
    id
    name
    email
    image
    rooms {
      name
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  userByEmail(email: $email) {
    id
    name
    email
    image
  }
}
    `;

/**
 * __useUserByEmailQuery__
 *
 * To run a query within a React component, call `useUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
      }
export function useUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByEmailQuery, UserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByEmailQuery, UserByEmailQueryVariables>(UserByEmailDocument, options);
        }
export type UserByEmailQueryHookResult = ReturnType<typeof useUserByEmailQuery>;
export type UserByEmailLazyQueryHookResult = ReturnType<typeof useUserByEmailLazyQuery>;
export type UserByEmailQueryResult = Apollo.QueryResult<UserByEmailQuery, UserByEmailQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  users {
    id
    name
    email
    image
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const RoomsDocument = gql`
    query Rooms($userId: String!) {
  rooms(userId: $userId) {
    id
    name
    projects {
      id
    }
    members {
      id
    }
  }
}
    `;

/**
 * __useRoomsQuery__
 *
 * To run a query within a React component, call `useRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRoomsQuery(baseOptions: Apollo.QueryHookOptions<RoomsQuery, RoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoomsQuery, RoomsQueryVariables>(RoomsDocument, options);
      }
export function useRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoomsQuery, RoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoomsQuery, RoomsQueryVariables>(RoomsDocument, options);
        }
export type RoomsQueryHookResult = ReturnType<typeof useRoomsQuery>;
export type RoomsLazyQueryHookResult = ReturnType<typeof useRoomsLazyQuery>;
export type RoomsQueryResult = Apollo.QueryResult<RoomsQuery, RoomsQueryVariables>;
export const RoomByIdDocument = gql`
    query RoomById($roomId: String!) {
  roomById(id: $roomId) {
    name
    members {
      id
    }
  }
}
    `;

/**
 * __useRoomByIdQuery__
 *
 * To run a query within a React component, call `useRoomByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomByIdQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useRoomByIdQuery(baseOptions: Apollo.QueryHookOptions<RoomByIdQuery, RoomByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoomByIdQuery, RoomByIdQueryVariables>(RoomByIdDocument, options);
      }
export function useRoomByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoomByIdQuery, RoomByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoomByIdQuery, RoomByIdQueryVariables>(RoomByIdDocument, options);
        }
export type RoomByIdQueryHookResult = ReturnType<typeof useRoomByIdQuery>;
export type RoomByIdLazyQueryHookResult = ReturnType<typeof useRoomByIdLazyQuery>;
export type RoomByIdQueryResult = Apollo.QueryResult<RoomByIdQuery, RoomByIdQueryVariables>;