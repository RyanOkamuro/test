//Google Maps global variables
let map;
let infoWindow;
let autoComplete;
let places;
let place;
let converted;

//Initiate Google Maps default map location
function initMap() {
    let defaultPosition = { lat: 43.766680, lng: 11.248663 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultPosition,
        zoom: 15,
        disableDefaultUI: true
    });
    //Autocomplete generator
    autoComplete = new google.maps.places.Autocomplete(document.getElementById('js-current-location'));
    places = new google.maps.places.PlacesService(map);
}

//Get JSON
function getDataFromApi() {
    let homeMoney = $('#js-home-currency').val();
    let travelMoney = $('#js-current-country').val();
    let exchangeTotalAmount = $('#js-homeland-currency-input').val();
    if (exchangeTotalAmount !== undefined) {
        const settings = {
            'async': true,
            'crossDomain': true,
            'url': `https://free.currencyconverterapi.com/api/v5/convert?q=${homeMoney}_${travelMoney}&compact=ultra&apiKey=01c5efd6247a2b380214`,
            'method': 'GET',
            'success': function(exchangeVal) { 
                convertCurrency(exchangeVal, homeMoney, travelMoney, exchangeTotalAmount) 
            }
        }
        $.ajax(settings);

    } else {
        const settings2 = {
            'async': true,
            'crossDomain': true,
            'url': `https://free.currencyconverterapi.com/api/v5/convert?q=${homeMoney}_${travelMoney}&compact=ultra&apiKey=01c5efd6247a2b380214`,
            'method': 'GET',
            'success': function(exchangeVal) { 
                convertCurrency(exchangeVal, homeMoney, travelMoney, 1) 
            }
        }
        $.ajax(settings2);
    }
}

//Create currency exchange left panel display
function convertCurrency(exchangeVal, homeMoney, travelMoney, exchangeTotalAmount) {
    let currencyPair = `${homeMoney}_${travelMoney}`
    let exchangedTotal = exchangeVal[currencyPair] * exchangeTotalAmount;
    let date = moment(exchangeVal.updated_at);
    let currentDate = date.tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a z');     
    converted = `
    <section role='region' class='exchangeBlock'>
        <form role='form' class='exchangeTable'>
            <fieldset name='convertCurrency'>
            <legend>Currency Exchange</legend>
            <label for='js-homeland-currency-input' class='home_currency'>${homeMoney}</label>
            <input placeholder='1.00' type='number' name='js-homeland-currency-input' id='js-homeland-currency-input' autofocus/>
            <button role="button" type="submit" class="js-submit-currency">Submit</button>
            <p class='oneHomeToTravel'>(1 ${homeMoney}: ${numeral(exchangeVal[currencyPair]).format('$0,0.00')} ${travelMoney})</p>
            <p class='afterExchange'>${exchangeTotalAmount} ${homeMoney} = ${numeral(exchangedTotal).format('$0,0.00')} ${travelMoney}</p>
            <p class='date'>Exchange rate last updated: <br />${currentDate}</p>
            <a href='https://ryanokamuro.github.io/Travel-BankEx/'><img src='https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/home-512.png' alt='home-button'></a>
            </fieldset>
        </form>
        <ul id="bank_places"></ul>
    </section>
    `;
    //Display left-hand panel bank listings & addresses
    let outputElem = $('#left-panel');
    outputElem
        .prop('hidden', false)
        .html(converted);
    getExchange();
    locateBanks();
}

//Get amount of home currency the user wants to exchange
function getExchange() {
    $('.exchangeTable').submit(event => {
        event.preventDefault();
        getDataFromApi();
    })
}

//Zoom to map location based on location search
function onPlaceChanged() {
    place = autoComplete.getPlace();
    if (place.geometry) {
        $('.travelex').hide();
        $('.heading').hide();
        map.panTo(place.geometry.location);
        map.setZoom(16);
        getDataFromApi();
    }
    else if (!place.geometry) {
        window.alert("Select location from autocomplete list");
        $('.exchangeBlock').hide();
        return;
    }
}

//Search for banks in nearby region
function locateBanks() {
    infowindow = new google.maps.InfoWindow();
    places.nearbySearch({
        location: place.geometry.location,
        bounds: map.getBounds(),
        type: ['bank']
    }, callback);

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

//Create bank markers
function createMarker(place) {
    let placesList = document.getElementById('bank_places');
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
        map: map,
        position: placeLoc
    });

//List banks on left-hand panel
    let li = document.createElement('li');
    li.innerHTML = `Bank: ${place.name} <br /> Address: ${place.vicinity}`;
    placesList.appendChild(li);
    //Make markers bounce when clicking on left-hand panel 
    li.onclick = function() {
        google.maps.event.trigger(marker, 'click');
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
            $(marker).dequeue();
            }, 1200);
        };

        //Create pop-up window over pin items to describe location name & address 
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name + "<br />" + place.vicinity);
            infowindow.open(map, this);
        });
    }
}

//Function to submit home country & current country traveling in information to move to next page
function activateExchangeWindow() {
    $('.travelex').submit(event => {
        event.preventDefault();
        onPlaceChanged();
        routie('forex-bank')
    });
}

function handleCreateApp() {
    initMap();
    activateExchangeWindow();
    routie('', function() {
        $('#left-panel').prop('hidden', true);
        let outputElem = $('#map');
            outputElem
                .prop('hidden', false)
                $('.travelex').show();
                $('.heading').show();
    });
    routie('forex-bank', function() {
        getDataFromApi();
        getExchange()
        $('.heading').hide();
        $('.travelex').hide();
        let outputElem = $('#left-panel');
            outputElem
                .prop('hidden', false)
                .html(converted);
                getExchange();
                locateBanks();
    });
}

$(handleCreateApp);