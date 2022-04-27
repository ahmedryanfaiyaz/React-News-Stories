import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";

function DeleteStory(props) {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  function deleteStoryHandler() {
    let url = "https://localhost:5001/api/stories/" + props.storyId;

    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then(() => {
      console.log("Story Deleted...");
      navigate("/");
      window.location.reload(false);
    });
  }

  return (
    <Col md={{ offset: props.off }}>
      <Button variant="danger" onClick={deleteStoryHandler}>
        Delete
      </Button>
    </Col>
  );
}

export default DeleteStory;
