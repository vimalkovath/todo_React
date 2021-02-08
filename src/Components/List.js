import React , { useContext }from 'react';

import { TodoContext } from "../TodoContext";

export default function List() {

    const [list] = useContext(TodoContext);

    console.log(list,"list")

  return (
    <>

{list.length > 0 &&

list.map((item, index) => (
    <li
        key={index}
    >
        {item}
    </li>
))

}
    
    </>
  );
}
