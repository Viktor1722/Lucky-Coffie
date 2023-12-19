import React, { useState, useEffect } from "react";
import { Container, Button} from '@mui/material';

const wishes = [
    "Да бъдеш здрав и щастлив всеки ден на живота си!",
    "Нека всяко утро ти донесе усмивка и радост.",
    "Животът да ти е пълен със смех, обич и успехи.",
    "Да откриеш красотата във всеки един ден.",
    "Здраве, любов и спокойствие – основният триедин на щастлив живот.",
    "Нека всяка твоя стъпка бъде стъпка към постижения и удовлетворение.",
    "Да те заобиколи положителната енергия и благополучие.",
    "Бъди като птица – лека, свободна и пълна с радост.",
    "Светлина и успехи в твоя житейски път!",
    "Да откриеш радостта в малките неща и внимание в големите."
];
 

function MainPage () {
    const [fortune, setFortune] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * wishes.length)
        setFortune(wishes[randomIndex]);
    }, []);

    return(
        <Container className="container">
        <h1 className="title"> Kъсметче с кафето </h1>
        <br/><br/>
        <p aria-placeholder="И твоят късмет е...." className="fortune-display">{fortune}</p>
        <br/><br/>
        <Button sx={{backgroundColor: "#ffff" ,color: "#000000", borderRadius: "210px"}} disableElevation={true} className="form-submit-button" variant="contained">цъкни за да разбереш </Button>

    </Container>
    )
}

export default MainPage;