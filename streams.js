// --- YOUR STREAM LINKS ---
// Edit the names and links below. 
// To add a new channel, just copy the format and add it to the list!
const myChannels = [
    { name: "Hindi Romantic", link: "https://drive.uber.radio/uber/bollywoodlove/icecast.audio" },
{ name: "Bollywood ishq", link: "https://2.mystreaming.net/uber/bollywoodnow/icecast.audio" },
{ name: "New Hindi Hits", link: "https://stream-287.zeno.fm/rqqps6cbe3quv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJycXFwczZjYmUzcXV2IiwiaG9zdCI6InN0cmVhbS0yODcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IklBY2drSS1IVFVLM2JMeVZJV2wyUGciLCJpYXQiOjE3NzcyNjk3NTcsImV4cCI6MTc3NzI2OTgxN30.ExL2lU1wFjSGyaziQs9S-2AfWfltMLbJhagthc-05iA" },
{ name: "Bollywood Masti", link: "https://stream-289.zeno.fm/zu59ykebs2zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ6dTU5eWtlYnMyenV2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkZiY21BeFpsU0lPcDJtRDEzSzVfcVEiLCJpYXQiOjE3NzcyNjk5ODksImV4cCI6MTc3NzI3MDA0OX0.HDwkFzYjOaThJUGAPrc94KVRd5yJnO7RIDhvBWg_3GA" },
{ name: "Romantic Love", link: "https://stream-289.zeno.fm/143d7gty24zuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiIxNDNkN2d0eTI0enV2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkJTOTFDVlE3U3FDN2tZWWh5elV0VUEiLCJpYXQiOjE3NzcyNjk0NzIsImV4cCI6MTc3NzI2OTUzMn0.Su1D0aTe3zM5pBNCtVqLRkLHBZPjkgM6QHYVk20ebRg" },
{ name: "Hindi Top 100", link: "https://stream-286.zeno.fm/in0oeizhszguv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJpbjBvZWl6aHN6Z3V2IiwiaG9zdCI6InN0cmVhbS0yODYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Il9RVVhqTzlWUU1LODRSVmFtb1RmUlEiLCJpYXQiOjE3NzczOTkwMzEsImV4cCI6MTc3NzM5OTA5MX0.OZogSJ2T46aXQs5XQ2BU_FB3wM_dduJievmAwItKcZc&dyn-uid=2877030736530002552&an-uid=3960023547054335032&dot-uid=0d4c2204008e2cb39ef77a86&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&amb-uid=3184846236175117076&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "Arijit Hits", link: "https://stream-289.zeno.fm/wn6muavgfr2tv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ3bjZtdWF2Z2ZyMnR2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ikk0LWZWRGlWUVYycWlsVUZXTXpTWGciLCJpYXQiOjE3NzczOTg1ODUsImV4cCI6MTc3NzM5ODY0NX0.Xc0LSy23OL6Akv5oOU_2aG98pk96rCAElGsns8AM618" },
{ name: "Hindi New Hits", link: "https://stream-285.zeno.fm/kr08sxc2tfeuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJrcjA4c3hjMnRmZXV2IiwiaG9zdCI6InN0cmVhbS0yODUuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjJRc3ZaM2hMVDltU2xsY2J3bWd0RGciLCJpYXQiOjE3NzczOTg1NjcsImV4cCI6MTc3NzM5ODYyN30.x5Wg2q6kHfWHKPqCfu2vL1EeE7rcG2Svg3T92q7GpBc&an-uid=3960023547054335032&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "Bollywood Hits", link: "https://stream-280.zeno.fm/cqak4ap7by8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJjcWFrNGFwN2J5OHV2IiwiaG9zdCI6InN0cmVhbS0yODAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IlBlMVlxZnRIU2ZXV29Yd25Pb0dWb3ciLCJpYXQiOjE3NzczOTg2NzIsImV4cCI6MTc3NzM5ODczMn0.nH15onGTDu7s-63zXIE2Vzb3pZS-Z_VzUFYCPlqmQA8&an-uid=3960023547054335032&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "Bangla Hits", link: "https://eu6.fastcast4u.com/proxy/arrahm00?mp=/1" },
{ name: "Bangla 24/7", link: "https://server.geetradio.com:8050/radio.mp3" },
{ name: "90s Bengali", link: "https://stream-287.zeno.fm/9bze9t1pvs8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5YnplOXQxcHZzOHV2IiwiaG9zdCI6InN0cmVhbS0yODcuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IklzOUhheEJ6UWVHeWpQSGk3UjdkcFEiLCJpYXQiOjE3NzczOTczOTQsImV4cCI6MTc3NzM5NzQ1NH0.dajA39wjdUXUhWLmxbgDTfCyHfpb3z3n6vL_aIwNL9s&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "90s Hindi Melody", link: "https://stream-286.zeno.fm/eyxg23ky4x8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJleXhnMjNreTR4OHV2IiwiaG9zdCI6InN0cmVhbS0yODYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImFLT0tfMGt5VDlLWWVmeUxYM3JUVFEiLCJpYXQiOjE3NzcyNzExNjMsImV4cCI6MTc3NzI3MTIyM30.aa-1LBSCWtQDaiEFJupVYDgXxLdswjCjVz7d0psEdao" },
{ name: "Hindi 90s Hits", link: "https://stream-289.zeno.fm/rm4i9pdex3cuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJybTRpOXBkZXgzY3V2IiwiaG9zdCI6InN0cmVhbS0yODkuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IlFoTVdEQ3VZUThXMjhRSk5LQlJISlEiLCJpYXQiOjE3NzcyNjkwMTQsImV4cCI6MTc3NzI2OTA3NH0.wVQMqXot8Glqw1M7RZS2xJzAW7ecII4u8ThT-85nccE" },
{ name: "90s ishq", link: "https://server.mixify.in/listen/listen/radio.mp3" },
{ name: "90s Classic", link: "https://s6.yesstreaming.net/proxy/john1237?mp=/live" },
{ name: "Club Remix", link: "https://stream-283.zeno.fm/pkvh8zhyzp8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJwa3ZoOHpoeXpwOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjdKVHVIY3ctUVlXRkl2cVFqS2FWQ1EiLCJpYXQiOjE3NzczOTgxMDQsImV4cCI6MTc3NzM5ODE2NH0.vS0cjCEUkmHgLYCWbU4OvLvFaVtdTluVV7Nr3oDBWd4&an-uid=3960023547054335032&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "Punjabi DJ", link: "https://stream-282.zeno.fm/ryektectsf9uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJyeWVrdGVjdHNmOXV2IiwiaG9zdCI6InN0cmVhbS0yODIuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InlPUTFKNlVmUnkyVU9qaUptU3lSNFEiLCJpYXQiOjE3NzczOTk0NzMsImV4cCI6MTc3NzM5OTUzM30.o0dHeCio73l2iChB7Z_VRd0Ong7HxgwdO2-UJgGFfY8&dyn-uid=2877030736530002552&an-uid=3960023547054335032&dot-uid=0d4c2204008e2cb39ef77a86&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&amb-uid=3184846236175117076&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" },
{ name: "DJ Remix", link: "https://stream-286.zeno.fm/ck05bfqfys8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJjazA1YmZxZnlzOHV2IiwiaG9zdCI6InN0cmVhbS0yODYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkhQYWpKal82U3J1Y2FqbmV2RVN5aVEiLCJpYXQiOjE3NzczOTk4MDAsImV4cCI6MTc3NzM5OTg2MH0.jxUvRpx2-J_UY8KRwYOghUCDNDOUaVK79xPa93ZOzRA&dyn-uid=2877030736530002552&an-uid=3960023547054335032&dot-uid=0d4c2204008e2cb39ef77a86&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&amb-uid=3184846236175117076" },
{ name: "DJ India", link: "https://stream-176.zeno.fm/85a0zax9uwzuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI4NWEwemF4OXV3enV2IiwiaG9zdCI6InN0cmVhbS0xNzYuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Im94QjhYTG02UmlLYWZ4SDNyTzhZbUEiLCJpYXQiOjE3NzczOTk5MDYsImV4cCI6MTc3NzM5OTk2Nn0.LZzA81h6oNv-zf3ByGmZzU6LUeh30HmJIUH4aZW7K6Y&dyn-uid=2877030736530002552&an-uid=3960023547054335032&dot-uid=0d4c2204008e2cb39ef77a86&triton-uid=cookie%3A18e2ada2-4034-4c7e-ab67-5cd39a55ea43&amb-uid=3184846236175117076&aw_0_req_lsid=bb93e37443b21ceebea35cbf4949f01c" }
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
