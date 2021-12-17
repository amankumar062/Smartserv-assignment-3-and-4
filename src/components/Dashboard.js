import React, { useState, useEffect } from "react";
import {Navigate } from "react-router-dom";
import Card from "./Card";
import Graph from "./Graph";
import "../style/dashboard.sass";

export default function Dashboard() {
    const [loggedIn, setLoggedIn] = useState();
    const [logOut, setLogOut] = useState();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) setLoggedIn(false);
    });

    if (loggedIn === false) return <Navigate to="/" />;
    if (logOut === true) return <Navigate to="/" />;

    const logout = () => {
        localStorage.removeItem("token");
        setLogOut(true);
        return <Navigate to="/" />;
    };

    return (
        <div className="dashboard">
            <div className="nav">
                <p className="page-title">Company Metrics</p>
                <p className="logout" onClick={logout}>
                    Logout
                </p>
            </div>

            <br />
            <div className="cards">
                <Card
                    type="revenue"
                    amount="$406,411.29"
                    title="Total Revenue"
                />
                <Card amount="$620" title="Total Jobs Avg" />
                <Card amount="655" title="Tickets Created" />
                <Card amount="735" title="Tickets Scheduled" />
                <Card
                    type="outstanding"
                    amount="$110,448.8"
                    title="Outstanding Amount"
                />
                <Card amount="105" title="Memberships Sold" />
                <Card amount="436" title="Job Completed" />
                <Card amount="65" title="Total Canceled" />
            </div>
            <Graph />
        </div>
    );
}
