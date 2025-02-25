export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: 'test-id-1',
          title: 'The Title 1',
          description: 'The description.',
        },
        {
          id: 'test-id-2',
          title: 'The Title 2',
          description: 'The description.',
        },
      ];
    },
  },
};
