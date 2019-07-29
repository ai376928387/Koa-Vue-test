const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const GadgetType = new GraphQLObjectType({
  name: 'Gadget',
  fields: () => ({

  })
});

module.exports = GadgetType;