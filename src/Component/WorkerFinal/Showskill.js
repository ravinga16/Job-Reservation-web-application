import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
export default class Showskill extends React.Component{
    constructor(props){
      super(props);
      this.state={
          skillId:"" 
      }
 
    }
    deleteSkill(SkillId, e){
      e.preventDefault();
      console.log(SkillId)
      axios.create({withCredentials:true}).delete("http://localhost:3000/worker/skill/143", { data: { "skillId": SkillId } })
      .then(response=>{
        console.log(response.data);
      })
    }
    render(){
      
        return (
            <MDBCol style={{marginTop:"15px"}}>
              <MDBCard style={{ width: "30rem" }}>                
                <MDBCardBody>
                  <MDBCardTitle>{this.props.SkillTitle} {this.props.SkillId}</MDBCardTitle>
                  <MDBCardText>
                    <div class="row">
                      <div class="col-md-5">{this.props.Description}
                   <br></br>
                   {this.props.HourlyCharge}</div>
                      <div class="col-md-5"> <button onClick={(e) => this.deleteSkill(this.props.SkillId, e)} style={{height:"45px", width:"80px"}}>Delete</button></div>
                    </div>
                   
                  </MDBCardText>
                 
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
    }
}