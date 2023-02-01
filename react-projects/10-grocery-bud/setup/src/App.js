import React, { useState, useEffect, useReducer } from "react"
import List from "./List"
import Alert from "./Alert"

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItem = [...state.list, action.payload]
    return {
      ...state,
      list: newItem,
      alert: {
        show: true,
        msg: "add",
        type: "success",
      },
    }
  }
  if (action.type === "DELETE_ITEM") {
    const newItem = state.list.filter((item) => item.id !== action.payload)
    return {
      ...state,
      list: newItem,
      alert: {
        show: true,
        msg: "deleted",
        type: "danger",
      },
    }
  }

  if (action.type === "DELETE_ALL") {
    return {
      ...state,
      list: [],
      alert: {
        show: true,
        msg: "deleted",
        type: "danger",
      },
    }
  }

  if (action.type === "HANDLER_ALERT") {
    return {
      ...state,
      alert: {
        show: false,
        msg: "",
        type: "",
      },
    }
  }

  if (action.type === "EMPTY_INPUT") {
    return {
      ...state,
      alert: {
        show: true,
        msg: "input is empty",
        type: "danger",
      },
    }
  }

  if (action.type === "EDIT_INIT") {
    const edit = action.actionID
    return {
      ...state,
      editId: edit,
      isEditing: true,
    }
  }

  if (action.type === "EDIT") {
    console.log(action.type, action.actionID, action.actionName)
    const newList = state.list.map((item) => {
      if (item.id === state.editId) {
        console.log(item)
        return { ...item, title: action.actionName }
      }
      return item
    })
    return {
      ...state,
      list: newList,
      alert: {
        show: true,
        msg: "edit",
        type: "success",
      },
      isEditing: false,
    }
  }
}

const defaultState = {
  name: "",
  list: [],
  isEditing: false,
  editId: null,
  alert: {
    show: false,
    msg: "",
    type: "",
  },
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      dispatch({ type: "EMPTY_INPUT" })
      //handleAlert(true, "Input is empty", "danger")
    } else if (name && state.isEditing) {
      dispatch({ type: "EDIT", actionID: editID, actionName: name })
      // setList(
      // dispatch({ type: "EDIT", actionID: editID, actionName: name })
      // state.list.map((item) => {
      //   if (item.id === editID) {
      //     //console.log(item)
      //     //console.log(name)
      //     return { ...item, title: name }
      //   }
      //   return item
      // })
      // )
      handleAlert(true, "changed", "success")
      setName("")
      setIsEditing(false)
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      dispatch({ type: "ADD_ITEM", payload: newItem })

      //setList([...list, newItem])
      //handleAlert(true, "added", "success")
      //setName("")
    }
  }

  const handleAlert = (show = false, msg = "", type = "") => {
    ///setAlert({ show, msg, type })

    dispatch({ type: "HANDLER_ALERT" })
  }

  const deleteItem = (id) => {
    //handleAlert(true, "deleted", "danger")
    // setList(list.filter((item) => item.id !== id))
    dispatch({ type: "DELETE_ITEM", payload: id })
  }

  const clearAll = () => {
    dispatch({ type: "DELETE_ALL" })
    //handleAlert(true, "deleted", "danger")
    //setList([])
  }

  const editItem = (id, title) => {
    // dispatch({ type: "EDIT", actionID: id, actionName: name })
    //eItem = list.filter((item) => item.id === id)
    dispatch({ type: "EDIT_INIT", actionID: id })
    setIsEditing(true)
    // setEditId(id)
    setName(title)
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {state.alert.show && (
          <Alert {...state.alert} handleAlert={handleAlert} list={state} />
        )}
        {alert.msg}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="some value"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {state.isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {state.list.length > 0 && (
        <div className="grocery-container">
          <List
            items={state.list}
            editItem={editItem}
            deleteItem={deleteItem}
          />
          <button className="clear-btn" onClick={clearAll}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
