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
         mydata: dummyData,
         like_state: false
      }
  }

  triggerlikes = (e) => {
    e.preventDefault();
    console.log('Click')
     
      // this.setState = {
      //   if (this.like_state = false) {
      //   this.like_state: false
      //   }
      // }
     
    

  } 
  render() {
    return(
     <div className="app_css">
      <BarSearch />
        {this.state.mydata.map(postmap => (
            <PostCont mybarsearch = {postmap} key={postmap.username} triggerlikes = {this.triggerlikes}/>
        ))}
    </div>  
  );
 }
}  

export default App;
