'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var locationStores = [];

// Constructors start with a Capital letter; however, some developers make not utilize them
function SalmonCookieStore(storeName, minCustomers, maxCustomersParameter, averageCookiesValue) {
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomersParameter = maxCustomersParameter;
    this.averageCookiesValue = averageCookiesValue;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalCookies = 0;

    locationStores.push(this);
};

//==== Random Generator =====//
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

SalmonCookieStore.prototype.populateCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
        var randomNumberOfCustomers = random(this.minCustomers, this.maxCustomersParameter);
        this.customersPerHour.push(randomNumberOfCustomers); //populate customers is pushing 14 numbers into the Array
    };
};

SalmonCookieStore.prototype.calculateCookiesPerHour = function() {
    this.populateCustomers();
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.averageCookiesValue));
        this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    };
};
//ulEL (unordered list, Element)
SalmonCookieStore.prototype.render = function() {
    this.calculateCookiesPerHour();
    var cookieTable = document.getElementById('storeTable');
    var cookieTableRow = document.createElement('tr');
    var cookieTableData = document.createElement('td');

    cookieTableData.textContent = this.storeName;
    cookieTableRow.appendChild(cookieTableData);

    for (var i in hours) {
        cookieTableData = document.createElement('td');
        cookieTableData.textContent = this.cookiesPerHour[i];

        cookieTableRow.appendChild(cookieTableData);

    };

    cookieTableData = document.createElement('td')
    cookieTableData.textContent = this.totalCookies;
    cookieTableRow.appendChild(cookieTableData);

    cookieTable.appendChild(cookieTableRow);
};

function renderAllLocationStores() {
    var cookieTable = document.getElementById('storeTable');
    var cookieTableRow = document.createElement('tr');

    //========== Store Locator Tab Header ==========//
    var storeLocationTableTab = document.createElement('td');
    storeLocationTableTab.textContent = 'Store Location';
    cookieTableRow.appendChild(storeLocationTableTab);

    for (var j in hours) {
        var cookieTableData = document.createElement('td');
        cookieTableData.textContent = hours[j];
        cookieTableRow.appendChild(cookieTableData)
    };

    var storeTotalTableTab = document.createElement('td');
    storeTotalTableTab.textContent = "Total Cookies";
    cookieTableRow.appendChild(storeTotalTableTab);

    cookieTable.appendChild(cookieTableRow);

    //===== End Build of Header Row =======//
    for (var i in locationStores) {
        locationStores[i].render();

    };

};
//========== New Store =============//
var firstAndPike = new SalmonCookieStore('Pike Market Place', 23, 65, 6.3);
var seaTac = new SalmonCookieStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonCookieStore('Seattle Center', 11, 38, 3.7);
var captiolHill = new SalmonCookieStore('Captiol Hill', 20, 38, 2.3);
var Alki = new SalmonCookieStore('Alki', 2, 16, 4.6);

renderAllLocationStores();

//=========== Creating a New Store =========//
function createFormStore() {
    var nameOfStore = document.getElementById('storeName').value;
    var minCustomersNew = document.getElementById('minCustomers').value;
    var maxCustomersNew = document.getElementById('maxCustomers').value;
    var avgCookiesSold = document.getElementById('avgCookies').value;

    //========= Call the New Store =======//
    var createNewStore = new SalmonCookieStore(nameOfStore, minCustomersNew, maxCustomersNew, avgCookiesSold);
    createNewStore.render();
};