import React from 'react';

function UserProfile({ name, age, city }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {city}</p>
    </div>
  );
}

function UserData() {
  const userData = {
    name: 'Carlos',
    age: 27,
    city: 'Buenos Aires'
  };

  return (
    <section className="user-data">
      <h1>User Data</h1>
      <UserProfile {...userData} />
    </section>
  );
}

export default UserData;
