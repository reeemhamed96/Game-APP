'use strict'
export class ShowGames {
    showData(data) {
        let temp = ``
        data.forEach((el) => {
            temp += ` <div class="col-lg-3 col-md-6">
            <div class="card h-100 text-white bg-transparent ">
                <div class="card-body">
                <img src="${el.thumbnail}" class="card-img-top pb-0 w-100" alt="game">
                  <div class="d-flex justify-content-between py-2">  <h3 class="card-title small">${el.title}</h3>
                  <span class="badge p-2 text-bg-primary">Free</span>
                  </div>
                <p class="card-text small text-center opacity-50 ">${el.short_description.split(" ").slice(0, 8).join(" ")}</p>
                </div>
                <div class="card-footer justify-content-between d-flex align-items-center ">
                    <span class="badge ">${el.genre}</span>
                    <span class="badge " >${el.platform}</span>
                </div>
            </div>
        </div>`

        })

        document.getElementById("myRow").innerHTML = temp

    }
    showDetails(idData) {

        document.querySelector("#details .container").innerHTML = `
        <div class="d-flex align-items-center justify-content-between py-4">
        <h1>Details Game</h1>
        <i class="fa-solid fa-xmark fs-3" id="close"></i>
         </div>
    <div class="row g-4">
        <div class="col-md-4">
            <img src="${idData.thumbnail}" alt="" class="w-100">
        </div>
        <div class="col-md-8">
            <h3>Title:${idData.title}</h3>
            <p>Category: <span class="badge text-bg-info">${idData.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${idData.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${idData.status}</span></p>
            <p class="small">${idData.description}</p>
            <a href="${idData.game_url}" target="_blank" class="btn btn-outline-warning text-white ">Show Game</a>
        </div>
    </div>`

    }
}