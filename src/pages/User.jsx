export default function UserComponent({ userData }) {
  return (
    <div className="card">
      <h2 className="name">{userData.name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{userData.age}</div>
        <div className="label">Phone:</div>
        <div>{userData.phone}</div>
        <div className="label">Address:</div>
        <div>{userData.address}</div>
      </div>
    </div>
  );
}
