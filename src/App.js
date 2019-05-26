import React from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import BarSearch from './components/SearchBar/searchbar';
import PostCont from './components/PostContainer/postcontainer';
import '../node_modules/@fortawesome/fontawesome-pro/css/all.css'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
         mydata: dummyData
      }
  }
  render() {
    return(
     <div className="app_css">
      <BarSearch />
        {this.state.mydata.map(postmap => (
            <PostCont mybarsearch = {postmap} key={postmap.id} />
        ))}
    </div>  
  );
 }
}  

export default App;
