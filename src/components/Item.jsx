import React from "react";

function Item(props) {
  function handleClick() {
    //  console.log(props.id);
    props.ohio(props.id);
  }
  return (
    <div onClick={handleClick}>
      <li>{props.listItem}</li>
    </div>
  );
}

export default Item;
