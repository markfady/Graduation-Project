import React from "react";
import axios from "axios";

import "./Comments.css";

class Comments extends React.Component {
  state = {
    comment: "",
    comments: [],
  };

  componentDidMount() {
    const url = "http://localhost:8000/Comments.php";

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

    formData.append("comment", this.state.comment);

    axios({
      method: "post",
      url: "http://localhost:8000/Comments.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        alert("New Comment Successfully Added.");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  render() {
    return (
      <div className="comment">
        <div id="comments" className="container">
          <h1 id="commentstitle" className="comment-title">Write Comment</h1>

          <div className="comment-form">
            <form id="commentsform"  action="http://localhost:8000/Login.php" method="post">
              <label> Add New Comment</label>
              <input
                type="text"
                name="comment"
                id="commentinput"
                className="form-control"
                placeholder="Your Comment ..."
                value={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
              />

              <br />
              <input
                type="submit"
                name="signin"
                className="btn btn-primary btn-block"
                onClick={(e) => this.handleFormSubmit(e)}
                value="Post Your Comment"
              />
            </form>
          </div>

          <div  id="commentstable"className="comment-table">
            <h3>Share Experiences Table</h3>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Comments & Feedbacks</th>
                </tr>
              </thead>
              <tbody>
                {this.state.comments.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Comments;
