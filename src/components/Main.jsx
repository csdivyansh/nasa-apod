export default function Main(props) {
    const {data} = props;
    
    return (
        <div className="imageContainer">
        <img src={data ? data.hdurl : "mars.png"} alt={data.title || "bg-image"} className="bgImage"/>
        </div>
    );
  }
  