import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { BlueButton } from "../../../components/buttonStyles";
import Popup from "../../../components/Popup";
import Classroom from "../../../assets/classroom.png";
import styled from "styled-components";

const AddClass = () => {
    const [sclassName, setSclassName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error, tempDetails } = userState;

    const adminID = currentUser._id;
    const address = "Sclass";

    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const fields = {
        sclassName,
        adminID,
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setLoader(true);
        dispatch(addStuff(fields, address));
    };

    useEffect(() => {
        if (status === 'added' && tempDetails) {
            navigate("/Admin/classes/class/" + tempDetails._id);
            dispatch(underControl());
            setLoader(false);
        }
        else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        }
        else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, navigate, error, response, dispatch, tempDetails]);

    return (
        <>
            <StyledContainer>
                <StyledBox>
                    <Stack sx={{
                        alignItems: 'center',
                        mb: 3
                    }}>
                        <img
                            src={Classroom}
                            alt="classroom"
                            style={{ width: '80%' }}
                        />
                    </Stack>
                    <form onSubmit={submitHandler}>
                        <Stack spacing={3}>
                            <StyledTextField
                                label="Create a class"
                                variant="outlined"
                                value={sclassName}
                                onChange={(event) => {
                                    setSclassName(event.target.value);
                                }}
                                required
                            />
                            <StyledBlueButton
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                variant="contained"
                                type="submit"
                                disabled={loader}
                            >
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Create"}
                            </StyledBlueButton>
                            <StyledButton variant="outlined" onClick={() => navigate(-1)}>
                                Go Back
                            </StyledButton>
                        </Stack>
                    </form>
                </StyledBox>
            </StyledContainer>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    );
};

export default AddClass;

const StyledContainer = styled(Box)`
  flex: 1 1 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #011627, #020c1b);  /* Added background gradient */
`;

const StyledBox = styled(Box)`
  max-width: 550px;
  padding: 50px 3rem 50px;
  margin-top: 1rem;
  background-color: #1f1f38;  /* Updated background color */
  color: #01b075;  /* Updated text color */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #01b075;  /* Updated border color */
  border-radius: 4px;
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #01b075;  /* Updated label color */
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #01b075;  /* Updated border color */
    }
    &:hover fieldset {
      border-color: #01b075;  /* Updated border color */
    }
    &.Mui-focused fieldset {
      border-color: #01b075;  /* Updated border color */
    }
  }
  & .MuiInputBase-input {
    color: #01b075;  /* Updated input text color */
  }
`;

const StyledBlueButton = styled(BlueButton)`
  background-color: #01b075 !important;  /* Updated button color */
  border-color: #01b075 !important;  /* Updated border color */
  color: white !important;  /* Updated text color */
`;

const StyledButton = styled(Button)`
  border-color: #01b075 !important;  /* Updated border color */
  color: #01b075 !important;  /* Updated text color */
`;
