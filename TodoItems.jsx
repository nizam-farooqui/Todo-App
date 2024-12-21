import styles from './TodoItmes.module.css'
import TodoItem from "../TodoItem";
const TodoItems=({todoItems,onDeleteClick})=>{
    return(
        <div className={styles.itemsContainers}>
        {todoItems.map((item)=>(
            <TodoItem
            key={item.name}
             todoDate={item.dueDate} 
             todoName={item.name} 
             onDeleteClick={onDeleteClick}></TodoItem>
            ))}
    </div>
    )
}
export default TodoItems;



// {/* <TodoItem todoName='Buy Milk' todoDate='4/10/2023'></TodoItem>
//     <TodoItem todoName='Go to College' todoDate='4/10/2023'></TodoItem>
//      */}