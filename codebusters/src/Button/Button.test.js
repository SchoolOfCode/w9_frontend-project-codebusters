import { render, screen } from '@testing-library/react';
import Button from './Button';

const mockfunction = jest.fn()

test("button rendered sucessfully",() =>{
render(<Button label={'npm'} topicType={mockfunction}/>);
  const buttonNpm= screen.getByText('npm');
  expect(buttonNpm).toBeInTheDocument();
});
