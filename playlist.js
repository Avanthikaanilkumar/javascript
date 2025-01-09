let playlist=['s1','s2','s3','s4','s5'];
console.log("Initial Playlist:",playlist)

playlist.push("s6");
console.log("new song:",playlist)

playlist.pop("s6");
console.log("Removed Song:",playlist)

console.log("Playlist Length:", playlist.length);


console.log("First Song:", playlist[0]);
console.log("Last Song:", playlist[playlist.length - 1]);


