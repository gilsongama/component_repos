import React from 'react'

import Layout from "./components/layout";
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import GithubContext from './providers/github_provider';
import useGithub from './hooks/github-hooks';
import NoSearch from './components/no-Search';


function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? 
        <>
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <> 
            <Profile />
            <Repositories />
          </>
          )}
        </> : <NoSearch />
    }
     
    </Layout>
  );
}

export default App;
