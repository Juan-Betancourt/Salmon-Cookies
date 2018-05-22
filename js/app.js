'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function pikePlace() {
    var pikeStore = {
        name: 'Pike Market Place',
        minCustomersPerHour: 23,
        maxCustomersPerHour: 65,
        averageCookiesPerCustomer: 6.3,
        customersEachHour: [],
        cookiesSoldEachHour: [],
        totalDailyCookiesSold: 0,
    };



    pikeStore.calcCustomersEachHour = function() {
        for (var i = 0; i < hours.length; i++) {
            //this calucalutes a min and max number and places it into the array.
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    }

    pikeStore.calcCookiesSoldEachHour = function() {
        pikeStore.calcCustomersEachHour();
        // This will multiply the random customers by the average cookie per customer
        for (var i = 0; i < hours.length; i++) {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer));
            this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldEachHour[i];

        }
    }

    pikeStore.render = function() {
        pikeStore.calcCookiesSoldEachHour();
        // grabbing the parent from the DOM
        var ulEl = document.getElementById('pike');
        for (var i = 0; i < hours.length; i++) {
            // this is utilized to create an element
            var liEl = document.createElement('li');
            // this will give the element content
            liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
            // appending the child to the parent
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
        ulEl.appendChild(liEl);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
    }

    pikeStore.render();
};

function seaTacStore() {
    var seaTac = {
        name: 'SeaTac International Store',
        minCustomersPerHour: 3,
        maxCustomersPerHour: 24,
        averageCookiesPerCustomer: 1.2,
        customersEachHour: [],
        cookiesSoldEachHour: [],
        totalDailyCookiesSold: 0
    };



    seaTac.calcCustomersEachHour = function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    }

    seaTac.calcCookiesSoldEachHour = function() {
        seaTac.calcCustomersEachHour();
        for (var i = 0; i < hours.length; i++) {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer));
            this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldEachHour[i];

        }
    }

    seaTac.render = function() {
        seaTac.calcCookiesSoldEachHour();
        var ulEl = document.getElementById('seatac')
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
        ulEl.appendChild(liEl);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
    }

    seaTac.render();
};

function seattleCenter() {
    var seattleCenterStore = {
        name: 'Seattle Center',
        minCustomersPerHour: 11,
        maxCustomersPerHour: 38,
        averageCookiesPerCustomer: 3.7,
        customersEachHour: [],
        cookiesSoldEachHour: [],
        totalDailyCookiesSold: 0
    };



    seattleCenterStore.calcCustomersEachHour = function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    }

    seattleCenterStore.calcCookiesSoldEachHour = function() {
        seattleCenterStore.calcCustomersEachHour();
        for (var i = 0; i < hours.length; i++) {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer));
            this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldEachHour[i];

        }
    }

    seattleCenterStore.render = function() {
        seattleCenterStore.calcCookiesSoldEachHour();
        var ulEl = document.getElementById('seattlecenter')
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
        ulEl.appendChild(liEl);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
    }

    seattleCenterStore.render();
};

function capitalHill() {
    var capitalHillStore = {
        name: 'Capital Hill Store',
        minCustomersPerHour: 20,
        maxCustomersPerHour: 38,
        averageCookiesPerCustomer: 2.3,
        customersEachHour: [],
        cookiesSoldEachHour: [],
        totalDailyCookiesSold: 0
    };



    capitalHillStore.calcCustomersEachHour = function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    }

    capitalHillStore.calcCookiesSoldEachHour = function() {
        capitalHillStore.calcCustomersEachHour();
        for (var i = 0; i < hours.length; i++) {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer));
            this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldEachHour[i];

        }
    }

    capitalHillStore.render = function() {
        capitalHillStore.calcCookiesSoldEachHour();
        var ulEl = document.getElementById('capitalhill')
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
        ulEl.appendChild(liEl);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
    }

    capitalHillStore.render();
};

function alkiStore() {
    var alkiPlace = {
        name: 'Alki Pike Store',
        minCustomersPerHour: 3,
        maxCustomersPerHour: 24,
        averageCookiesPerCustomer: 1.2,
        customersEachHour: [],
        cookiesSoldEachHour: [],
        totalDailyCookiesSold: 0
    };



    alkiPlace.calcCustomersEachHour = function() {
        for (var i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
        }
    }

    alkiPlace.calcCookiesSoldEachHour = function() {
        alkiPlace.calcCustomersEachHour();
        for (var i = 0; i < hours.length; i++) {
            this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer));
            this.totalDailyCookiesSold = this.totalDailyCookiesSold + this.cookiesSoldEachHour[i];

        }
    }

    alkiPlace.render = function() {
        alkiPlace.calcCookiesSoldEachHour();
        var ulEl = document.getElementById('alki')
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies'
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
        ulEl.appendChild(liEl);
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
    }

    alkiPlace.render();
};

pikePlace();
seaTacStore();
seattleCenter();
capitalHill();
alkiStore();