import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BootstrapDialogTitle from './BootstrapDialogTitle';
import { useUpdateMutation } from "./updateMutation";
import { useLogout } from "../auth/auth";



function View(props) {


const [updateVote, mutationResults] = useUpdateMutation();
const logout = useLogout();
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const [votes, setVotes] = useState([]);
const [open, setOpen] = React.useState(false);
const [voteSummary, setVoteSummary] =React.useState();
const [disableSubmit, setDisableSubmit] = React.useState(false);

useEffect(() => {
  let db_vote = []
  if(props.data){
    props.data.songLists.map(song=>{
    if(song.rank!==0 && song.rank !== ""){
      db_vote.push({ _id:song._id,  rank : song.rank , song: song.singer });
    }
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
     if(rank[parseInt(votes[i].rank)]==0){
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
    if(votes[i]._id == id){
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
    name: 'Music name',
    selector: row => row.singer,
  },
  {
    name: 'Music Link',
    selector: row => {
      return <a
        href={row.song}
        target="external-url"
      >
        {row.song}
      </a>

      },
  },
  {
    name: 'Ranking',
    selector: row => {
      return  <input type="number" min="0" max="6" class="form-control" defaultValue={row.rank} name="cf-name"  onChange={(event)=>handleRankingChange(row._id,event.target.value, row.singer)}/>
    }
  }
  ]

const data = props.data?props.data.songLists: [];

  return (
  	  <section class="hero-list d-flex flex-column justify-content-center align-items-center">
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
            Here is the summary, please review it. You can click confirm and Submit button if it looks good to you. Thank you !
          </div>)
           : <span style={{color:"red"}}> Found duplicate ranking number</span>}
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

            <div class="bg-overlay-list"></div>
               <div class="container">
                    <div class="row">
                         <div class="col-lg-10 col-md-10 mx-auto col-12">
                          <h3 class="text-white" >Welcome to the NAAAC voting system</h3>
                          <br/>
                          <p class="text-white">
                             You have ten songs to vote for and rank's range is from 1 to 6 with 1 as the highest ranking.
                             You are only be allowed to vote 6 out of 10 and each of the 6 songs shall have different rankings.
                             By clicking Submit button, you can commit your voting after the confirm the summary. 
                             You are allowed to recast your votes after submit. 
                             Be aware that after --------, all the vots are final, not further submit will be saved. 
                          </p>
                         </div>
                    </div>
                     <div class="row">
                      <div class="col-lg-5 col-md-5  col-5"></div>
                          <div class="col-lg-3 col-md-3 col-3">
                              <button type="button" class="form-control" id="submit-button" onClick={onSubmit}>Submit my votes</button>
                          </div>
                          <div class="col-lg-3 col-md-3  col-3">
                                <button type="button" class="form-control" onClick={onCancel}>logout</button>
                          </div>
                    </div>
                    <div class="row">
                         <div class="col-lg-10 col-md-10 mx-auto col-12">

                              <div class="mt-5 text-center">
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
