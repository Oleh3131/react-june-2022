import {useState} from "react";

import Users from "./components/Users/Users";
import {postService} from "./services/post.service";
import Post from "./components/Post/Post";
import './App.css';

function App() {

    const [posts,setPosts] = useState([]);

    const [hidden, setHidden] = useState(true);

    function getUserId(id) {

        postService.getUsersPostsById(id).then(({data}) => setPosts(data));

    }
    
    return (
        <div className="App">
           <Users getUserId={getUserId} setHidden={setHidden}/>
            {!hidden ? posts.map(post => <Post key={post.id} post={post}/>): null}
        </div>
    );
}

export default App;
