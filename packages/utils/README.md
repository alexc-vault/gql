# Examples

https://studio.apollographql.com/sandbox/explorer

## Queries

### users

```graphql
query Users {
  users {
    id
    age(measurement: HOURS)
    firstName
    lastName
    groups {
      name
    }
  }
}
```

### userById
```graphql
query UserById {
  userById(id: 1) {
    id
    firstName
    lastName
  }
}
```

### error
```graphql
query Error {
  error {
    firstName
  }
}
```


## Mutations
### userById
```graphql
mutation UserCreate {
  userCreate(input: { firstName: "Alex", lastName: "Coulcher" }) {
    id
    firstName
    lastName
  }
}
```

