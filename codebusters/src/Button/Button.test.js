import { render, screen } from '@testing-library/react';
import Button from './Button';

test("button rendered sucessfully",() =>{
  render(<Button label={'npm'}/>);
  const buttonNpm= screen.getByText('npm');
  expect(buttonNpm).toBeInTheDocument();
});
