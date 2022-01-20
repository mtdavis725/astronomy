export default function ArchiveItem (props) {
  return (
    <div className="archive-item">
      <div className="item-1">
        <img src={props.url} alt={props.date} />
      </div>
      <div className="item-2">
        <div className="date">
          <h3>{props.date}</h3>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
          <h3><span>Credits:</span> {props.copyright}</h3>
        </div>
        <div className="description">
          <p><span>Explanation:</span> {props.explanation.slice(0, 250)}...see more</p>
        </div>
      </div>
      

    </div>
  );
  }
