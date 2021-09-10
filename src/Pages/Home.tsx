import Hero from "Components/Hero/Hero";
import React, { ChangeEventHandler, useEffect, useState, useRef, createRef } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

interface IHomePageProps {}

interface iUserInfo {
  firstName: string;
  lastName: string;
  fullName: string;
}

class UserInfo {
  public firstName: string;
  public lastName: string;
  public fullName: string;
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.fullName = "";
  }
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const [userInfo, setUserInfo] = useState<iUserInfo>({
    firstName: "",
    lastName: "",
    fullName: "",
  });

  const [users, setUsers] = useState<Array<iUserInfo>>([]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<number>(0);

  const handleUserInfoUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newUserInfo = { ...userInfo };
    setUserInfo({
      ...newUserInfo,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newUser = { ...userInfo };
    setUsers([...users, newUser]);
    setUserInfo(new UserInfo());
  };

  const removeUser = (index: number) => {
    let newUserArray = [...users];
    if (confirm("Are you positive you'd like to delete this user?")) {
      newUserArray.splice(index, 1);
      setUsers(newUserArray);
    }
  };

  const editUser = (index: number) => {
    let userToEdit = users[index];
    setUserToEdit(index);
    setUserInfo(userToEdit);
    setIsEditing(true);
  };

  const updateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newUserArray = [...users];
    newUserArray[userToEdit] = userInfo;
    setUsers(newUserArray);
    setUserInfo(new UserInfo());
    resetState();
  };

  const resetState = () => {
    setIsEditing(false);
    setUserToEdit(0);
  };

  const cancelEdit = () => {
    setUserInfo(new UserInfo());
    resetState();
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <form onSubmit={isEditing ? updateUser : addUser}>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
              <label htmlFor="firstName" style={{ marginBottom: ".5rem" }}>
                First name
              </label>
              <input required name="firstName" id="firstName" value={userInfo.firstName} onChange={handleUserInfoUpdate} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: "1rem" }}>
              <label htmlFor="lastName" style={{ marginBottom: ".5rem" }}>
                Last name
              </label>
              <input required name="lastName" id="lastName" value={userInfo.lastName} onChange={handleUserInfoUpdate} />
            </div>

            <input type="submit" value={isEditing ? "Update User" : "Add User"} />
            {isEditing && <button onClick={cancelEdit}>Cancel</button>}
          </form>
          <ul>
            {users.map((user, index) => {
              return (
                <li>
                  {user.firstName} {user.lastName}
                  <button
                    onClick={() => {
                      removeUser(index);
                    }}
                  >
                    Remove User
                  </button>
                  <button
                    onClick={() => {
                      editUser(index);
                    }}
                  >
                    Edit User
                  </button>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
