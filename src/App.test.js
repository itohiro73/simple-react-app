import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('update text after clicking button', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const button = container.querySelector('button');
  const text = container.querySelector('p');
  expect(text.textContent).toBe('This text will be changing');

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(text.textContent).toBe('Button is Clicked!');
});