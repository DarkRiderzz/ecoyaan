import team from "./data/team.json";
import "./team.css";
function Team() {
  const teamMembers = team.team;
  return (
    <div className="team-container">
      <h1 className="team-heading">Our Team</h1>

      <div className="team">
        {teamMembers.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
}

function Member({ member }) {
  return (
    <div className="team-card">
      <img className="member-img" src={member.picture} alt="member-img" />

      <div className="member-details">
        <h2>{member.name}</h2>
        <div>
          <p>
            {member.description + " "}
            <span>
              <a href={member.link} target="_blank">
                here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
