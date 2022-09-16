
import './UserComponent.css'

const UserComponent = ({users,getUserById}) => {

    const {id,name} = users;

    return (
        <ul className={'ulList'}>
            <li>
                id: {id} 🠖 name: {name} <button className={'detailsButton'} onClick={()=>getUserById(id)}>Details</button>
            </li>
        </ul>
    );
};

export default UserComponent;