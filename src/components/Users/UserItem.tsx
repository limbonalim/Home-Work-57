import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  const indicatorSize: React.CSSProperties = {
    height: '13px',
    width: '13px',
  };
  const indicatorStatus = ['rounded-circle', 'bg-opacity-75'];
  if (user.active) {
    indicatorStatus.push('bg-success');
  } else {
    indicatorStatus.push('bg-danger');
  }
  return (
    <div className="row border border-primary-subtle rounded-2 mb-1 p-1">
      <div className="d-flex ">
        <div className="col-7 text-nowrap flex-grow-1">Name: {user.name}</div>
        <div style={indicatorSize} className={indicatorStatus.join(' ')}></div>
      </div>
      <div className="row">
        <span className="text-nowrap">Mail: {user.mail}</span>
      </div>
      <span className="text-nowrap">Role: {user.role}</span>
    </div>
  );
};

export default UserItem;