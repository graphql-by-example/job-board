export const resolvers = {
  Query: {
    job: () => {
      return {
        id: 'test-id',
        title: 'The Title',
        description: 'The description.',
      };
    },
  },
};
