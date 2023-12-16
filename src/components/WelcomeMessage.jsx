const WelcomeMessage = ({ setSelectedTab }) => {
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
      </div>
    </center>
  );
};

export default WelcomeMessage;
