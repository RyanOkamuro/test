
let MOCK_DATA =
{
    "redWineCollection": [
        {
            "brand": "Baileyana",
            "wineName": "Firepeak",
            "color": "Red",
            "type": "Pinot Noir",
            "rating": 5,
            "averagePrice": 19,
            "region": "Edna Valley",
            "country": "USA",
            "year": 2014,
            "foodSuggestion": "Chicken and Turkey",
            "image": "https://www.winetransit.com/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/b/a/baileyana_firepeak_pnoir_mv_750.png",
            "history": "The flagship winery from the Niven Family, Baileyana was created over 30 years ago by our matriarch, Catharine Niven, and is now in the expert hands of the second and third generations of her family. An expression of classic cool climate varietals, each wine is sourced from select blocks from our estate Paragon Vineyard—planted in 1973 by Catharine’s husband, Jack. Baileyana’s range of Chardonnays, Pinot Noirs, Syrahs,and sparkling wines are all crafted by our dynamic winemaking team. Refined, rich, and perfectly balanced, Baileyana wines emulate the spirited woman who brought them to life. Boldly Beautiful.",
            "moreInformation": "http://baileyana.com/"
        },
        {
            "brand": "Tarapaca",
            "wineName": "Etiqueta Negra Gran Reserva", 
            "color": "Red",
            "type": "Cabernet Sauvignon",
            "rating": 4.6,
            "averagePrice": 29.99,
            "region": "Maipo Valley",
            "country": "Chile",
            "year": 2014,
            "foodSuggestion": "Lamb",
            "image": "https://files.thewinebowgroup.com/PDF/brand5002/T0008448_tarapaca-g-reserva-etiq-negra-s-f-jpg-1.jpg",
            "history": "Since we were founded at the foothills of the Andes mountain range in 1874, we have crafted elegant, quality wines, becoming one of the most traditional and historical Chilean wineries, as well as a benchmark for viticulture in Chile and over 50 countries.",
            "information": "http://www.tarapaca.cl/en/history/" 
        },
        {
            "brand": "Layer Cake",
            "wineName": "Primitivo",
            "color": "Red",
            "type": "Zinfandel",
            "rating": 3.9,
            "averagePrice": 15,
            "region": "Puglia",
            "country": "Italy",
            "year": 2014,
            "foodSuggestion": "Beef and Chicken",
            "image": "https://www.b-21.com/labels/live/ITLCPR14AE.jpg",
            "history": "At Layer Cake, we work directly with the farmers to grow the fruit we work with. Our grapes are grown to exacting standards in some of the most diversely-layered vineyards around the world. They are handpicked, separated and fermented with care, then aged in French Oak. The character of each Layer Cake wine is influenced by the vineyard soil, which is layered like a cake…every layer tells a story.",
            "information": "http://layercakewines.com/about/"
        },
        {
            "brand": "Penfolds",
            "wineName": "Bin 2",
            "color": "Red",
            "type": "Shiraz",
            "rating": 3.7,
            "averagePrice": 19.99,
            "region": "South Australia",
            "country": "Australia",
            "year": 2012,
            "foodSuggestion": "Beef and Lamb",
            "image": "https://www.nataliemaclean.com/images/winepicks/058ba29dde3c11dc0f1c8adf3ae14ed6/original_penfolds-bin-2-shiraz-mourv-dre-2012-209478-bottle-1415126015.jpg",
            "history": "The success of Penfolds has been driven by the generations of visionaries and innovators. From the beginning in 1844 to today, the merging of science, art and innovation has driven Penfolds to become one of Australia’s most famed and respected winemakers.",
            "information": "https://www.penfolds.com/en-us/about-penfolds/heritage/our-history"
        }
    ]
};

