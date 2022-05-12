import React,{useState} from "react";


const List=()=>{
    let [todo,setTodo]=useState("")
    let [list,setList]=useState([])
    let [isDone,setIsDone]=useState(false)

    const submit=(e)=>{
        e.preventDefault()
        let todoObj={todo,isDone}
        setList([...list,todoObj])
    }

    const change=(e,i)=>{
        let [...newList]=list
        newList[i].isDone=e.target.checked
        setList(newList)
        console.log(newList)
    }

    const remove=(i)=>{
        let newList= list.filter((item,idx)=>{
            return idx != i
        })
        setList(newList)
    }

    return(
        <>
            <form onSubmit={submit}>
                <input onChange={(e)=>(setTodo(e.target.value))} type="text" name="todo"/> 
                <input className="m-2" type="submit" value="Add" />
            </form>
            <hr />
            <h2>List</h2>
            {list.map((todoObj,i)=>{
                return(
                    <>
                    <div style={{textDecoration: todoObj.isDone? 'line-through':'unset'}} key={i}> 
                        {todoObj.todo} 
                        <input className="m-2" onChange={(e)=>change(e,i)} type="checkbox" name="" />
                        <button onClick={()=>remove(i)}>Delete</button>
                    </div>
                    
                    </>
                )
            })}
        </>
    )
}

export default List