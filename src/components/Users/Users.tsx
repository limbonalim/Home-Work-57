import React from 'react';

interface Props extends React.PropsWithChildren {

}

const Users: React.FC<Props> = ({children}) => {
  return (
    <div className="col-6 border border-secondary rounded-3 px-3 py-1">
      <div className="text-uppercase fs-3 fw-bold text-body-tertiary">All Users:</div>
      {children}
    </div>
  );
};

export default Users;