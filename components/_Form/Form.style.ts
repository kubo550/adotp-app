import styled from "styled-components"
import { Paper } from "@material-ui/core"
export const FormWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledPaperForm = styled(Paper)`
    max-width: 500px;
    padding: 40px;
    text-align:center;
`;