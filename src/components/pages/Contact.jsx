import { useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const [formdata, SetFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.message) {
      toast.error("Please fill all fields");
      return;
    }
   if(validEmail.test(formdata.email)===false){
      toast.error("Please Enter Valid Email");
      return;
    }
    toast.success("Thank You");
    console.log(formdata);
    SetFormData({
      username: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="form-container">
      <label>
        Name
        <input
          name="username"
          type="text"
          value={formdata.username}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          value={formdata.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          type="text"
          value={formdata.message}
          onChange={handleChange}
          rows="5"
        ></textarea>
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
