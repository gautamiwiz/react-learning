import { useParams } from 'react-router';

import users from '../users.json';

export default function DynamicUrlParamsChildren() {
  const { id } = useParams();

  const member = users.find((user) => user.id.toString() === id);

  return <div>Member is {member ? member.name : 'Not found'}</div>;
}
