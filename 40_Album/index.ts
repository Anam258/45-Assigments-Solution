// Define an Album type
type Album = {
    title: string;
    artist: string;
    tracks?: number; // Optional property
};

// Function to create album objects
function createAlbum(title: string, artist: string, tracks?: number): Album {
    let album: Album = { title, artist };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Example usage
let album1 = createAlbum("Thriller", "Michael Jackson");
let album2 = createAlbum("Back in Black", "AC/DC", 10);
let album3 = createAlbum("The Dark Side of the Moon", "Pink Floyd", 9);

// Display the albums
console.log(album1);
console.log(album2);
console.log(album3);
