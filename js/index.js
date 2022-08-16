var audio = document.getElementById('site_audio');
var body = document.getElementById('site_body');


function loadSite() {
    audio.play();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        body.innerHTML = `<cover></cover><nav><navItem><a href="https://instagram.com/streetbandits.uk">Instagram</a></navItem><navItem><a href="https://discord.gg/m3KZB2kgEw">Discord</a></navItem><navItem><a href="https://github.com/streetbandits">GitHUB</a></navItem></nav>
    <h1>
        <center>
            <animatedText>@streetbandits.uk</animatedText>
        </center>
        Fuck the recession.
    </h1>`;
    } else {
        body.innerHTML = `<tint>
        <video src="https://cdn.discordapp.com/attachments/918602566420533319/985772430905716746/test_Trim.mp4" autoplay muted loop></video>
    </tint><nav><navItem><a href="https://instagram.com/streetbandits.uk">Instagram</a></navItem><navItem><a href="https://discord.gg/m3KZB2kgEw">Discord</a></navItem><navItem><a href="https://github.com/streetbandits">GitHUB</a></navItem></nav>
        <h1>
            <center>
                <animatedText>@streetbandits.uk</animatedText>
            </center>
            Fuck the recession.
        </h1>`; // I cannot program JS for the life of me so this is the most BTEC thing I could think of LOL
    }
    dynamicTitle();
}

async function dynamicTitle() { // this function is also BTEC as fuck
    while (true) {
        document.title = "Welcome!";
        await sleep(1000);
        document.title = "Stop acting bad you mug.";
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
