### Stores

- **React Prop Drilling**:

  - Prop drilling is a common problem in React applications. It can be solved by using the Context API or Redux. However, the Context API can generate many re-renders, so it is recommended to use Redux. Prop drilling cause re-renders too.

- **Context API**:

  - The use of the Context API can result in many re-renders. In these cases, it is more appropriate to choose Redux or another state management library. However, it is essential to conduct prior tests to evaluate the impact of re-renders on the application. In this case, the Context API is not recommended to be used as a store.

- **Context API + Flux Pattern**:

  - It did not work as expected, generating many re-renders.

- **Redux**:

  - I believe it is the most suitable for React, as it manages the application's re-renders more efficiently.

- **Vue.js Prop Drilling**:

  - Vue handles re-renders better than React. Its reactive system does not allow for complex configurations like the Context API, which can result in "prop drilling." However, the re-renders doens't happen.

- **Pinia**:
  - Pinia, recommended by the official vue.js doc, is the best option for using stores in Vue.js. Besides being easy and practical to configure, it has no issues with re-renders.
