const TEAM_MEMBERS = [
  {
    firstName: 'Wayne',
    lastName: 'Barnett',
    jobPosition: 'Founder & CEO',
    profilePic: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    firstName: 'Angela',
    lastName: 'Caroll',
    jobPosition: 'Chief Editor',
    profilePic: 'angela-caroll-chief-editor.jpg',
  },
  {
    firstName: 'Walter',
    lastName: 'Gordon',
    jobPosition: 'Office Manager',
    profilePic: 'walter-gordon-office-manager.jpg'
  },
  {
    firstName: 'Angela',
    lastName: 'Lopez',
    jobPosition: 'Social Media Manager',
    profilePic: 'angela-lopez-social-media-manager.jpg'
  },
  {
    firstName: 'Scott',
    lastName: 'Estrada',
    jobPosition: 'Developer',
    profilePic: 'scott-estrada-developer.jpg'
  },
  {
    firstName: 'Barbara',
    lastName: 'Ramos',
    jobPosition: 'Graphic Designer',
    profilePic: 'barbara-ramos-graphic-designer.jpg',
  },
];

TEAM_MEMBERS.forEach(object => console.log(object));

for (i = 0; i < TEAM_MEMBERS.length; i++) {
  const SINGLE_MEMBER = TEAM_MEMBERS[i];

  document.getElementById('team-container').innerHTML += 
    `
      <div class="mini-container">
      <div>
        <div>${SINGLE_MEMBER.firstName} ${SINGLE_MEMBER.lastName} ${SINGLE_MEMBER.jobPosition}</div>
        <img src="IMG/${SINGLE_MEMBER.profilePic}" alt="Profile Picture">
      </div>
      
      </div>
    `;

  //da riprovare a fare con .createElement() e/o .append()
}