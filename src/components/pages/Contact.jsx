import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const[sendingData,setSendingData]=useState(false);
  const [formdata, SetFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
      toast.error("Please fill all fields",{
        toastId:'fields-error'
      });
      return;
    }
    if(validEmail.test(formdata.email)===false){
      toast.error("Please Enter Valid Email",{
        toastId:'invalid-mail-error'
      });
      return;
    }   
    setSendingData(true);
    emailjs
    .send(
      "portfolio-emails",
      "template_umxt8pg",
      formdata,
      "QuI9cWbvUDeg9LULJ",
    )
    .then((result)=>{
      toast.success("Form submitted successfully",{
        toastId:'success-toast'
      });
      SetFormData({username: "",email: "",message: "",})
    }).catch((error)=>{
      toast.error("Try again!");
    })
    .finally(()=>{
      setSendingData(false);
    })
  };
  return (<>
  <div className="my-1">
      <h2 >Let’s Connect!</h2>
      </div>
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
      <button onClick={handleSubmit} disabled={sendingData} >
      {sendingData?"Sending...":"Submit"}</button>
    </div>
    </>
  );
};

export default Contact;
