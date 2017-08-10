import React from 'react';
import './Experience.css';

const Experience = (props) =>
    <div className="experience-card" key={props.experience.id}>
        <div className="experience-img-wrapper">
            <img src={props.experience.img_url} />
        </div>
        <h2>{props.experience.name}</h2>
        <h4>{props.experience.location}</h4>
        <h4>♥ 0 likes</h4>
    </div>

export default Experience;