# GQL with Al

## Get started

1. [Fork Me!](https://github.com/alexc-vault/gql/fork)

2. Install some stuff and initialise the repo

```shell
npm install
npm run init
```


DUMP
```graphql
query Users {
  users {
    id
    age
    firstName
    lastName
  }
}

fragment UserWithGroups on User {
    id
    age(measurement: YEARS)
    firstName
    lastName
    groups {
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
    groups @include(if: false) {
      name
    }
  }
}


mutation UserCreate {
  userCreate(input: { firstName: "Alex", lastName: "Cruncher", age: 36, groups: [0]}) {
    id
    firstName
    lastName
    groups {
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



```
