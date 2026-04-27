// --- YOUR STREAM LINKS ---
// Edit the names and links below. 
// To add a new channel, just copy the format and add it to the list!
const myChannels = [
    { name: "Channel 1", link: "https://drive.uber.radio/uber/bollywoodlove/icecast.audio" },
{ name: "Channel 2", link: "https://2.mystreaming.net/uber/bollywoodnow/icecast.audio" },
{ name: "Channel 3", link: "https://stream-287.zeno.fm/rqqps6cbe3quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJycXFwczZjYmUzcXV2IiwiaG9zdCI6InN0cmVhbS0yODcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IklBY2drSS1IVFVLM2JMeVZJV2wyUGciLCJpYXQiOjE3NzcyNjk3NTcsImV4cCI6MTc3NzI2OTgxN30.ExL2lU1wFjSGyaziQs9S-2AfWfltMLbJhagthc-05iA" },
{ name: "Channel 4", link: "https://stream-289.zeno.fm/zu59ykebs2zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ6dTU5eWtlYnMyenV2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkZiY21BeFpsU0lPcDJtRDEzSzVfcVEiLCJpYXQiOjE3NzcyNjk5ODksImV4cCI6MTc3NzI3MDA0OX0.HDwkFzYjOaThJUGAPrc94KVRd5yJnO7RIDhvBWg_3GA" },
{ name: "Channel 5", link: "https://stream-289.zeno.fm/143d7gty24zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiIxNDNkN2d0eTI0enV2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkJTOTFDVlE3U3FDN2tZWWh5elV0VUEiLCJpYXQiOjE3NzcyNjk0NzIsImV4cCI6MTc3NzI2OTUzMn0.Su1D0aTe3zM5pBNCtVqLRkLHBZPjkgM6QHYVk20ebRg" },
{ name: "Channel 6", link: "https://stream-286.zeno.fm/eyxg23ky4x8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJleXhnMjNreTR4OHV2IiwiaG9zdCI6InN0cmVhbS0yODYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImFLT0tfMGt5VDlLWWVmeUxYM3JUVFEiLCJpYXQiOjE3NzcyNzExNjMsImV4cCI6MTc3NzI3MTIyM30.aa-1LBSCWtQDaiEFJupVYDgXxLdswjCjVz7d0psEdao" },
{ name: "Channel 7", link: "https://stream-289.zeno.fm/rm4i9pdex3cuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJybTRpOXBkZXgzY3V2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IlFoTVdEQ3VZUThXMjhRSk5LQlJISlEiLCJpYXQiOjE3NzcyNjkwMTQsImV4cCI6MTc3NzI2OTA3NH0.wVQMqXot8Glqw1M7RZS2xJzAW7ecII4u8ThT-85nccE" },
{ name: "Channel 8", link: "https://server.mixify.in/listen/listen/radio.mp3" },
{ name: "Channel 9", link: "https://s6.yesstreaming.net/proxy/john1237?mp=/live" },
{ name: "Channel 10", link: "https://stream-170.zeno.fm/9phrkb1e3v8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5cGhya2IxZTN2OHV2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InZfbFZJbUg4VElPZndSQzVGMy1KaVEiLCJpYXQiOjE3NzcyNjg5NTgsImV4cCI6MTc3NzI2OTAxOH0.KyXXAzkUDcHDgUGLIabEcWUougRn83sETzV4C0J2dqU" }
];


// --- PLAYER LOGIC ---
const channelList = document.getElementById('channel-list');
const audioPlayer = document.getElementById('audio-player');
const playIconSvg = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-play.svg";
const stopIconSvg = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/square.svg";

// Build the buttons
myChannels.forEach(channel => {
    const button = document.createElement('button');
    button.className = 'channel-button';
    button.innerHTML = `
        <span class="channel-text">${channel.name}</span>
        <img src="${playIconSvg}" class="play-icon" alt="Play">
    `;
    
    button.addEventListener('click', function() {
        const playIcon = this.querySelector('.play-icon');
        const channelText = this.querySelector('.channel-text');

        // Check if current stream is playing
        if (audioPlayer.src === channel.link && !audioPlayer.paused) {
            audioPlayer.pause();
            playIcon.src = playIconSvg;
            playIcon.classList.remove('active-pulse');
            channelText.classList.remove('playing-text');
        } else {
            // Reset all other buttons
            document.querySelectorAll('.play-icon').forEach(icon => {
                icon.src = playIconSvg;
                icon.classList.remove('active-pulse');
            });
            document.querySelectorAll('.channel-text').forEach(text => {
                text.classList.remove('playing-text');
            });
            
            // Play new stream
            audioPlayer.src = channel.link;
            audioPlayer.load();
            audioPlayer.play();
            
            // Set active state
            playIcon.src = stopIconSvg;
            playIcon.classList.add('active-pulse'); 
            channelText.classList.add('playing-text'); 
        }
    });

    channelList.appendChild(button);
});
