// Function to create album objects
function createAlbum(title, artist, tracks) {
    var album = { title: title, artist: artist };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example usage
var album1 = createAlbum("Thriller", "Michael Jackson");
var album2 = createAlbum("Back in Black", "AC/DC", 10);
var album3 = createAlbum("The Dark Side of the Moon", "Pink Floyd", 9);
// Display the albums
console.log(album1);
console.log(album2);
console.log(album3);
