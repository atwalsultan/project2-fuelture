import {FaLinkedin, FaGithub, FaStackOverflow} from 'react-icons/fa';

const TeamMember = ({member}) => {
    return (
        <div className="team-member">
            <div>
                <img src={`https://picsum.photos/150?random=${Math.floor(Math.random() * 50)}`} alt={member.Name} className="team-member-image" />
            </div>

            <div className="member-name-role">
                <p className="team-member-name">{member.Name}</p>
                <p className="team-member-role">{member.Role}</p>
            </div>

            <div className="member-social-profile">
                <a href={member.Linkedin} target="_blank"><FaLinkedin></FaLinkedin></a>
                {member.Github !== "" && <a href={member.Github} target="_blank"><FaGithub></FaGithub></a>}
                {member.Stackoverflow !== "" && <a href={member.Stackoverflow} target="_blank"><FaStackOverflow></FaStackOverflow></a>}
            </div>
        </div>
    )
}

export default TeamMember;
