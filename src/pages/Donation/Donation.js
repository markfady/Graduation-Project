import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import "./Donation.css";
import mastervisa from "../../assets/images/mastervisa.jpg";

function Donation() {

  const initialvalues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target; // we need name of input and it's value where are located in e.target
    setFormValues({ ...formValues, [name]: value });
  };
  const handlesubmit = (e) => {
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regex.test(values.email)) {
      errors.email = "Enter Valid E-mail!";
    }
    if (values.password.length <= 4) {
      errors.password = "Password must be more  than 4";
    } else if (values.password.length > 30) {
      errors.password = "Password cannot exceed  30 characters";
    }
    return errors;
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const showValue = function (val) {
    document.getElementById("pressed").value = parseInt(val);
  };

  return (
    <div class="donation">
      <SectionHeader
        smallTitle="Donation Service"
        bigTitle="Help with us by Donating"
        description="Donations are 100% aimed to help handicapped people"
      />
      <h2 className="donation-title">How you want to give?</h2>

      <div id="boxes" className="row justify-content-around">
        {/* Left Section */}
        <div className="col-5 text-center">
          <button className="button1" onClick={() => setShow(!show)}>
            {show === true ? "Donate With Money" : "Donate With Money"}
            <i className="fa-solid fa-hand-holding-dollar fa-lg"></i>
          </button>{" "}
          {show && (
            <div className="Money">
              <form 
              action="http://localhost:8000/Payment.php"
              method="post"
              className="mb-4"
              onSubmit={handlesubmit}
                >
                <div className="row">
                  <div id="money1" className="col money-form-left">
                    <h3 class="title mb-4"> Billing Details</h3>

                    <div className="inputBox">
                      <span>Full Name:</span>
                      <input
                        type="text"
                        name="FullName"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>
                    <div className="inputBox">
                    <span>Email:</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        required
                        value={formValues.email}
                        onChange={handlechange}
                      />
                    </div>
                    <div className="inputBox">
                      <span>Address : </span>
                      <input 
                      type="text" 
                      name="Address" 
                      placeholder="street" 
                      required
                      />
                    </div>

                    <div className="inputBox">
                      <span>City : </span>
                      <input 
                      type="text"
                      name="City" 
                      placeholder="street"
                      required
                        />
                    </div>
                    <div className="inputBox">
                      <span>Zip code : </span>
                      <input
                      type="text" 
                      name="ZipCode"
                        placeholder="1234" 
                        required
                        />
                    </div>
                  </div>

                  <div id="money2" className="col money-form-right">
                    <h3 class="title mb-4">Payment Page</h3>

                    <div className="inputBox">
                      <span>Cards Accepted : </span>
                      <img src={mastervisa} width="100" alt="cards names" />
                    </div>

                    <div className="inputBox">
                      <span>Name on Card : </span>
                      <input
                        type="text"
                        name="Nameoncard"
                        placeholder="Enter your Name"
                        required
                      />
                    </div>

                    <div className="inputBox">
                      <span>Credit Card Number : </span>
                      <input
                        type="number"
                        name="CardNumber"
                        placeholder="1111"
                        required
                      />
                    </div>

                    <div className="inputBox">
                      <span>EXP month : </span>
                      <input 
                      type="text"
                       name="expmonth" 
                       placeholder="jan" 
                       required
                       />
                    </div>

                    <div className="inputBox">
                      <span>EXP year  :</span>
                      <input 
                      type="number" 
                      name="expyear"
                       placeholder="2022"
                       required
                        />
                    </div>

                    <div className="inputBox">
                      <span>CVV : </span>
                      <input 
                      type="text"
                       name="cvv" 
                       placeholder="123" 
                       required
                       />
                    </div>

                  </div>
                </div>

                  <div className="submit">
                    <button
                      class="btn"
                      type="submit"
                      value="Login"
                      name="Donate"
                    >
                    Donate Now
                    </button>
                  </div>
                
              </form>
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="col-5 text-center">
          <button className="button2" onClick={() => setShow1(!show1)}>
            {show1 === true ? "Donate With Equipment" : "Donate With Equipment"}
            <i className="fa-solid fa-hand-holding-medical fa-lg"></i>
          </button>{" "}
          {show1 && (
            <div className="Equipment">
              <p>Upload your old Equipment photo for donation:</p>
              <div className="wrapper">
                <header>File Uploader</header>
                        <form 
                        action="http://localhost:8000/UserPhotos.php"
                        method="POST" 
                        enctype="multipart/form-data"
  
                        >
                      <input type="hidden" name="size" value="1000000"/>
                      <input id="fileinput" type="file" name="image" />
                      <input type="number" name="number" placeholder="Enter your phone number"/>
                      <textarea  name="description" placeholder="Describtion"></textarea>
                      <button type="submit" name="upload">POST</button>
                      </form>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}
export default Donation;
