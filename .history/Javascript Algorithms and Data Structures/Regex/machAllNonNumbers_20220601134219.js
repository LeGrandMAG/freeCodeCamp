let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;


let x = 0;
for (i in movieName.match(noNumRegex)){
    x += 1;
}