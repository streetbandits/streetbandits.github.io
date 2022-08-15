var audio = document.getElementById('site_audio');
var body = document.getElementById('site_body');

function loadSite() {
    audio.play();
    body.innerHTML = `<nav><navItem><a href="https://instagram.com/streetbandits.uk">Instagram</a></navItem><navItem><a href="https://discord.gg/m3KZB2kgEw">Discord</a></navItem><navItem><a href="https://github.com/streetbandits">GitHUB</a></navItem></nav>

    <h1>
        <center>
            <animatedText>@streetbandits.uk</animatedText>
        </center>
        Home of all things UK cars and crime.
    </h1>`; // I cannot program JS for the life of me so this is the most BTEC thing I could think of LOL
    dynamicTitle();
}

async function dynamicTitle() { // this function is also BTEC as fuck
    while (true) {
        document.title = "Welcome!";
        await sleep(1000);
        document.title = "Home of UK cars and crime.";
        await sleep(1000);
        document.title = "Developed by streetbandits";
        await sleep(1000);
        document.title = "Follow us on instagram!";
        await sleep(1000);
    }
}

function sleep(ms) { // Stolen from github, idfk the URL.
    return new Promise(resolve => setTimeout(resolve, ms));
}