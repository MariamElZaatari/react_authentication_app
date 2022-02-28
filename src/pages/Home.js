import React, {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { UserContext } from '../context/UserContext'


export default function Home() {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      Hello {user.first_name}
  </div>
  )
}