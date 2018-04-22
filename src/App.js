import React from 'react';
import DairyApp from "./Components/DairyApp.js";
import ItemBlock from './Components/Item/ItemBlock.js';
import CommentList from './Components/Comment/CommentList.js';


class App extends React.Component {
    
    render = () => {
        return (
            <React.Fragment> 
                <DairyApp />
                <ItemBlock />
                <CommentList />
            </React.Fragment>
        );
    }
}

export default App;