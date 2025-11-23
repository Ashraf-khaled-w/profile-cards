import React from "react";
import { getSkillConfig } from "../data/cardsData";

function Card({ person }) {
  if (!person) {
    return <div className="card">Person not found</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={person.image} alt={person.name} className="avatar" />
      </div>

      <div className="data">
        <h2 className="person-name">{person.name}</h2>
        <p className="person-bio">{person.bio}</p>

        <div className="skills-list">
          {person.skills.map((skillName, index) => {
            const skillConfig = getSkillConfig(skillName);
            return (
              <span
                key={index}
                className="skill"
                style={{
                  color: skillConfig.color,
                  backgroundColor: skillConfig.bgColor,
                  border: `1px solid ${skillConfig.color}20`,
                }}
              >
                {skillName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
