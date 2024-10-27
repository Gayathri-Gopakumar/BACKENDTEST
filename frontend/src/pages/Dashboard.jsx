import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getAllUsersAPI } from '../services/allAPI';

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUsername(JSON.parse(sessionStorage.getItem("user")).firstName);
        } else {
            setUsername("");
        }
        
        // Call getAllUsers when the component mounts
        getAllUsers();
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    const getAllUsers = async () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            try {
                const result = await getAllUsersAPI(reqHeader); // removed `searchKey` if it's unused
                console.log(result);
                if (result.status === 200) {
                    setAllUsers(result.data);
                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <div>
                <div className='d-flex flex-row justify-content-between'>
                    <h2 className='text-warning m-3'>WELCOME TO EMPLOYEE LIST PORTAL <span className='text-danger'>{username?.split(" ")[0]}</span> </h2>
                    <button onClick={handleLogout} className='btn btn-primary m-3'>Logout</button>
                </div>
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers?.length > 0 ? (
                                allUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        USERS NOT FOUND
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
