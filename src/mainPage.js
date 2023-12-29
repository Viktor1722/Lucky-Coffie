import React, { useState, useEffect } from "react";
import { Container, Box} from '@mui/material';

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
        <h3><p aria-placeholder="И твоят късмет е...." className="fortune-display">{fortune}</p></h3>
        <br/><br/>
        {/* <Button disableElevation={true} className="form-submit-button" variant="contained">Към книгата с отзиви</Button> */}
        <Box className="links-to-socialmedia">
            <Box className="links-box">
                <a href="https://icons.getbootstrap.com/icons/facebook/" className="facebook-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 
                        3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
                        1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 
                        1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>

                <a href="https://icons.getbootstrap.com/icons/facebook/" className="facebook-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 
                        3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
                        1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 
                        1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>

                <a href="https://icons.getbootstrap.com/icons/facebook/" className="facebook-submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 
                        3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 
                        1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 
                        1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
            </Box>
            <button className="submit-button">Към книгата с отзови</button>
        </Box>
    </Container>
    )
}

export default MainPage;