const API = "https://restcountries.com/v3.1/all";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

(async() => {
        try {
            const videos = await fetchData(API);
            let view = ` ${videos.map(
      (x) => `
                <div class="CountryCard">
                    <img src=${x.flags.png} class="CountryFlag">                    
                    <label class="CountryName">${"Nombre: " + x.name.common} </label>                    
                </div>
        `
    )}`;

    document.getElementById("content").innerHTML = view;
  } catch {}
})();