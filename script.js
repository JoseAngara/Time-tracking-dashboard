function showData(period, data) {
    let periods = {
        daily: "day",
        weekly: "week",
        monthly: "month"
    }
    let dashboard = document.querySelectorAll(".card--dashboard");
    for (let card of dashboard) {
        let current = card.querySelector(".card__current");
        let previous = card.querySelector(".card__previous");
        current.innerHTML = `${data[card.getAttribute("data-title")][period].current}hrs`;
        previous.innerHTML = `Last ${periods[period]} - ${data[card.getAttribute("data-title")][period].current}hrs`;
    }
    let active = document.querySelector('.active');
    active.classList.remove('active');
    active.classList.add('innactive');
    let elem = document.querySelector(`[data-period=${period}]`);
    elem.classList.remove('innactive');
    elem.classList.add('active');
}


let data = {
    Work: {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    },
    Play: {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    },
    Study: {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    },
    Exercise: {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    },
    Social: {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    },
    "Self Care": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    }
};