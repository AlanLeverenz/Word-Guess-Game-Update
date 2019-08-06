// FUNCTIONS

    // make function to build the array - associate with category pulldown selection
    function makeSecretWord (catArray,index) {
        secretIndex = catArray[index][Math.floor(Math.random() * catArray.length)];
        return secretIndex;
    }

    // function to build display string from secret word to compare to word on display (with underscores)
    function makeSecretString (word) {
        displayString = word.charAt(0);
        for ( i = 1 ; i < word.length ; i++ ) {
            displayString = displayString + " " + word.charAt(i);
        }
        return displayString;
    }

    // function to clear the window text and initialize specific vars to clear screen and continue
    function initDisplay() {
        $("#right-text").text("");
        $("#wrong-text").text("");
        $("#messages").text("");
        $("#current-category").empty();
        $("#hanging-man").attr("src","../../assets/images/man_gray.png");
        wonFlag = false;
        lostFlag = false;
        displayArray = [];
        wrongArray = [];
        secretWord = "";
        notit = 0;
        }
    
    // function to play audio sound for winning or losing a game
    var iWon = document.getElementById("won-audio");
    var iLost = document.getElementById("lost-audio");
    function playWonAudio() {
        iWon.play();
    }
    function playLostAudio() {
        iLost.play();
    }
