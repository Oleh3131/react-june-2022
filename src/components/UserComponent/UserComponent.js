
import './UserComponent.css'

const UserComponent = ({users ,loading,getUserById}) => {

    const {id,name} = users;

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <ul className={'ulList'}>
            <li>
                id: {id} 🠖 name: {name} <button className={'detailsButton'} onClick={()=>getUserById(id)}>Details</button>
            </li>
        </ul>
    );
};

export default UserComponent;