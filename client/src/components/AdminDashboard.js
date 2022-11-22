import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import AdminTable from './AdminTable'

const AdminDashboard = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user===null){
      navigate("/login");
    }else{
      if(user["adminId"]===undefined)
        navigate("/login");
    }
  }, [])
  return (
    <>
        <Navbar/>
        <AdminTable />
    </>
  )
}

export default AdminDashboard