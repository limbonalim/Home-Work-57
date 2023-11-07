import {useState} from 'react';
import UserForms from '../components/UserForms/UserForms';
import {User} from '../types';


const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const onSubmit = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
    console.log(user)
  }
  return (
      <>
          <UserForms onSubmit={onSubmit}/>
      </>
  );
};

export default App
