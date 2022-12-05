import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke Test
test('renders TodoList component witout crashing', () => {
  render(<TodoList />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Add Box to BoxList
function addTodo(todo = 'wash car', id = 1) {
  const todoInput = screen.getByLabelText(/Enter Todo:/i);
  fireEvent.change(todoInput, { target: { value: todo } });

  const button = screen.getByText('Add Todo');
  fireEvent.click(button);
}

test('add Todo Item', () => {
  render(<TodoList />);
  expect(screen.queryByText('X')).not.toBeInTheDocument();
  addTodo();
  expect(screen.getByText('X')).toBeInTheDocument();
});

test('remove Todo Item', () => {
  render(<TodoList />);
  addTodo();
  // get remove button
  const removeTodoBtn = screen.queryByText('X');
  // fire event to remove the box
  fireEvent.click(removeTodoBtn);
  expect(removeTodoBtn).not.toBeInTheDocument();
});
