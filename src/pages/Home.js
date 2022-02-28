import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext'


export default function Home() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      Hello {user.first_name}
  </div>
  )
}