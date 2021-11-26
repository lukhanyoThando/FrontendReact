import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Custom-Header", "foobar");
  options.headers.set("Content-Range:posts 0-24/319");
  return fetchUtils.fetchJson(url, options);
};
const App = () => (
  <Admin
    dataProvider={simpleRestProvider("http://127.0.0.1:5000/", httpClient)}
  >
    <Resource name="posts" list={ListGuesser} />
  </Admin>
);

export default App;
