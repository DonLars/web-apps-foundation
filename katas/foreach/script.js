"use strict";
const artists = [
  {
    name: "Kyuss",
    albums: [
      { title: "wretch", year: 1991 },
      { title: "Blues for the Red Sun", year: 1992 },
      { title: "Welcome to Sky Valley", year: 1994 },
      { title: "And the Circus Leaves Town", year: 1995 },
    ],
  },
  {
    name: "Ben Harper",
    albums: [
      { title: "The Will to Live", year: 1997 },
      { title: "Burn to Shine", year: 1999 },
      { title: "Live from Mars", year: 2001 },
      { title: "Diamonds on the Inside", year: 2003 },
    ],
  },
];

// FOR EACH
artists.forEach((artist, index, artists) => {
  console.log(index + artist.name);
});

// MAP

/* const artistNames = artists.map((artist) => {
  return artist.name;
});

console.log(artistNames); */

// REDUCE

/* let totalAlbumCount = 0;
for (let i = 0; i < artists.length; i++) {
  const albumCount = artists[i].albums.length;
  totalAlbumCount += albumCount;
} */

const totalAlbumCount = artists.reduce(function (
  result,
  artist,
  index,
  artists
) {
  const albumCount = artist.albums.length;
  return (result += albumCount);
},
0);

console.log(totalAlbumCount);

// FILTER

const albums = [
  {
    title: "Wretch",
    artist: "Nick Cave",
    year: 1991,
  },
  {
    title: "Blues for the Red Sun",
    artist: "Nick Cave",
    year: 1992,
  },
  {
    title: "Welcome to Sky Valley",
    artist: "Ben Harper",
    year: 1994,
  },
  {
    title: "And the Circus Leaves Town",
    artist: "Ben Harper",
    year: 2001,
  },
];

// ALT
/* const albumsBefore2000 = [];
for (let i = 0; i < albums.length; i++) {
  if (albums[i].year < 2000) {
    albumsBefore2000.push(albums[i]);
  }
}
 */
// NEU

const albumsBefore2000 = albums.filter((album) => {
  return album.year < 2000;
});
console.log(albumsBefore2000.length);
