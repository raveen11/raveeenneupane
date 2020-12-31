import React from 'react';
import './index.css';
import Sidebar from '../../container/SideNavbar/Sidebar';
import About from '../../container/About/About';
import Resume from '../../container/Resume/Resume';
import Content from '../../container/Content';
import Contact from '../../container/Contacts/Contact';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom'
import Home from '../../container/Home/Home';
import WorkCard from '../../container/Works/WorkCard';
import Work from '../../container/Works/Work';
import Newcontact from '../../container/Contacts/Newcontact'




class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: false
    }
  }

  clickhandle=()=>{
    this.setState({
      leftOpen:false
    })
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';

    return (
      <div id='layout'>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='content'>
                     <Sidebar leftclick={this.clickhandle}/>
                  </div>
              </div>
          </div>

          <div id='main'>
              
              <div className='content'>

                  <Switch>
                    <Route  path="/about" component={About}></Route>
                    <Route  path="/resume" component={Resume}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/portfolio" component={Work}></Route>
                  </Switch>
                  
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;