import { bindActionCreators } from 'redux';
import * as todosActions from '@store/actionCreators/todosActions';
import * as filterActions from '@store/actionCreators/filterActions';
import * as pageActions from '@store/actionCreators/pageActions';
import { Todo } from '@common/types/types';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '@store/actions/actionFilterTypes';


export const getVisibleTodos = (todos: Todo[], filter: any) => {
      switch (filter) {
      case SHOW_ALL: return todos
      case SHOW_COMPLETED: return todos.filter(t => t.completed)
      case SHOW_ACTIVE: return todos.filter(t => !t.completed)
      default: throw new Error('Unknown filter: ' + filter)
    }
}

const getTodosForPage = (todos: Todo[], filter: any, itemsPerPage: number, page: number) => {
      const from = page * itemsPerPage;
      const to = from + itemsPerPage; 

      return getVisibleTodos(todos, filter).slice(from, to);
}
  
export const mapStateToProps = (state: any) => ({
      todosCount: getVisibleTodos(state.todosState.todos, state.filterState).length,
      filter: state.filterState,
      itemsPerPage: state.pageState.itemsPerPage,
      pageTodos: getTodosForPage(state.todosState.todos, state.filterState, state.pageState.itemsPerPage, state.pageState.page)
});

 export const mapDispatchToProps = (dispatch: any) => ({
      todosActions: bindActionCreators(todosActions, dispatch),
      filterActions: bindActionCreators(filterActions, dispatch),
      pageActions: bindActionCreators(pageActions, dispatch)
});