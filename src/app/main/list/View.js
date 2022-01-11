import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { ToastContainer, toast } from 'react-toastify';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import 'react-toastify/dist/ReactToastify.css';
import BootstrapDialogTitle from './BootstrapDialogTitle';
import { useUpdateMutation } from "./updateMutation";
import { useLogout } from "../auth/auth";



function View(props) {


const [updateVote] = useUpdateMutation();
const logout = useLogout();
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
   '& .MuiDialog-paper': {
    minWidth: "500px",
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const [votes, setVotes] = useState([]);
const [open, setOpen] = React.useState(false);
const [disableSubmit, setDisableSubmit] = React.useState(false);

useEffect(() => {
  let db_vote = []
  if(props.data){
    props.data.songLists.map(song=>{
    if(song.rank!==0 && song.rank !== ""){
      db_vote.push({ _id:song._id,  rank : song.rank , song: song.singer });
    }
    return song;
  })
  setVotes(db_vote);
  }
  
},[props.data])

const handleDialogOpen = () => {
    setOpen(true);
  };
const handleDialogClose = () => {
    setOpen(false);
  };


const handleConfirm=()=>{
  setOpen(false);
  let input = [];
  votes.map(vote=>{
    input.push({ 
      _id:vote._id,  
      rank : vote.rank , 
      song: vote.song, 
      access_token: props.token
    })
    return vote;
  })
  updateVote(input);
  //logout();
};

const onCancel=()=>{
  logout();
}
const isVotesDuplicate= ()=>{
  let duplicate = false;
  let rank = [1,1,1,1,1,1,1]
  
   // check duplicate
  for (var i = votes.length-1; i >= 0; i--) {
    if(parseInt(votes[i].rank) !==0 ){
     if(rank[parseInt(votes[i].rank)]===0){
        duplicate = true;
     }else{
      rank[parseInt(votes[i].rank)] = 0;
     }
    }
  }
  return duplicate;
}


const isValideVote =(r)=>{
  const rank = parseInt(r);
  // integer check
  if(!Number.isInteger(rank)){
    toast("Please enter integer number !")
    return false;
  }
  // range check
  if(rank<0 || rank >6){
    toast("Please enter integer number within a rang (1-6) !")
    return false;
  }

  return true;

}

const handleRankingChange =(id,rank,name)=>{

  if(!isValideVote(rank)) return;
  const vote = { _id: id, rank : rank , song : name } ;
  // update the rank if vote exists
  let isExist = false;
  for (var i = votes.length-1; i >= 0; i--) {
    if(votes[i]._id === id){
      votes[i]=vote ;
      isExist = true;
    }
  }

  // add new vote 
  if(!isExist){
    votes.push(vote )
  }
  setVotes(votes);
}




const onSubmit= ()=>{
  if(isVotesDuplicate()){
     setDisableSubmit(true);
  }else{
    setDisableSubmit(false);
  }
  handleDialogOpen();
 
}

const columns = [
  {
    name: 'Name',
    selector: row => row.singer,
  },
  {
    name: 'Click to Listen',
    selector: row => {
      return <a
        href={row.song}
        target="external-url"
      >
        <PlayCircleFilledWhiteIcon/>
      </a>

      },
  },
  {
    name: 'Ranking',
    selector: row => {
      return  <input type="number" min="0" max="6" className="form-control" defaultValue={row.rank} name="cf-name"  onChange={(event)=>handleRankingChange(row._id,event.target.value, row.singer)}/>
    }
  }
  ]

const data = props.data?props.data.songLists: [];

  return (
  	  <section className="hero-list d-flex flex-column justify-content-center align-items-center">
       <ToastContainer />
      <BootstrapDialog
        onClose={handleDialogClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
          Ready to Submit
        </BootstrapDialogTitle>
        <DialogContent>
          {!disableSubmit ? (<div>
            Here is the summary, please review it. You can click confirm and submit button to save the voting.
          </div>)
           : <span style={{color:"red"}}> Found Duplicated rank number</span>}
          <br/>
          <ul>
          {votes.map((v)=> (<li key={v.song}> {v.song}'s rank: {v.rank}  </li>))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleConfirm} disabled = {disableSubmit}>
            Confirm and Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>

            <div className="bg-overlay-list"></div>
               <div className="container">
                    <div className="row">
                         <div className="col-lg-10 col-md-10 mx-auto col-12">
                          <h3 className="text-white" >Welcome to the NAAAC voting system</h3>
                          <br/>
                          <p className="text-white">
                             You have ten songs to review and you are allowed to vote six out of them. The ranking is 
                             from 1 to 6 where 1 is the highest rank and 6 is the lowest rank . 
                             In the six songs that you vote, each ranking should be unique. 
                             By clicking Submit button, you will see a summary, you can commit your votes after confirming the summary. 
                             You are allowed to recast your votes before --------. After that, all the vots are final, not further submit will be saved. 
                          </p>
                         </div>
                    </div>
                     <div className="row">
                      <div className="col-lg-5 col-md-2  col-sm-12"></div>
                          <div className="col-lg-3 col-md-5 col-sm-12 ">
                              <button type="button" className="form-control" id="submit-button" onClick={onSubmit}>Submit my votes</button>
                          </div>
                          <div className="col-lg-3 col-md-5   col-sm-12 ">
                                <button type="button" className="form-control" onClick={onCancel}>logout</button>
                          </div>
                    </div>
                    <div className="row">
                         <div className="col-lg-10 col-md-10 mx-auto col-12">

                              <div className="mt-5 text-center">
                                 <DataTable
                                      columns={columns}
                                      data={data}
                                      progressPending={props.loading} 
                                  />
                              </div>
                              
                         </div>

                    </div>
               </div>
     </section>
  );
}

export default View;
