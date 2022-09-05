import React from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText} from 'mdb-react-ui-kit';

const Login = () => {
    return (
        <MDBCard>
            <MDBCardImage src='/static/login.jpg' alt='...' position='top'/>
            <MDBCardBody>
                <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Login