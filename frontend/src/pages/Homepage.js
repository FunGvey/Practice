import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import Students from "../assets/students.png";
import { LightPurpleButton } from '../components/buttonStyles';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #202125; /* Изменение фона всей страницы */
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Homepage = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledContainer>
                <StyledGrid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <img src={Students} alt="students" style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                            <StyledTitle>
                                Добро пожаловать
                                <br />
                                в систему управления школой
                      
                            </StyledTitle>
                            <StyledText>
                                Упростите управление школой, организацию классов, добавление учеников и преподавателей.<br />
                                Отслеживайте посещаемость, оценивайте успеваемость и предоставляйте обратную связь.<br />
                                Доступ к записям, просмотр оценок и общение без лишних усилий.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth>
                                        Войти
                                    </LightPurpleButton>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, mb: 3, color: "#ffffff", borderColor: "#01b075" }}
                                    >
                                        Войти как гость
                                    </Button>
                                </StyledLink>
                                <StyledText>
                                    У вас нет аккаунта?{' '}
                                    <Link to="/Adminregister" style={{color:"#ffffff"}}>
                                        Регистрация
                                    </Link>
                                </StyledText>
                            </StyledBox>
                        </StyledPaper>
                    </Grid>
                </StyledGrid>
            </StyledContainer>
        </React.Fragment>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledGrid = styled(Grid)`
  max-width: 1200px;
  margin: auto;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #01B075;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  color: #01B075;
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
