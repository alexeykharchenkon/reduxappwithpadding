import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import { Todo } from '@common/types/types';
import { AddTodo } from '@components/AddTodo';
import { TodoList } from '@components/TodoList';
import { useStyles } from '@styles/material';
import Typography from '@material-ui/core/Typography';
import { TodosFilter } from '@components/TodosFilter';
import { mapStateToProps, mapDispatchToProps } from '@services/initAppProps';
import { Paginate } from '@components/Paginate';
import '@styles/main.css';


interface AppProps {
    todosCount: number;
    filter: any;
    todosActions: any;
    filterActions: any;
    pageActions: any;
    itemsPerPage: any;
    pageTodos: Todo[];
}

const App = ({todosCount, todosActions, filterActions, filter, itemsPerPage, pageActions, pageTodos} : AppProps) => {
  const classes = useStyles();
  const { addTodo, toggleTodo, deleteTodo, loadTodos, deleteAllTodos } = todosActions;
  const { setFilter } = filterActions;
  const { changePage } = pageActions;

  useEffect(() => { loadTodos(todosCount, 5) }, []);

  return (
    <div className="main">
      <Card className={classes.todoList}>
        <Typography variant="h4">Todo List</Typography>
        <TodosFilter setFilter={setFilter} filter={filter} />
        <TodoList 
          todos={pageTodos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
       <Paginate
          pageCount={todosCount/+itemsPerPage}
          changePage={changePage}
       />
      </Card>
      <Card className={classes.addTodo}>
          <AddTodo 
            addTodo={addTodo} 
            loadTodos={loadTodos}
            deleteAllTodos={deleteAllTodos}
            todosCount={todosCount}
          />
      </Card>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)