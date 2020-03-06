import * as React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders the app correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
