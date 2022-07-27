# GQL with Al

## Get started

1. [Fork Me!](https://github.com/alexc-vault/gql/fork)

2. Install some stuff and initialise the repo

```shell
npm install
npm run init
```

3. Prep your tools

- GraphQL client: https://studio.apollographql.com/sandbox/explorer
- v1 Endpoint: http://localhost:4001/graphql
- v2 Endpoint: http://localhost:4002/graphql

# Run some stuff!

All the examples are in `examples`

## Run v1

This is the 'Schema First' example using Apollo-Server

```shell
npm run start:v1
```

## Run v2

This is the 'Code First' example using Apollo-Server and TypeGraphQL

```shell
npm run start:v2
```

# Example Queries and Mutations
```graphql
query Users {
  users {
    id
    age
    firstName
    lastName
  }
}

query Error {
  error {
    firstName
  }
}

fragment UserWithGroups on User {
  id
  age(measurement: HOURS)
  firstName
  lastName
  Groups {
    id
    name
  }
}

query UsersWithFragment {
  users {
    ...UserWithGroups
  }
}

query UsersWithInbuiltDirective {
  users {
    id
    Groups @include(if: false) {
      name
    }
  }
}


mutation UserCreate {
  userCreate(input: { firstName: "Alex", lastName: "Cruncher", age: 36, groups: [0]}) {
    id
    firstName
    lastName
    Groups {
      id
      name
    }
  }
}

query Groups {
  groups {
    id
    name
  }
}

query GroupById {
  groupById(id: 0) {
    id
    name
  }
}
```
