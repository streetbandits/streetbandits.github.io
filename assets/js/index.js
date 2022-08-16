var audio = document.getElementById('site_audio');
var body = document.getElementById('site_body');

function loadSite() {
    audio.play();
    body.innerHTML = `<center><middle><h1>Matt</h1>You ain't bad, stop actin'. &trade;
    <nav>
        <navItem><a href="https://instagram.com/lgr.matt_">Instagram</a></navItem>
        <navItem><a href="https://github.com/mattlgr">GitHUB</a></navItem>
        <navItem><a href="https://twitter.com/mattlgr_">Twitter</a></navItem>
    </nav></middle></center>`;
}
