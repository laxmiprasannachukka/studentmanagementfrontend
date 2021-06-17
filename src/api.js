import axios from 'axios';

export function Poststudentdata(data){
    return axios.post(`https://studentdatabas.herokuapp.com/students`,data)
}

export function Getcollegedata(){
    return axios.get(`https://studentdatabas.herokuapp.com/colleges`)
}
