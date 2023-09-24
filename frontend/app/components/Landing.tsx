import { useNavigate } from "react-router-dom";
import bookstack from "../public/bookstack.png";


const Landing = () => {
    const navigate = useNavigate()

    return (
        <div className="landing-container">
            <div className="landing-container__left">
                <h1 className="landing-title">MediLingo</h1>
                <p className="landing-message">
                    The free, fun, and effective way to learn about medical
                    conditions
                </p>
            </div>
            <div className="landing-container__right">
                <img className="landing-image" src={bookstack} />
                <div className="landing__buttons-container">
                    <button onClick={() => navigate('/sign-in')} className="landing-button landing-button__login">Login</button>
                    <button onClick={() => navigate('/sign-up')} className="landing-button landing-button__signup">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;