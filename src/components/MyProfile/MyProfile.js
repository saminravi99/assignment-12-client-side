import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyProfile = () => {
  const [authUser] = useAuthState(auth);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/edit-profile');
  }

    return (
      <div>
        <h3 className="text-muted my-5 text-center">My Profile</h3>
        <div className="d-flex justify-content-center ">
          <div className="d-flex justify-content-center">
            <div className="me-5">
              <img
                className="rounded-circle mb-5"
                src={authUser.photoURL }
                alt="userPhoto"
              />
              <button onClick={handleEditProfile} className="btn btn-primary d-block mx-auto rounded-pill">
                Edit Profile
              </button>
            </div>
          </div>
          <div>
            <p>
              <strong>User Name: {authUser.displayName}</strong>
            </p>
            <p>
              <strong>User Email: {authUser.email}</strong>
            </p>
            <p>
              <small>
                <strong>Educational Institution :</strong>
              </small>
            </p>

            <p>
              <small>
                <strong>Phone Number :</strong>
              </small>
            </p>
            <p>
              <small>
                <strong>Address :</strong>
              </small>
            </p>
            <p>
              <small>
                <strong>Date of Birth:</strong>
              </small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;