let MOCK_DATA2 =
{
    "whiteWineCollection": [
        {
            "brand": "Christian Moreau",
            "wineName": "Chablis",
            "color": "White",
            "type": "Chardonnay",
            "rating": 4.3,
            "averagePrice": 21.99,
            "region": "Burgundy",
            "country": "France",
            "year": 2015,
            "foodSuggestion": "Seafood",
            "image": "http://frederick-wildman.s3.amazonaws.com/wines_bottle/21cbd891bf45a59dc97dc221ed61ac4b.png",
            "history": "Our vineyard is located in the village of Chablis, in the very heart of the Chablis country, on the left bank of the Serein River, with a south-south east exposure. It is located in the climat Les Pargues. The soil is kimmeridgien calcareously clay which goes back to the upper jurrassic age (portlandien).",
            "moreInformation": "http://www.domainechristianmoreau.com/eng/wines.html"
        },
        {
            "brand": "Dr. Thanisch",
            "wineName": "Bernkasteler Badstube", 
            "color": "White",
            "type": "Riesling",
            "rating": 4.5,
            "averagePrice": 23.99,
            "region": "Mosel",
            "country": "Germany",
            "year": 2016,
            "foodSuggestion": "Seafood",
            "image": "https://www.dynamicwines.com.au/assets/full/DT1115.jpg",
            "history": "The internationally recognized Wwe. Dr. H. Thanisch, Erben Müller-Burgraef estate is located in the picturesque town of Bernkastel-Kues in the heart of the Middle Mosel. Here we cultivate, 12 hectares (ca. 30 acres) of prime, steep Riesling sites.",
            "information": "http://www.dr-thanisch.de/index.php?id=3&L=1" 
        },
        {
            "brand": "Gaja",
            "wineName": "Alteni Di Brassica",
            "color": "White",
            "type": "Sauvignon Blanc",
            "rating": 4.1,
            "averagePrice": 149.99,
            "region": "Piedmont",
            "country": "Italy",
            "year": 2015,
            "foodSuggestion": "Cured Meat, Chicken, Seafood",
            "image": "https://www.worldofwine.com.es/wp-content/uploads/2015/01/it4-alteni-di-brassica-web.jpg",
            "history": "Golden yellow with an elegant perfume with aromatic notes in harmony with the distinct fruit. Dense structure and balanced body, supported by perfectly integrated acidity.",
            "information": "https://www.wine.com/product/gaja-alteni-di-brassica-sauvignon-blanc-2015/335280"
        },
        {
            "brand": "Holm Oak",
            "wineName": "Tasmania",
            "color": "White",
            "type": "Pinot Gris",
            "rating": 3.7,
            "averagePrice": 23.99,
            "region": "Tamar Valley",
            "country": "Australia",
            "year": 2015,
            "foodSuggestion": "Seafood and Chicken",
            "image": "https://cdn6.bigcommerce.com/s-kkxmb/products/6414/images/9897/46581FB8F76904381824AA7C7E6FA9C0__46308.1498782782.600.600.PNG?c=2",
            "history": "The vineyards that winemaker Rebecca and her viticulturist husband Tim Duffy own in the Tamar Valley are steeped with a rich Australian (and sporting!) history, making their site probably one of the most interesting and unique in the country.",
            "information": "http://www.holmoakvineyards.com.au/About-Us/Our-Vineyards"
        }
    ]
};

let userReview = {
    "userReviewComments": [
        {
            "userName": "RedZin",
            "rating": 4.5,
            "reviewStatement": "Very smooth, compliments the dining experience when eating filet mignon"
        },
        {
            "userName": "ShirazMe",
            "rating": 4.3,
            "reviewStatement": "Has a nice fruity taste, makes for a great daily dining wine"
        }
    ]
};

//Search by querying wine label.  
//Search by red or white wine by clicking on the wine bottle image. 
function wineQuery() {
    let wineSearch = `
    <section role='region' class='wineLabelRedWhite'>
        <form role='form' class='wineBrand-form'>
            <fieldset name='wineLabel'>
            <legend>Wine Label Search</legend>
            <label for='js-wine-label' class='winery'>Wine Label</label>
            <select name='js-wine-label' id='js-wine-label'>
                <option value="BF">Baileyana Firepeak</option>
                <option value="CMC">Christian Moreau Chablis</option>
                <option value="DTBB">Dr. Thanisch Bernkasteler Badstube</option>
                <option value="GADB">Gaja Alteni Di Brassica</option>
                <option value="HOT">Holm Oak Tasmania</option>
                <option value="LCP">Layer Cake Primitivo</option>
                <option value="PB">Penfolds Bin 2</option>
                <option value="TENGR">Tarapaca Etiqueta Negra Gran Reserva</option>
            </select>
            <button role='button' type='submit' class='js-label-search'>Submit</button>
            <button role='button' type='button' class='js-label-add-wines'>Add New Bottle</button>
            </fieldset>
        </form>
    </section>
    <section role='region' class='newWineInputArea' aria-live='assertive' hidden></section>
    <section role='region' class='wineRedWhiteImages'>
        <img src='http://www.leclos.net/wp-content/uploads/850761.png' class='red' alt='Lafite'>
        <img src='http://www.jpost.com/HttpHandlers/ShowImage.ashx?id=327394' class='white' alt='Jadot Lous'>
    </section>
    `;
    $('.login-form').hide();
    //display brand, red wine, or white wine search page
    let outputElem = $('#red-white');
        outputElem
            .prop('hidden', false)
            .html(wineSearch);
}

