import React, { useReducer, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const defaultState = {
  username: "",
  usernameBool: false,
  password: "",
  passwordBool: false,
  age: 0,
  ageBool: false,
  gender: "",
  genderBool: false,
  registered: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "USERNAME":
      //state.username = action.payload
      return {
        ...state,
        username: action.payload,
        usernameBool: action.payload === "user" ? true : false,
      }
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
        passwordBool: action.payload === "123456" ? true : false,
      }

    case "AGE":
      return {
        ...state,
        age: action.payload,
        ageBool: action.payload === "18-30" ? true : false,
      }

    case "GENDER":
      return {
        ...state,
        gender: action.payload,
        genderBool: action.payload === "male" ? true : false,
      }
    case "SUBMIT":
      return {
        username: "",
        usernameBool: false,
        password: "",
        passwordBool: false,
        age: 0,
        ageBool: false,
        gender: "",
        genderBool: false,
      }
    case "REGISTER":
      return {
        ...state,
        registered: true,
      }
    case "CLEAR":
      return {
        ...state,
        registered: false,
      }

    default:
      throw new Error()
  }
}

function MyForm() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  let b =
    state.usernameBool === true &&
    state.passwordBool === true &&
    state.ageBool === true &&
    state.genderBool === true

  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value

    if (name === "username") {
      dispatch({ type: "USERNAME", payload: value })
    }

    if (name === "password") {
      dispatch({ type: "PASSWORD", payload: value })
    }

    if (e.target.nodeName === "SELECT") {
      dispatch({ type: "AGE", payload: value })
    }

    if (name === "gender") {
      dispatch({ type: "GENDER", payload: value })
    }
  }

  function submitForm(e) {
    e.preventDefault()
    dispatch({ type: "SUBMIT" })
    dispatch({ type: "REGISTER" })
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CLEAR" })
    }, 2000)
  }, [state.registered])

  return (
    <>
      {state.registered && (
        <h2 style={{ color: "green" }}>You have been register</h2>
      )}
      <Form onSubmit={submitForm}>
        <div className="form-item">
          <Form.Label
            htmlFor="username"
            className={state.usernameBool ? "noerror" : "error"}
          >
            Username
          </Form.Label>
          <Form.Control
            type="text"
            id="username"
            name="username"
            aria-describedby="username"
            value={state.username}
            onChange={handleChange}
          />
          <Form.Text id="username" muted>
            Your username can contain only fife letters
          </Form.Text>
        </div>
        <div className="form-item">
          <Form.Label
            htmlFor="password"
            className={state.passwordBool ? "noerror" : "error"}
          >
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            aria-describedby="password"
            onChange={handleChange}
          />
          <Form.Text id="password" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </div>
        <div className="form-item">
          <Form.Label className={state.ageBool ? "noerror" : "error"}>
            Please select your Age
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ textAlign: "center" }}
            onChange={handleChange}
          >
            <option name="option" value="18-30" defaultValue>
              -
            </option>
            <option name="option" value="18-30">
              18-30
            </option>
            <option name="option" value="31-50">
              31-50
            </option>
            <option name="option" value="51+">
              51+
            </option>
          </Form.Select>
        </div>
        <div className="form-item">
          <Form.Label
            htmlFor="username"
            className={state.genderBool ? "noerror" : "error"}
          >
            Your Gender
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                name="gender"
                type={type}
                id="male"
                label="male"
                value="male"
                onChange={handleChange}
              />
              <Form.Check
                inline
                name="gender"
                type={type}
                id="female"
                label="female"
                value="female"
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {b === true ? (
          <Button variant="primary" type="submit">
            Register
          </Button>
        ) : (
          <Button variant="primary" type="submit" disabled>
            Register
          </Button>
        )}
      </Form>
    </>
  )
}

export default MyForm
