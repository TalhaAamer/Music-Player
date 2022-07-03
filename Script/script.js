const music=document.querySelector('audio');
const img=document.querySelector('img');
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const songs=[
    {
        name:"image-1",
        title:"All Of Me",
        artist:"John Legend",
    },
    {
        name:"image-2",
        title:"Attention",
        artist:"Charlie Puth",
    },
    {
        name:"image-3",
        title:"Believer",
        artist:"Imagine Dragons",
    },
    {
        name:"image-4",
        title:"Boom Shankar",
        artist:"Gurbax",
    },
    {
        name:"image-5",
        title:"Dusk Till Dawn",
        artist:"Zayn ft Sia",
    },
    {
        name:"image-6",
        title:"Perfect",
        artist:"Ed Sheeran",
    },
    {
        name:"image-7",
        title:"Bad Liar",
        artist:"Imagine Dragons",
    },
    {
        name:"image-8",
        title:"Sugar",
        artist:"Maroon 5",
    },
    {
        name:"image-9",
        title:"Heroes",
        artist:"Peter Gabriel",
    },
    {
        name:"image-10",
        title:"Faded",
        artist:"Alan Walker",
    },
    {
        name:"image-11",
        title:"Havana",
        artist:"Camila Cabello",
    },
    {
        name:"image-12",
        title:"Old Town Road",
        artist:"Lill Nas X ft Billy Ray Cyrus",
    },
    {
        name:"image-13",
        title:"Back To You",
        artist:"Louis Tomlinson ft Bebe Rexha",
    },
    {
        name:"image-14",
        title:"Girls Like You",
        artist:"Maroon 5 ft Cardi B",
    },
    {
        name:"image-15",
        title:"Every Breath You Take",
        artist:"The Police",
    },
    {
        name:"image-16",
        title:"I Found You",
        artist:"The Wanted",
    },
    {
        name:"image-17",
        title:"AfterHours",
        artist:"TroyBoi",
    },
];
let Playing=false;
const playMusic= () => 
{
    Playing=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};
const pauseMusic= () => 
{
    Playing=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};
play.addEventListener("click", () => 
{
    if(Playing)
    {
        pauseMusic();
    }
    else
    {
        playMusic();
    }
    //  Playing ? pauseMusic() : playMusic();
});
    const loadSong=(songs) =>
    {
        title.textContent=songs.title;
        artist.textContent=songs.artist;
        music.src=`songs/${songs.name}.mp3`;
        img.src=`images/${songs.name}.jpg`;
    };
    songIndex=0;
    const nextSong=() =>
    {
        songIndex=(songIndex+1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };
    const prevSong=() =>
    {
        songIndex = (songIndex -1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
    };

    next.addEventListener("click", nextSong);
    prev.addEventListener("click", prevSong);