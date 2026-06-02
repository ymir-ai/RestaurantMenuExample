# Junior 2 - React User Data

Proyecto basico de React para practicar componentes, props y destructuring.

## Componentes

- `UserData`: define un objeto `userData` y se lo pasa al perfil.
- `UserProfile`: recibe props y hace destructuring en los parametros:

```jsx
function UserProfile({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {city}</p>
    </div>
  );
}
```

## Como correrlo

```bash
cd junior2
npm install
npm run dev
```
