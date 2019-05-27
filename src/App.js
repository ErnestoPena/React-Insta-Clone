import React from 'react';
//import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import BarSearch from './components/SearchBar/searchbar';
import PostCont from './components/PostContainer/postcontainer';
import '../src/components/login.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state= {
         mydata: dummyData,
         like_state: false,
         local_user: ""
      }
  }

  triggerlikes = (e) => {
    e.preventDefault();
    console.log(this.state.mydata.liked)
      this.setState({
        like_state: !this.state.liked
      })
    }
  
  postaction = (e) =>{
    e.preventDefault();
    if (this.state.local_user === "") {
      this.openForm()
    } else {
      this.submit()
    }
  }

 openForm(){
  document.getElementById("myForm").style.display = "block"
 }   

 closeForm() {
  document.getElementById("myForm").style.display = "none";
 }

 submit = (e) => {
   e.preventDefault()
   this.setState({
     
   })

   this.closeForm()
 }

   
  render() {
    return(
     <div className="app_css">
     <div class="form-popup" id="myForm">
            <form onSubmit={this.submit} className="form-container">
                <h1>User Name</h1>
                <input style={{width:'90%'}} className ="usernameinput" type="text" placeholder="Enter user name" name="username"></input>
                <button type="submit" class="btn">Submit</button>
                <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
            </form>
         </div>

      <BarSearch />
        {this.state.mydata.map(postmap => (
            <PostCont mybarsearch = {postmap} key={postmap.username} triggerlikes = {this.triggerlikes} like_state = {this.state.like_state} postaction={this.postaction}/>
        ))}
    </div>  
  );
 }
}  

export default App;
