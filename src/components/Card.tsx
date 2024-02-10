import * as React from 'react';

interface CardProps {
  courseFeedback: string;
  name: string;
  profession: string;
  profilePhoto: string; // Assuming profilePhoto is a URL
}

const Card: React.FC<CardProps> = ({ courseFeedback, name, profession, profilePhoto }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <div className="name-profession align-middle">
          <div className="name">
            <div className='font-bold'>{name}</div>
          </div>
          <div className="profession">{profession}</div>
        </div>
      </div>
      <div className="card-body">
        <div className="course-feedback">{courseFeedback}</div>
      </div>
    </div>
  );
};

export default Card;
