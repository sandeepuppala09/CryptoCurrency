let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr`;

let promise = fetch(url);
promise.then((resourses) => {
  return resourses.json();
}).then((resourses) => {

  let card = "";
  for (i in resourses) {
    card += `<div class="col"><div class="card mx-2 mb-2" style="width: 20rem;">
  <img src="${resourses[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${resourses[i].name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Current Price: ${resourses[i].current_price}₹</li>
    <li class="list-group-item">Market capitalization: ${resourses[i].market_cap} </li>
    <li class="list-group-item">Market Rank:${resourses[i].market_cap_rank}</li>
    <li class="list-group-item">Fully Diluted Valuation: ${resourses[i].fully_diluted_valuation}₹</li>
    <li class="list-group-item">Total Volume: ${resourses[i].total_volume}</li>
    <li class="list-group-item">Heighest in 24hrs: ${resourses[i].high_24h}₹</li>
    <li class="list-group-item">Lowest in 24hrs: ${resourses[i].low_24h}₹</li>
    <li class="list-group-item">Price Change in 24hrs: ${resourses[i].price_change_24h}(${resourses[i].price_change_percentage_24h}%)₹</li>
    <li class="list-group-item">Market capitalization Change in 24hrs: ${resourses[i].market_cap_change_24h}(${resourses[i].market_cap_change_percentage_24h}%)₹</li>
    <li class="list-group-item">Last Updates: ${resourses[i].last_updated}</li>
  </ul>
</div>
</div>`
  }
  document.getElementById("data").innerHTML = card;
})
