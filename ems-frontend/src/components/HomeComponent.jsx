import React from 'react';
import { useNavigate } from 'react-router-dom'
import myImage from '../assets/home.jpg'

const HomeComponent = () => {
    const navigate = useNavigate();

    // Funkcja obsługująca kliknięcie w "Get Started"
    const goToEmployees = () => {
        navigate('/employees'); 
    };

    return (
        <div className="container text-center p-5 my-5 bg-light rounded shadow">
            <h1 className="display-4 text-primary mb-3">Welcome to the Employee Management System!</h1>
            <img
                src={myImage}
                alt="Welcome"
                className="img-fluid rounded-circle mb-4 shadow-sm"
                style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
            <p className="lead text-secondary">
                Manage your employees and departments efficiently with our easy-to-use interface.
            </p>
            <button
                className="btn btn-info btn-lg mt-3"
                onClick={goToEmployees}
            >
                Get Started
            </button>
        </div>
    );
};

export default HomeComponent;
