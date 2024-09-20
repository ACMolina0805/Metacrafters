/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_firstName, _lastName, _team, _position, _age, _height) {
    const NFT = {
        "firstName": _firstName,
        "lastName": _lastName,
        "team": _team,
        "position": _position,
        "age": _age,
        "height": _height,
    }
    NFTs.push(NFT); 
    console.log("Minted: " + _lastName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("\nPlayer no.  " + (i + 1));
        console.log("Name: \t\t" + NFTs[i].firstName + " " + NFTs[i].lastName);
        console.log("Team: \t\t" + NFTs[i].team);
        console.log("Position: \t" + NFTs[i].position);
        console.log("Age: \t\t" + NFTs[i].age);
        console.log("Height: \t" + NFTs[i].height);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of players: " + NFTs.length);

}

// call your functions below this line
mintNFT("Alyssa", "Valdez", "Creamline", "Outside Hitter", "31", "1.75m");
mintNFT("Victonara", "Galang", "Chery Tiggo", "Outside Hitter", "29", "1.73m");
mintNFT("Julia Melissa", "De Guzman", "Creamline", "Setter", "29", "1.7m");
mintNFT("Ejiya Cruz", "Laure", "Chery Tiggo", "Utility", "25", "1.77m");
mintNFT("Marivic", "Meneses", "Cignal", "Middle Blocker", "28", "1.85m");
mintNFT("Madeleine Yrenea", "Madayag", "Choco Mucho", "Middle Blocker", "26", "1.8m");
mintNFT("Bernadett", "Pepito", "UST WVT", "Libero", "21", "1.57m");
listNFTs();
getTotalSupply();
