'use strict';
//=============== Global Settings ==================//
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var salmonLocation = [];
var totalCookiesEachHour = 0;
var CookiesSold = 0;

//=============== Creating Constructor =============//
function SalmonCookieLocation(storeName, minCustomers, maxCustomers, averageCookiesSold) {
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.averageCookiesSold = averageCookiesSold;
    this.randomCustomersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookiesSoldEachDay = 0;
    salmonLocation.push(this);
}
// console.log(this);

//============== Object Prototype ==============//
SalmonCookieLocation.prototype.calcRandomCustomerPerHour = function() {
    for (var i = 0; i < storeHours.length; i++) {
        this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    };
};

SalmonCookieLocation.prototype.calcCookiesSoldEachHour = function() {
    for (var j = 0; j < storeHours.length; j++) {
        this.cookiesSoldEachHour.push(Math.round(this.averageCookiesSold * this.randomCustomersPerHour[j]));
    };
};
SalmonCookieLocation.prototype.calcTotalCookiesSoldEachDay = function() {
    for (var k = 0; k < storeHours.length; k++) {
        this.totalCookiesSoldEachDay = this.totalCookiesSoldEachDay + this.cookiesSoldEachHour[k];
    };
    return this.totalCookiesSoldEachDay;
};

//================ Pat's Current Store Locations ===============//
function createLocation() {
    new SalmonCookieLocation('1st and Pike', 23, 65, 6.3);
    new SalmonCookieLocation('Seatac Airport', 3, 24, 1.2);
    new SalmonCookieLocation('Seattle Center', 11, 38, 3.7);
    new SalmonCookieLocation('Capitol Hill', 20, 38, 2.3);
    new SalmonCookieLocation('Alki', 2, 16, 4.6);
};

//================ Create Table ==============//
function headerRow() {
    var cookieTable = document.getElementById('store-table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    cookieTable.appendChild(trEl);
    thEl.textContent = 'Store Locations';
    trEl.appendChild(thEl);
    for (var j = 0; j < storeHours.length; j++) {
        thEl = document.createElement('th');
        thEl.textContent = storeHours[j];
        trEl.appendChild(thEl);
    };
    thEl = document.createElement('th');
    thEl.textContent = 'Total Cookies Daily';
    trEl.appendChild(thEl);
};

//=============== Generate Information to Table Data Cell ============//
function storeData() {
    var cookieTable = document.getElementById('store-table');
    cookieTable.innerHTML = '';
    headerRow();
    for (var i = 0; i < salmonLocation.length; i++) {
        var trEl = document.createElement('tr');
        cookieTable.appendChild(trEl);
        var tdEl = document.createElement('td');
        cookieTable.appendChild(tdEl);
        tdEl.textContent = salmonLocation[i].storeName;
        for (var j = 0; j < storeHours.length + 1; j++) {
            tdEl = document.createElement('td');
            cookieTable.appendChild(tdEl);
            tdEl.textContent = salmonLocation[i].cookiesSoldEachHour[j];
            if (j === 15) {
                cookieTable.appendChild(tdEl);
                tdEl.textContent = salmonLocation[i].totalCookiesSoldEachDay;
            };
        };
    };
};

//================ Table Totals =============//
function totals() {
    var cookieTable = document.getElementById('store-table');
    var trEl = document.createElement('tr');
    cookieTable.appendChild(trEl);
    var tdEl = document.createElement('td');
    cookieTable.appendChild(tdEl);
    tdEl.textContent = 'Totals';
    var netTotals = 0;
    for (var i = 0; i < storeHours.length; i++) {
        var totalsEachHour = 0;
        for (var j = 0; j < salmonLocation.length; j++) {
            totalsEachHour += salmonLocation[j].cookiesSoldEachHour[i];
            netTotals += salmonLocation[j].cookiesSoldEachHour[i];
        };
        tdEl = document.createElement('td');
        cookieTable.appendChild(tdEl);
        tdEl.textContent = totalsEachHour;
    };
    tdEl = document.createElement('td');
    cookieTable.appendChild(tdEl);
    tdEl.textContent = netTotals;
};

//================ Create Form ====================//
function createUserForm(event) {
    event.preventDefault();
    var customerForm = document.getElementById('store-form');
    var storeName = customerForm.newStoreName.value;
    var newStoreMinCustomers = parseInt(customerForm.minCustomers.value);
    var newStoreMaxCustomers = parseInt(customerForm.maxCustomers.value);
    var newAverageCookies = parseFloat(customerForm.averageCookies.value);
    if (!newStoreMinCustomers || !newStoreMaxCustomers || !newAverageCookies) {
        alert('Please input the correct value for each inputs!');
    } else {
        var createNewStore = new SalmonCookieLocation(storeName, newStoreMinCustomers, newStoreMaxCustomers, newAverageCookies);
        createNewStore.calcRandomCustomerPerHour();
        createNewStore.calcCookiesSoldEachHour();
        createNewStore.calcTotalCookiesSoldEachDay();
        storeData();
        totals();
        // console.log(storeName, newStoreMinCustomers, newStoreMaxCustomers, newAverageCookies);
        // console.log(salmonLocation);
    };
};
var userSubmitButton = document.getElementById('button').addEventListener('click', createUserForm);

//=============== Execute the Table and Form ==============//
function executeTable() {
    createLocation();
    for (var i = 0; i < salmonLocation.length; i++) {
        salmonLocation[i].calcRandomCustomerPerHour();
        salmonLocation[i].calcCookiesSoldEachHour();
        salmonLocation[i].calcTotalCookiesSoldEachDay();
    };
    headerRow();
    storeData();
    totals();
};
executeTable();