import { render, screen } from '@testing-library/react';
import Input from './Input.js';



test("check component renders an input",() =>{
render(<Input text={'space'}/>);
  const inputField = screen.getByPlaceholderText('Ask the Oracle');
  expect(inputField).toBeInTheDocument();
});
