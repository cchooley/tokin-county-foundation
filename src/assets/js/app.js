import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependancies';
window.libs = libs;

$(document).foundation();

libs.AOS.init();

// SVG Injector
// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.inject-me');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: 'assets/png'
};

var afterAllInjectionsFinishedCallback = function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
};

var perInjectionCallback = function (svg) {
  // Callback after each SVG is injected
  console.log('SVG injected: ' + svg);
};

// create injector configured by options
var injector = new libs.svgInjector(injectorOptions);

// Trigger the injection
injector.inject(
  mySVGsToInject,
  afterAllInjectionsFinishedCallback,
  perInjectionCallback
);

// slick carousel
$(".content-carousel").slick({
  // normal options...
  speed: 5000,
	autoplay: true,
	autoplaySpeed: 0,
	cssEase: 'linear',
  slidesToShow: 5,
	slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
	centerMode: true,
  focusOnSelect: true,
  // the magic
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }
    }, {
      breakpoint: 300,
      settings: "unslick" // destroys slick
    }]
});

// tablesaw table plugin
$(function () {
  $(document)
    .foundation()
    .trigger('enhance.tablesaw');
});

var TablesawConfig = {
  swipeHorizontalThreshold: 15
};


function colorDate() {
  var d = new Date()
  var weekday = new Array(7)
  weekday[0] = "wknd";
  weekday[1] = "mon";
  weekday[2] = "tues";
  weekday[3] = "wed";
  weekday[4] = "thurs";
  weekday[5] = "fri";
  weekday[6] = "wknd";
  var n = weekday[d.getDay()]
  document.getElementById(n).style.color="green"
  document.getElementById(n).style.outline="1px green solid"
}

colorDate()

document.getElementById("viewSwitch").addEventListener("click", toggle, false);

function toggle() {
  var map = document.getElementById('as1');
  var store = document.getElementById('as2');
  var text = document.getElementById('toggleText');
  map.style.display = (map.style.display == 'none') ? 'block' : 'none';
  store.style.display = (store.style.display == 'block') ? 'none' : 'block';
  text.innerText = (map.style.display == 'none') ? 'Store View' : 'Map View';
}