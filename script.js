// DOM refresher: these don't get called normally
// they are ran when JS is executed and store their values to those elements
const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2310-FSA-ET-WEB-PT-SF';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        // I am filling in this part - we need a stored variable that calls the API data
        // fetchAllPlayers will only fetch all players at a base level
        const response = await fetch(APIURL);

        // Parse the response JSON and store it in a variable
        const data = await response.json();

        // Store the fetched players in a variable
        const fetchedPlayers = data.players;

        // Log the fetched players to the console (for testing)
        console.log('Fetched Players:', fetchedPlayers);

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the response JSON and store it in a variable
            const data = await response.json();

            // Store the fetched players in a variable
            const fetchedPlayers = data.players;

            // Log the fetched players to the console (for testing)
            console.log('Fetched Players:', fetchedPlayers);

        } else {
            // If the response status is not ok, throw an error
            throw new Error(`Failed to fetch players. Status: ${response.status}`);
        }
            // Return the array of fetched players
            return fetchedPlayers;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
    // finally is a type of JS option where this last code will run whether something fails or not
    // we probably don't need this but want this option available

};

const fetchSinglePlayer = async (playerId) => {
    try {
        // Construct the URL for fetching a single player by playerId
        const singlePlayerURL = `${APIURL}/${playerId}`;

        // Fetch the single player details from the API
        const response = await fetch(singlePlayerURL);

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the response JSON and store it in a variable
            const data = await response.json();

            // Store the fetched player details in a variable
            const fetchedPlayer = data.player;

            // Log the fetched player details to the console (for testing)
            console.log(`Fetched Player #${playerId}:`, fetchedPlayer);

            // Return the details of the fetched player
            return fetchedPlayer;
        } else {
            // If the response status is not ok, throw an error
            throw new Error(`Failed to fetch player #${playerId}. Status: ${response.status}`);
        }
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();






// Notes on passing between multiple functions with arrow functions
/*
const doubleNumber = (number) => {
    return number * 2;
};

// myResult will store 5 passed into doubleNumber function above and output the return
const myResultForFive = doubleNumber(5);

// log result
console.log(myResultForFive);


*/