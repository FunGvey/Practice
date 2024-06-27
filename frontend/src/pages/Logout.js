import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <LogoutContainer>
            <h1>{currentUser.name}</h1>
            <LogoutMessage>Вы уверены, что хотите выйти из системы?</LogoutMessage>
            <LogoutButtonLogout onClick={handleLogout}>Выход</LogoutButtonLogout>
            <LogoutButtonCancel onClick={handleCancel}>Отмена</LogoutButtonCancel>
        </LogoutContainer>
    );
};

export default Logout;

const LogoutContainer = styled.div`
  border: 1px solid #01b075;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f1f38;
  color: #01b075;
`;

const LogoutMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  color: #01b075;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #01b075;

  &:hover {
    color: #01b075;
    background-color: #333;
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background-color: #ea0606;

  &:hover {
    background-color: #c00505;
  }
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background-color: rgb(99, 60, 99);

  &:hover {
    background-color: rgb(79, 48, 79);
  }
`;
