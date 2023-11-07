import {useState} from 'react';
import UserForms from '../components/UserForms/UserForms';
import {User} from '../types';
import Users from '../components/Users/Users';
import UserItem from '../components/Users/UserItem';


const App = () => {
  const [users, setUsers] = useState<User[]>([
    {name: 'name', role: 'editor', active: false, mail: 'mail'}
  ]);
  const onSubmit = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };
  return (
    <div className="container d-flex justify-content-between">
      <UserForms onSubmit={onSubmit}/>
      <Users>
        {users.map((user, index) => (<UserItem key={index} user={user}/>))}
      </Users>

    </div>
  );
};

export default App;
