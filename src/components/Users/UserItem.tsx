import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="row">
      <span>{user.name}</span>
      <span>{user.mail}</span>
      <span>{user.role}</span>
    </div>
  );
};

export default UserItem;