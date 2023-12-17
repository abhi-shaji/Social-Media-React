const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <div
        class="spinner-border"
        style={{ margin: "10% 0", width: "5rem", height: "5rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
