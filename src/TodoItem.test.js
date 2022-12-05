import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

// Smoke Test
test('renders TodoItem component witout crashing', () => {
  render(<TodoItem />);
});

// Snapshot Test
test('render matches snapshot', () => {
  const { asFragment } = render(<TodoItem />);
  expect(asFragment()).toMatchSnapshot();
});
