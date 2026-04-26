// --- YOUR STREAM LINKS ---
// Edit the names and links below. 
// To add a new channel, just copy the format and add it to the list!
const myChannels = [
    { name: "Channel 1", link: "https://drive.uber.radio/uber/bollywoodlove/icecast.audio" },
    { name: "Channel 2", link: "https://s6.yesstreaming.net/proxy/john1237?mp=/live" },
    { name: "Channel 3", link: "https://stream-170.zeno.fm/9phrkb1e3v8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5cGhya2IxZTN2OHV2IiwiaG9zdCI6InN0cmVhbS0xNzAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjZxOVF3aWNBUURHLVB0WE5CTXVrbGciLCJpYXQiOjE3NzcyMjc5OTcsImV4cCI6MTc3NzIyODA1N30.3jX5QjOV_1wHjEgzXW3DwK_ErjjpBMHowy0fmaKWg8s" },
    { name: "Channel 4", link: "https://stream-289.zeno.fm/zu59ykebs2zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ6dTU5eWtlYnMyenV2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjJDOUV4MTZjU1RlN29tYjFyWTc3eFEiLCJpYXQiOjE3NzcyMjg1MjksImV4cCI6MTc3NzIyODU4OX0.NW9pQHoMa1pdfmDLf_YMGRK2fYH4qwLVX2WOh2w3rjo" }
];


// --- NEW MODERN LOGIC (Handles animations and active states) ---
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
            // STOP playback
            audioPlayer.pause();
            
            // RESET this button's look
            playIcon.src = playIconSvg;
            playIcon.classList.remove('active-pulse');
            channelText.classList.remove('playing-text');
        } else {
            // PLAY new stream
            
            // First, RESET ALL other buttons back to normal
            document.querySelectorAll('.play-icon').forEach(icon => {
                icon.src = playIconSvg;
                icon.classList.remove('active-pulse');
            });
            document.querySelectorAll('.channel-text').forEach(text => {
                text.classList.remove('playing-text');
            });
            
            // Set new stream
            audioPlayer.src = channel.link;
            audioPlayer.load();
            audioPlayer.play();
            
            // Change THIS button to active/stop state
            playIcon.src = stopIconSvg;
            playIcon.classList.add('active-pulse'); // Start the pulsing animation
            channelText.classList.add('playing-text'); // Turn text accent color
        }
    });

    channelList.appendChild(button);
});