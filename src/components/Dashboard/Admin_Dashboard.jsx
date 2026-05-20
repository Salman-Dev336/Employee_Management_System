import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import All_Task from "../others/All_Task";

const Admin_Dashboard = () => {
    return (
        <div className="h-screen w-full p-10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <Header />
            < CreateTask />
            < All_Task />
            
        </div>
    );
};

export default Admin_Dashboard;
