import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css =  { backgroundColor: props.colorSecondary }
    return (
        (props.collaborators.length > 0) && <section className='team' style={css}>
            <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
            <div className='collaborates'>
                {props.collaborators.map( collaborator =>
                    <Collaborator
                        headerColor={props.colorPrimary}
                        key={collaborator.name}
                        name={collaborator.name}
                        role={collaborator.role}
                        image={collaborator.image}
                    />
                )}
            </div>
        </section>
    )
}

export default Team