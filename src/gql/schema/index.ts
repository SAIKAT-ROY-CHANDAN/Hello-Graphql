export const typeDefs = `#graphql
  type Product {
      id: ID!
      name: String
      image: String
      description: String
      price: Float
      quantity: Int
      onstock: Boolean
      category: String
  }

  type Query {
      products: [Product]
      product(productId: ID!): Product
  }
`;
