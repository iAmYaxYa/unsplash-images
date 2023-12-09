import { getPhoto } from "../react-query";
import viteImage from "/vite.svg";

const Gallery = () => {
  const { isError, error, isLoading, data } = getPhoto();

  if (isLoading) {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <div className="loading"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>
          {error?.response?.data?.errors?.[0] ||
            error?.message ||
            "there was an error"}
        </h4>
      </div>
    );
  }

  const result = data?.results;
  if (!result.length) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>No Results Found</h4>
      </div>
    );
  }
  return (
    <div className="image-container">
      {result?.map((photo) => {
        const url = photo?.urls?.regular || viteImage;
        return (
          <img
            key={photo.id}
            src={url}
            className="img"
            alt={photo.alt_description}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