function addWine() {
    let newWine = `
    <section role='region' class='addBottle'>
        <form role='form' class='newBottle-form'>
            <fieldset name='addNewWineListing'>
                <legend>Add New Wine Bottle</legend>
                <label for='js-wine-brand' class='newWineBrand'>Wine Brand</label>
                <input placeholder='Shafer' type='text' name='js-wine-brand' id='js-wine-brand'>
                <label for='js-wine-name' class='newWineName'>Wine Name</label>
                <input placeholder='Hillside Select' type='text' name='js-wine-name' id='js-wine-name'>
                <label for='js-wine-type' class='newWineType'>Wine Type</label>
                <input placeholder='Cabernet Sauvignon' type='text' name='js-wine-type' id='js-wine-type'>
                <label for='js-wine-rating' class='newWineRating'>Rating</label>
                <input placeholder= 4.8 type='number' name='js-wine-rating' id='js-wine-rating'>
                <label for='js-wine-averagePrice' class='newWineAveragePrice'>Average Price</label>
                <input placeholder= 329.99 type='number' name='js-wine-averagePrice' id='js-wine-averagePrice'>
                <label for='js-wine-region' class='newWineRegion'>Region</label>
                <input placeholder='Napa Valley' type='text' name='js-wine-region' id='js-wine-region'>
                <label for='js-wine-country' class='newWineCoutry'>Country of Origin</label>
                <input placeholder='USA' type='text' name='js-wine-country' id='js-wine-country'>
                <label for='js-wine-year' class='newWineYear'>Year</label>
                <input placeholder= 2013 type='number' name='js-wine-year' id='js-wine-year'>
                <label for='js-wine-food' class='newWineFood'>Food Pairing</label>
                <input placeholder='Beef' type='text' name='js-wine-food' id='js-wine-food'>
                <label for='js-wine-image' class='newWineImage'>Wine Image URL</label>
                <input placeholder='www.wineimage...' type='text' name='js-wine-image' id='js-wine-image'>
                <label for='js-wine-history' class='newWineHistory'>History</label>
                <input placeholder='The 2013 Hillside Select is...' type='text' name='js-wine-food' id='js-wine-food'>
                <label for='js-wine-information' class='newWineInformation'>More Information URL</label>
                <input placeholder='www.shafervine...' type='text' name='js-wine-food' id='js-wine-food'>
                <button role='button' type='submit' class='js-add-bottle'>Submit</button>
            </fieldset>
        </form>
    </section>
    `;
    $('.wineRedWhiteImages').hide();
    let outputElem = $('.newWineInputArea');
    outputElem
        .prop('hidden', false)
        .html(newWine);
}

//Display wine list from search results
function wineCollectionListing() {
    let searchResultsList = `
    <section role='region' class='wineResults'>
        <ul id='labelInformation'></ul>
    </section>
    `;
    $('.wineLabelRedWhite').hide();
    $('.wineRedWhiteImages').hide();
    $('.addBottle').hide();
    let outputElem = $('#wineList');
        outputElem
            .prop('hidden', false)
            .html(searchResultsList);
}

//Display single wine information
function singleWineResult(currentWine) {
    let singleWine = `
    <section role='region' class='oneWine'>
        <img src='${currentWine.image}' class='singleRedWineImage' alt='wine-bottle'>
        <ul id='singleLabel'></ul>
    </section>
    <section role='region' class='history-winerylink'>
    ${currentWine.history}
    <a href='${currentWine.information}'>More information</a>
    </section>
    `;
    let li = document.createElement('li');
    li.innerHTML = `
        Wine Label: ${currentWine.brand} <br />
        Type: ${currentWine.type} <br />
        Rating: ${currentWine.rating} <br /> 
        Price: ${currentWine.averagePrice} <br />
        Region: ${currentWine.country} <br />
        Year: ${currentWine.year} <br />
    `;
    $('.wineResults').hide();
    let outputElem = $('#wineDetails');
        outputElem
            .prop('hidden', false)
            .html(singleWine);
    $('#singleLabel').append(li);
}

