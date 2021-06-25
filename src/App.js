import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import './styles/general.scss';
import { Header } from './components/Header';
import { PostsList } from './components/PostsList';
import { PostDetails } from './components/PostDetails';
import { PostAdd } from './components/PostAdd';
import { PostUpdate } from './components/PostUpdate'
import { getPosts, getUserPosts, deletePost } from './api/posts';
import { getUsers } from './api/users';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(0);

  useEffect(() => {
    getPosts()
      .then(data => setPosts(data));
    getUsers()
      .then(data => setUsers(data));
  }, []);

  const selectedUserPosts = ({ target }) => {
    if (+target.value === 0) {
      getPosts()
        .then(data => setPosts(data));
    }

    getUserPosts(target.value)
      .then(data => setPosts(data));
  };

  const setSelectPost = (postId) => {
    if (postId === selectedPostId) {
      return setSelectedPostId(0);
    }

    return setSelectedPostId(postId);
  };

  const removePost = (removePostId) => {
    deletePost(removePostId)
      .then(() => {
        setPosts(currentPost => (
          currentPost.filter(post => post.id !== removePostId)
        ));
      });
  };

  return(
    <div className="App">
      <header className="App__header">
        <Header />
      </header>

      <Switch>
        <Route path='/post-add'>
          <PostAdd />
        </Route>

      <Route
        path='/post-update/:postId'
        component={PostUpdate}
      >
      </Route>

        <Route path='/' exact>
          <main className="App__main">
            <div className="App__sidebar">
              <PostsList
                posts={posts}
                selectedPostId={selectedPostId}
                setSelectPost={setSelectPost}
                removePost={removePost}
              />
            </div>

            <div className="App__content">
              {selectedPostId
                ?
                  (<PostDetails selectedPostId={selectedPostId}/>)
                : 'No selected post'
              }
            </div>
          </main>
        </Route>
        <p className='App__notFound'>Page not found!</p>
      </Switch>
    </div>
  );
};

export default App;
