### Stores

- **Context API + Flux Pattern**:

  - It did not work as expected, generating many rerenders.

- **Context API**:

  - The Context API with this configuration worked very well and did not cause any type of re-rendering.

- **Redux**:

  - I believe it is the most suitable for React, as it manages the application's re-renders more efficiently.

- **Vue.js**:

  - Vue handles re-renders better than React. Its reactive system does not allow for complex configurations like the Context API, which can result in "prop drilling." However, the re-renders are more controlled.

- **Pinia**:
  - Pinia, recommended by the official vue.js doc, is the best option for using stores in Vue.js. Besides being easy and practical to configure, it has no issues with re-renders.
