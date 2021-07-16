import React from 'react';

function FirstPage (props) {
  console.log(`props in the FirstPage: ${props}`);

  return (
    <div>
      <p>This is the first page</p>
      <code>In path: {props.match.path}</code>
    </div>
  );
};

export default FirstPage;
