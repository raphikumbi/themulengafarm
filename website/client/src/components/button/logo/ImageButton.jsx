import "./ImageButton.css";

export default function ImageButton({ image, url, alt = "", className = "" }) {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <button className={`image-button ${className}`} onClick={handleClick}>
            <img src={image} alt={alt} className="image" />
        </button>
    );
}
