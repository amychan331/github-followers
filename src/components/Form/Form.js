import React from 'react';
import './Form.css';


const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label htmlFor="githuHandle">
      Enter the Github handle name:
    </label>
    <input id="githubHandle" name="githubHandle" type="text" placeholder="Github Handle" value={props.value} onChange={props.handleChange} autoFocus required />
    <input type="submit" value="Search" />
  </form>
);

export default Form;