import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke Test
test('renders NewTodoForm component witout crashing', () => {
  render(<NewTodoForm />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
