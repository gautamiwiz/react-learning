import users from '../users.json';
import UserComponent from './User';

export default function UsersMultiple() {
  return (
    <>
      {console.log(users)}
      {users.map((user) => (
        <UserComponent key={user.id} userData={user} />
      ))}
    </>
  );
}
