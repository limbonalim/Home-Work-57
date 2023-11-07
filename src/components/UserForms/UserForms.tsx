import React, {useState} from 'react';
import {User} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForms: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<User>({
    name: '',
    mail: '',
    active: false,
    role: 'user',
  });
  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const changeUserFromCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prevState => ({
      ...prevState,
      [event.target.name]: event.target.checked
    }));
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your name:
        </label>
        <input
          required={true}
          className="form-control"
          placeholder="Jhon Doe"
          name="name"
          id="name"
          onChange={changeUser}
          value={user.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">Email address:</label>
        <input
          required={true}
          type="email"
          className="form-control"
          placeholder="name@example.com"
          name="mail"
          id="mail"
          onChange={changeUser}
          value={user.mail}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Select your role:</label>
        <select
          id="role"
          name="role"
          className="form-select"
          onChange={changeUser}
          value={user.role}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="active">Online</label>
        <input
          type="checkbox"
          className="form-check-input"
          id="active"
          name="active"
          onChange={changeUserFromCheckbox}
          checked={user.active}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UserForms;