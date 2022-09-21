import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import utilities from "./tailwind.json";
import RootNav from "./Nav/RootNav";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/flippant-poodle",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNav />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
