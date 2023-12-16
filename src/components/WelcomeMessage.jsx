const WelcomeMessage = ({ setSelectedTab, onGetPostsClick }) => {
  return (
    <center>
      <div className="alert alert-dark welcome-message" role="alert">
        <p>No Posts are available right now</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            setSelectedTab("Create Post");
          }}
        >
          Add Post
        </button>
        <button
          type="button"
          style={{ marginTop: "10px" }}
          className="btn btn-primary"
          onClick={onGetPostsClick}
        >
          Get Posts From Server
        </button>
      </div>
    </center>
  );
};

export default WelcomeMessage;
