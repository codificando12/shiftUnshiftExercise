// ejercicio para agregar canciones usando shift y unshift

function deleteSong () {
    allSongs.push(playlist[0]);
    playlist.shift();
    console.log(playlist);
    console.log(allSongs);
}

function addSong () {
    playlist.unshift(allSongs[0])
    allSongs.shift()
    console.log(playlist)
    console.log(allSongs)
}

const playlist = ["song 0"];
const allSongs = ["Song 1", "Song 2", "Song 3", "Song 4"];

const addSongButton = document.querySelector(".add-song");
const deleteSongButton = document.querySelector(".delete-song");

deleteSongButton.addEventListener("click", deleteSong);
addSongButton.addEventListener("click", addSong)