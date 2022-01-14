import React from 'react';

import Card from '../Card/Card';
import SidePanel from '../SidePanel/SidePanel';

import './Container.styles.css';

const Container = (props) => {
    return(
    <div id='container'>
        <SidePanel />
        <div id='container-div'>
        {
            props.users.map(user => <Card key={user.id} user={user}/>)
        }
        </div>
    </div> 
    );
}

export default Container;