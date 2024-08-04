// eslint-disable-next-line no-undef
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

// eslint-disable-next-line no-undef
db.createCollection('persons');

// eslint-disable-next-line no-undef
db.persons.insert({
  name: 'Angel',
  number: '323-321-3421',
});
// eslint-disable-next-line no-undef
db.persons.insert({
  name: 'Emilia',
  number: '123-321-3421',
});
