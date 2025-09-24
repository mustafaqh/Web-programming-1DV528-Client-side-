export default class ScoreManager {
  constructor () {
    // Initializes an empty array to store player data
    this.allPlayers = []
    this.loadScores()
  }

  // Private method to load scores from localStorage
  loadScores () {
    if (typeof window !== 'undefined' && window.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.startsWith('player:')) { // Make sure to load only player keys
          const playerString = localStorage.getItem(key)
          const thePlayer = JSON.parse(playerString)
          this.allPlayers.push(thePlayer)
        }
      }
    } else {
      console.error('localStorage is not available in this environment.')
    }
  }

  // Adds a player's score to the localStorage and updates the local array
  addPlayer (name, score) {
    const player = {
      name,
      time: score
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(`player:${player.name}`, JSON.stringify(player))
      this.allPlayers.push(player) // Update the local array with the new player
    } else {
      console.error('localStorage is not available in this environment.')
    }
  }

  // Retrieves the top 5 high scores
  getHighScores () {
    // Sorts the array of all player objects in descending order of score
    const sortedPlayers = this.allPlayers.sort((a, b) => a.time - b.time)
    // Selects the first five players as the highest scores
    return sortedPlayers.slice(0, 5)
  }
}
