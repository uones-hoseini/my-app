import React, { useState } from "react"
import "./MyForm.css"
function MyForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    weight: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
  }

  return (
    <div className="form-control">
      <h1>Create Your Order</h1>

      <form className="form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" name="weight" />
 <br/>
        <button id="btn" color="blue">Submit</button>
      </form>
    </div>
  )
}

export default MyForm