//MOCK_DATA--For Red Wine; MOCK_DATA2--For White Wine
function getWine(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_DATA)}, 100);
    setTimeout(function(){ callbackFn(MOCK_DATA2)}, 100);
}

//Red Wine Listing
function createRedWineListing(data) {
    for (index in data.redWineCollection) {
    let li = document.createElement('li');
    li.classList.add('vino');
    li.innerHTML = `
    Wine Label: ${data.redWineCollection[index].brand} <br /> 
    Type: ${data.redWineCollection[index].type} <br /> 
    Rating: ${data.redWineCollection[index].rating} <br />
    Price: ${data.redWineCollection[index].averagePrice} <br />  
    Region: ${data.redWineCollection[index].country} <br /> 
    Year: ${data.redWineCollection[index].year} <br />    
    <img src='${data.redWineCollection[index].image}' class='redWine' data-index='${index}' alt='wine-bottle'>
    `;
    $('#labelInformation').append(li);
    }
}

//White Wine Listing
function createWhiteWineListing(data) {
    for (index in data.whiteWineCollection) {
    let li = document.createElement('li');
    li.classList.add('vino');
    li.innerHTML = `
    Wine Label: ${data.whiteWineCollection[index].brand} <br /> 
    Type: ${data.whiteWineCollection[index].type} <br /> 
    Rating: ${data.whiteWineCollection[index].rating} <br />
    Price: ${data.whiteWineCollection[index].averagePrice} <br />  
    Region: ${data.whiteWineCollection[index].country} <br /> 
    Year: ${data.whiteWineCollection[index].year} <br />    
    <img src='${data.whiteWineCollection[index].image}' class='whiteWine' data-index='${index}' alt='wine-bottle'>
    `;
    $('#labelInformation').append(li);
    }
}

function startSearchWindow() {
    $('.login-form').submit(event => {
        event.preventDefault();
        wineQuery();
    });
}

function addNewWineBottle() {
    $('.newWineInputArea').on('click', '.js-label-add-wines', event => {
        event.preventDefault();
        addWine();
    });
}

//Red Wine Search Window
function redWineSearchWindow() {
    $('body').on('click', '.red', event=> {
        event.preventDefault();
        wineCollectionListing();
        getAndDisplayRedWineResults();
    })
}

//White Wine Search Window
function whiteWineSearchWindow() {
    $('body').on('click', '.white', event=> {
        event.preventDefault();
        wineCollectionListing();
        getAndDisplayWhiteWineResults();
    })
}

//Single Red Wine Search Window
function singleRedWineSearchWindow(data) {
    $('body').on('click', '.redWine', event=> {
        let profileWineName = $(event.target).data('index');
        console.log(profileWineName);
        let currentWine = MOCK_DATA.redWineCollection[profileWineName]
        console.log(currentWine);
        event.preventDefault();
        singleWineResult(currentWine);
    })
}

//Single White Wine Search Window
function singleWhiteWineSearchWindow(data) {
    $('body').on('click', '.whiteWine', event=> {
        let profileWineName = $(event.target).data('index');
        console.log(profileWineName);
        let currentWine = MOCK_DATA2.whiteWineCollection[profileWineName]
        console.log(currentWine);
        event.preventDefault();
        singleWineResult(currentWine);
    })
}

function handleCreateApp() {
    startSearchWindow();
    addNewWineBottle() 
    redWineSearchWindow();
    whiteWineSearchWindow();
    singleRedWineSearchWindow();
    singleWhiteWineSearchWindow();
}

function getAndDisplayRedWineResults() {
    getWine(createRedWineListing);
}

function getAndDisplayWhiteWineResults() {
    getWine(createWhiteWineListing);
}
$(handleCreateApp);

$(function() {
    getAndDisplayRedWineResults();
    getAndDisplayWhiteWineResults();
})