'use strict'
const loader = document.getElementById("spinner")
import { ShowGames } from "./design.module.js";
import { GamesID } from "./details.module.js";
export class GamesCategories {
    constructor() {
        this.displayGenre = new ShowGames()
        this.id = new GamesID()
        this.getGenre("mmorpg")
    }

    async getGenre(genre) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7800a3a8a0msh1cd537088f815cbp1fc799jsn6fc38148e513',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const reqGenre = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`, options)
        const genreData = await reqGenre.json()


        if (reqGenre.ok) {

            this.displayGenre.showData(genreData)
            this.addEvent(genreData)
            loader.classList.replace("d-flex", "d-none")
        }
    }

    addEvent(data) {
        document.querySelectorAll(".nav-item").forEach((element) => {
            element.addEventListener("click", (el) => {
                document.querySelector(".nav-item .active").classList.remove("active")
                el.target.classList.add("active")
                loader.classList.replace("d-none", "d-flex")
                this.getGenre(el.target.textContent.toLowerCase());
            })
        })
        document.querySelectorAll(".card").forEach((element, index) => {
            element.addEventListener("click", (el) => {
                loader.classList.replace("d-none", "d-flex")
                this.id.getID(data[index].id)
            })
        })

    }

}









