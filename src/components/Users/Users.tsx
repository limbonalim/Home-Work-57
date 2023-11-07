import React from 'react';

interface Props extends React.PropsWithChildren {

}

const Users: React.FC<Props> = ({children}) => {
  return (
    <div className="col-6">
      {children}
    </div>
  );
};

export default Users;