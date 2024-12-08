In React Router Dom v6, attempting to access the `useParams` hook outside of a component wrapped with `Route` or similar route elements will result in an error.  This is because `useParams` relies on the routing context provided by these elements.  The error might manifest as `undefined` values for parameters or a more explicit error message depending on how you're handling the result of `useParams`.  Example:
```javascript
// Incorrect usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Error: Cannot read properties of undefined (reading 'id')
  return <div>ID: {id}</div>;
}
```