import React, { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2',
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      colorPrimary: '#D86EBF',
      colorSecondary: '#FAE5F5',
    },
    {
      name: 'Mobile',
      colorPrimary: '#FEBA05',
      colorSecondary: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF',
    }
]
  const [collaborators, setCollaborator] = useState([])
  const onNewCollaboratorRegistered = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
  }
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onCollaboratorRegistered={collaborator => onNewCollaboratorRegistered(collaborator)}/>
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        colorPrimary={team.colorPrimary}
        colorSecondary={team.colorSecondary}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name )}
      />)}
    </div>
  );
}

export default App;
