import { render, screen } from '@testing-library/react';
import Button from './Button';

const mockfunction = jest.fn()

test("button clicks when onClick is called",() =>{
render(<Button label={'npm'} topicType={mockfunction}/>);
  const linkElement = screen.getByText('npm');
  expect(linkElement).toBeInTheDocument();
});
