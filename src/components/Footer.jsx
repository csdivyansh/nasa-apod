export default function Footer(props) {

  const {data, toggleModal} = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        
        <h1>APOD Project</h1>
        <h2>{data ?.title }</h2>
        
      </div>
      <button onClick = {toggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  );
}
