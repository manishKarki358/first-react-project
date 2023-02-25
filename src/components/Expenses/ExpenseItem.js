import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {
//STATE

  // useState returns array with two elements so destructuring
 /*  destructuring such as title refers to current value and setTitle refers
  to function for updating state or values */

  /* const [title,setTitle]=useState(props.title)
  const [amount,setAmount]=useState(props.amount)
  const clickHandler=()=>{
    setAmount("bankrupt")
    setTitle('updated title')
    console.log("clicked!!!!!!!!!!");
  } */
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
   {/*  <button onClick={clickHandler}>change title</button> */}
    </Card>
  );
}

export default ExpenseItem;