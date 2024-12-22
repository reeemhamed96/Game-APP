'use strict'
export const detailsModal = document.getElementById("details")
const homeSection = document.getElementById("home")
import { ShowGames } from "./design.module.js";
export class GamesID {
    constructor() {
        this.displayGenre = new ShowGames()

    }
    async getID(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7800a3a8a0msh1cd537088f815cbp1fc799jsn6fc38148e513',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const reqID = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const gameID = await reqID.json()
        if (reqID.ok) {
            this.displayGenre.showDetails(gameID)
            document.getElementById("spinner").classList.replace("d-flex", "d-none")
            homeSection.classList.add("d-none")
            detailsModal.classList.replace("d-none", "d-block")
            document.getElementById("close").addEventListener("click", () => {
                detailsModal.classList.replace("d-block", "d-none")
                homeSection.classList.remove("d-none")
            })

        }




    }

}
