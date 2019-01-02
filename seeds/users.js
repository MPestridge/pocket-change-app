
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert([{
          id: 1,
          admin: true,
          name: 'Joe Robbins',
          user_name: 'JRobs',
          password: 'password',
          created_at: new Date ('year-mm-dd hh-mm-ss UTC'),
          updated_at: new Date ('year-mm-dd hh-mm-ss UTC')
        }])
      ])
    });
};
