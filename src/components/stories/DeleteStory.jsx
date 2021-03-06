import { useContext } from "react";
import { Button, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";

function DeleteStory(props) {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  function deleteStoryHandler() {
    let url = `${process.env.REACT_APP_HOST}/api/stories/${props.storyId}`;

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(() => {
      navigate("/");
      window.location.reload(false);
    });
  }

  return (
    <div className="d-inline-flex">
      <Button variant="warning" onClick={deleteStoryHandler}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteStory;
