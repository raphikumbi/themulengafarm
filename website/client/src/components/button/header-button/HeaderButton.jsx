import "./HeaderButton.css";
import {useNavigate} from "react-router-dom";

export default function HeaderButton({ url, name }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    return (
        <div className="header-button">
            <button onClick={handleClick} name={name}>{name}</button>
        </div>
    );
}