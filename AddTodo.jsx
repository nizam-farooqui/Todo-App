import { useState,useRef } from "react";
import { BiSolidCommentAdd } from "react-icons/bi";

function AddTodo({onNewItem}){
  // let [itemName,setItemName]=useState("");
  // let [itemDate,setItemDate]=useState("");
  let TodoElementName=useRef()
  let TodoElementDate=useRef()


  // let fetchName=(event)=>{
  //   setItemName(event.target.value)
  //   noOfUpdates.current+=1;

  // }

  // let fetchDate=(event)=>{
  //   setItemDate(event.target.value)
  //   console.log(noOfUpdates.current)
  // }

  let handleAddButtonClicked=(event)=>{
    event.preventDefault()
    let itemName=TodoElementName.current.value
    let itemDate=TodoElementDate.current.value
    TodoElementDate.current.value="";
    TodoElementName.current.value="";
    onNewItem(itemName,itemDate);
    // setItemDate("");
    // setItemName("");
  }

    return(
        <div className="container text-center">
  <form onSubmit={handleAddButtonClicked} className="row kg-row">
  <div className="col-6">
    <input type="text" 
    ref={TodoElementName}
    placeholder="Enter Todo Here"
    />
    </div>
    <div className="col-4">
      <input type="date"
      ref={TodoElementDate} />
    </div>
    <div className="col-2">
    <button className="btn btn-success kg-button"
    type="submit"//bydefault bhi submit hi rahega
    // onClick={handleAddButtonClicked}
    ><BiSolidCommentAdd /></button>
      </div>
      </form>
  </div>
    )

}
export default AddTodo;