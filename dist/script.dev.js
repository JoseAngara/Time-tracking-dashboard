"use strict";

function showData(period, data) {
  var periods = {
    daily: "day",
    weekly: "week",
    monthly: "month"
  };
  var dashboard = document.querySelectorAll(".card--dashboard");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dashboard[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var card = _step.value;
      var current = card.querySelector(".card__current");
      var previous = card.querySelector(".card__previous");
      current.innerHTML = "".concat(data[card.getAttribute("data-title")][period].current, "hrs");
      previous.innerHTML = "Last ".concat(periods[period], " - ").concat(data[card.getAttribute("data-title")][period].current, "hrs");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var active = document.querySelector('.active');
  active.classList.remove('active');
  active.classList.add('innactive');
  var elem = document.querySelector("[data-period=".concat(period, "]"));
  elem.classList.remove('innactive');
  elem.classList.add('active');
}

var data = {
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