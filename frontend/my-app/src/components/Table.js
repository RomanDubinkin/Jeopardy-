import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import TodoItems from './TodoItems';
import styles from '../css/list.module.css'

const TodoList = () => {

  const todos = useSelector((store) => store.todos); //забираем данные из внешнего стора

  return (
    <div className={styles.listwrapper}>
      <ol>
        {todos.map((todo) => (
          <Theme key={todo.id} todo={todo} />
        ))}
      </ol>
    </div>
  );
};

export default memo(TodoList);
