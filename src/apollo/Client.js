import ApolloClient from "apollo-boost";
import { resolvers, defaults } from "./LocalState";

export default new ApolloClient({
  uri: `http://localhost:7000/graphql`,
  //어디를 바라볼 것이냐 즉 어디로 신호를 줄 것이냐
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
  },
});
