import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const FormWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
`;


export const StyledPaper = styled(Paper)`
    width: 320px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 12px;

    form {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items:center;
        flex-direction: column;
        min-height: 300px;
    }

`