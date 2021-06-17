import axios from 'axios';

export function Poststudentdata(data){
    return axios.post(`http://localhost:5000/students`,data)
}

export function Getcollegedata(){
    return axios.get(`http://localhost:5000/colleges`)
}