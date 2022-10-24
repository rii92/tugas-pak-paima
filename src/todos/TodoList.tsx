import React from 'react'
import { Datagrid, List, TextField } from 'react-admin';

const TodoList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='userId' />
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='completed' />
      </Datagrid>
    </List>
  )
};

export default TodoList;