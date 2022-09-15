
const UserComponent = ({users ,loading}) => {

    const {id,name} = users;

    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            <li>
                id: {id} --- name: {name}
            </li>
        </ul>
    );
};

export default UserComponent;