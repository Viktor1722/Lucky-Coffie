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

function generateWish() {
    const wishDisplay = document.getElementById('fortune-display');
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const randomWish = wishes[randomIndex];
    wishDisplay.textContent = randomWish;
}

function displayQRCode(qrCodeUrl) {
    const qrCodeSection = document.getElementById('qr-code-section');
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = qrCodeUrl;
    qrCodeImage.alt = 'QR Code';    
}

function openGoogleReview() {
    // Open a new window or redirect to your Google Places page for reviews
    window.open('URL_TO_YOUR_GOOGLE_PLACES_PAGE', '_blank');
}

function shareOnFacebook() {
    const fortuneToShare = document.getElementById('fortune-display').textContent;
    const url = `https://cherrybymary.com/en?fortune=${encodeURIComponent(fortuneToShare)}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareOnInstagram() {
    const fortuneToShare = document.getElementById('fortune-display').textContent;
    const url = `URL_TO_YOUR_WEB    SITE?fortune=${encodeURIComponent(fortuneToShare)}`;
    window.open(`https://www.instagram.com/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareOnTwitter() {
    const fortuneToShare = document.getElementById('fortune-display').textContent;
    const url = `https://cherrybymary.com/en?fortune=${encodeURIComponent(fortuneToShare)}`;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check%20out%20this%20fortune:%20${encodeURIComponent(fortuneToShare)}`, '_blank');
}
function submitGoogleReview() {
    const rating = document.getElementById('review-rating').value;
    const reviewText = document.getElementById('review-text').value;

    // Perform actions to submit the review (you may handle this via AJAX or other means)
    console.log(`Rating: ${rating}, Review: ${reviewText}`);

}
