import Dropdown from '../Dropdown';
import TextField from '../TextField';
import Button from '../Button';
import './Form.css';
import { useState } from 'react';
const Form = (props) => {
    const teams = [
        'Programming',
        'Front-End',
        'Back-End',
        'Data Science',
        'Devops',
        'UI/UX',
        'Mobile'
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const onSave = (event) => {
        event.preventDefault()
        props.onCollaboratorRegistered({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite o seu Nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite o seu Cargo"
                    value={role}
                    onChanged={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da Imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form;