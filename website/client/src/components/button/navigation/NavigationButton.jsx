import "./NavigationButton.css";

export default function NavigationButton({ name, url }) {
    const handleClick = () => {
        window.location.href = url;
    };

    return (
        <div className="ButtonContainer">
            <button className="NavigationButton" onClick={handleClick}>
                {name}
            </button>
        </div>
    );
}
