import React, { useState } from 'react';
import data from './data.json'
import './Work.css'
import WorkCard from './WorkCard'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
function searchingFor(search){
    return function(x){
        return x.title.toLowerCase().includes(search.toLowerCase()) || ! search;
    }

}

  function Work() {
    const [state,setState]=useState('');
   
   
    const useStyles = makeStyles((theme) => ({
        root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        },
    }));
    const classes = useStyles();


  const card=(
    <div className="container-fluid work"  style={{height:'100%',marginBottom:'20px'}}>
     <div className="row">
    {data.filter(searchingFor(state)).map((item,index)=>{
        return <WorkCard key={item.id} {...item}/>
    })}
 </div>
</div>
)


const allButton=()=>{
    setState('')
}
const psdButton=()=>{
    setState('psd')
}
const uiuxButton=()=>{
    setState('ui/ux')
}


      return (
        <React.Fragment>
             <div className="animation_div">
            <div className="about_me_div">MY WORKS
                    <div className="about_line"></div>
            </div>
            </div>
            <div className={classes.root}>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button onClick={allButton}><span className="btn_text">All</span></Button>
                    <Button onClick={psdButton}><span className="btn_text">PSD</span></Button>
                    <Button onClick={uiuxButton}><span className="btn_text">UI/UX</span></Button>
                </ButtonGroup>
            </div>
            {card}

            <div>
            
            </div>
        </React.Fragment>
      )
  }
  
  export default Work
  