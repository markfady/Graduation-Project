import React from "react";
import axios from "axios";
import "../Donation/Login.css";

class AddAdmin extends React.Component {
  state = {
    firstname: "",
    email: "",
    password: "",
    need : "",
    comments: [],
  };

  componentDidMount() {
    const url = "http://localhost:8000/Addadmin.php";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ comments: data });
        console.log(this.state.comments);
      });
  }
  handleFormSubmit(event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append("firstname", this.state.firstname);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("need", this.state.need);


    axios({
      method: "post",
      url: "http://localhost:8000/Addadmin.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }
  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="center">
            <h1 className="text-center">Register</h1>
            <form>
              <div className="text-field">
                <input
                  type="text"
                  name="firstname" //refrence this data to emial in initialvalues
                  required
                  //value={Sta.formValues.username}
                  onChange={(e) => this.setState({ firstname: e.target.value })}
                />
                <label>First Name</label>
              </div>
              <div className="text-field">
                <input
                  type="email"
                  name="email" //refrence this data to emial in initialvalues
                  required
                  // value={Sta.formValues.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <label>Email</label>
              </div>

              <div className="text-field">
                <input
                  type="password"
                  name="password"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <label>Password</label>
              </div>
              <div className="submit">
                <input
                  id="submitBtn"
                  type="submit"
                  value="Signup"
                  onClick={(e) => this.handleFormSubmit(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAdmin;
