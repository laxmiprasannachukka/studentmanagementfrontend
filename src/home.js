import React,{useState,useEffect} from 'react';
import {Poststudentdata} from './api.js';
import {Getcollegedata} from './api.js';
import { FacebookShareButton, FacebookIcon } from "react-share";


const Home = () => {
let [name,setname]=useState("");
let [collegename,setcollegename]=useState("");
let [education,seteducation]=useState("");
let [email,setemail]=useState("");
let [mobile,setmobile]=useState();
let [collegesapplied,setcollegesapplied]=useState([]);
let [collegedata,setcollegedata]=useState([]);


useEffect(async()=>{
    let colleges=await Getcollegedata();
    setcollegedata(...collegedata,colleges.data);
 console.log(colleges.data)
},[]);


async function Studentdata(e){
    e.preventDefault();
    let userdata={name,collegename,education,email,mobile,collegesapplied}
    await Poststudentdata(userdata);
    console.log(userdata);
    setname("");
    setcollegename("");
    seteducation("");
    setemail("");
    setmobile("");
    setcollegesapplied("");

}


let url = "https://github.com";

    return (
        <div>
             <form onSubmit={ (e) => Studentdata(e)}>
        <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away in finding your dream universities</p>
                        <input type="submit" name="" value="Login"/>
                    </div>
                    <div class="col-md-9 register-right">
                    
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Student</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        
                                            <input type="text" class="form-control" placeholder="Name" value={name} onChange={(e) => {
                  setname(e.target.value)}}/>
                                    
                                        
                                            <input type="text" class="form-control" placeholder="collegeName" value={collegename} onChange={(e) => {
                  setcollegename(e.target.value)}}  />
                                        
                                        
                                            <input type="text" class="form-control" placeholder="your recent study" value={education} onChange={(e) => {
                  seteducation(e.target.value)}} />
                                        
                                    </div>
                                    <div class="col-md-6">
                                        
                                            <input type="email" class="form-control" placeholder="Your Email *" value={email} onChange={(e) => {
                  setemail(e.target.value)}} />
                                        
                                        
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value={mobile} onChange={(e) => {
                  setmobile(e.target.value)}} />
            <select onChange={(e) => {setcollegesapplied(e.target.value)}}>
                                                <option class="hidden"  selected >select colleges You Wants to Apply for
                                                    </option>
                                                    {
                                                    collegedata.map((item,index)=>{
                                                        return   <option value={item.collegename} >{item.collegename}</option>
                                                    })    
                                              
                                                    }
                                            </select>                              
                                                
                            
                                        
                                        <input type="submit" class="btnRegister"  value="submit"/>
                                        
                                    </div>
                                    <container>
                <segment>
                    <FacebookShareButton url={url} >
                        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                    </FacebookShareButton>
                    </segment>
                </container>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                            

            </div>  
            </form>
        </div>
    )
}


export default Home
