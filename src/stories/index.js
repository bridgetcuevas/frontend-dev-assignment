import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import App from '../App';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

storiesOf('App', module)
.add('default', () => <App/>)


storiesOf('SearchForm', module)

  .add('default', () => <SearchForm/>)
  .add("on focus", () => <SearchForm onFocus={action('focus')} />)
  .add("on blur", () => <SearchForm onBlur={action('blur')} />)


storiesOf('SearchForm/input', module)

  .add('default', () => <SearchForm/>)
  .add("with text", () => <SearchForm value="trui" />)
  .add("with no text", () => <SearchForm value="" />)
  .add("on Change ", () => <SearchForm onFocus={action('change')} />)
  .add("on Mouse Down", () => <SearchForm onBlur={action('mousedown')} />)
  .add("on Key Up ", () => <SearchForm onFocus={action('keyup')} />)


storiesOf('SearchList', module)  
 
  .add('default', () => <SearchList/>)





 