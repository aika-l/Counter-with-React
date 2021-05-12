import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <>
      <button onClick={props.func}>{props.btnName}</button>
    </>
  );
};

export default Button;

// import React from "react";

// const Button = (props) => {
//   return (
//     <>
//       <button onClick={props.func}>{props.btnName}</button>
//     </>
//   );
// };
// export default Button;
