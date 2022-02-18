import "./DemoCard.css";

const DemoCard = ({ title, link, color }) => {
  return (
    <div
      className="project-video--container"
      style={{ borderColor: `${color}` }}
    >
      <h1 style={{ borderBottomColor: `${color}` }}>{title}</h1>
      <iframe
        className="demo--video"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

export default DemoCard;
