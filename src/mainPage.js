import React from "react";
import { Container, Button} from '@mui/material';



function MainPage () {
    return(
        <Container className="container">
        <h1 className="title"> Kъсметче с кафето </h1>
        <br/><br/>
        <h4 className="fortune-display">И твоят късмет е....</h4>
        <br/><br/>
        <Button sx={{backgroundColor: "#ffff" ,color: "#000000", borderRadius: "210px"}} className="form-submit-button" variant="contained">цъкни за да разбереш </Button>

    </Container>
    )
}

export default MainPage;