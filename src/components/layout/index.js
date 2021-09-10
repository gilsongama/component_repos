import React from 'react'
import Header from '../header';
import { WrapperLayout } from './styled';
import useGithub from '../../hooks/github-hooks';

const Layout = ({ children }) => {

    return(
        <WrapperLayout>
            <Header />
            { children }
        </WrapperLayout>
    );
}

export default Layout