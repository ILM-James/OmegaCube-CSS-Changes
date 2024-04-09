// ==UserScript==
// @name         OmegaCube Easier Reading
// @namespace    http://tampermonkey.net/
// @version      1.0
// @updateURL    https://raw.githubusercontent.com/ILM-James/OmegaCube-CSS-Changes/main/OmegaCubeStyling.js
// @downloadURL  https://raw.githubusercontent.com/ILM-James/OmegaCube-CSS-Changes/main/OmegaCubeStyling.js
// @description  UX/UI improvements for OmegaCube
// @author       James Jenkins
// @match        https://ilm.omegacube.com/*
// @match        *ilm.omegacube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=omegacube.com
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle ('#my{zoom: 60%;} .btn { font-family: Helvetica !important; font-size: 0.8rem !important; padding: 0.5rem !important; background-size: 100% 100%!important; font-weight: normal !important; background: linear-gradient(#FCFEFE, #D1E8EF) !important; background-repeat: no-repeat;}.t_RegionHeader { background-image: linear-gradient(#C8DBED, #92BADD) !important; background-size: 1px 20px; background-repeat: repeat-x; font-size: 1.5em !important;}.t_RegionHeader_otherlinks { left: 50% !important; top: auto !important; background-color: #CACDCF !important;}.btnDropdown { font-family: Helvetica; font-size: 0.8rem; font-weight: normal; padding: 0.5rem 0.1rem 0.5rem 0.1rem; background-image: linear-gradient(#FCFEFE, #D1E8EF); background-size: 100%; border-left:#a5a9b6 1px solid; border-top:#a5a9b6 1px solid; border-right:#7b8194 1px solid; border-bottom:#7b8194 1px solid;}.btnsub { background-color: #E3EDF6;}.gridhDRClsRep1 { background-image: linear-gradient(#FCFEFE, #D1E8EF) !important;} /*.lbfont2 { box-shadow: 1px 1px 1px 1px darkgrey inset !important;}*/ .lbfont4 { box-shadow: 1px 1px 1px 1px darkgrey inset !important;} .lbfont6 { font-size: 2em;} .dgCls { margin-left: auto; margin-right: auto; .relatedlinks1 .lbfont { font-size: 0.8em !important; }')

// table { table-layout: fixed; width: 100%; }
// body { min-width: 640px !important; max-width: 75% !important; margin: auto !important; }

function replace_button (array) {
    for ( var i = 0; i < array.length; i++) {
        var elementId = array[i][0];
        var replaceWith = array[i][1];

        var element = document.getElementById(elementId);
        if (element) {
            var submitButton = document.createElement("span");
            submitButton.type = "submit";
            submitButton.textContent = replaceWith;
            submitButton.title = "More Reports";
            submitButton.classList.add("btnDropdown");

            element.parentNode.replaceChild(submitButton, element);
        }
    }
}

function replace_logo() {
    var imageElement = document.getElementById("ctl00_Image12222");
    if (imageElement) {
        imageElement.setAttribute("src", "https://ja.mesjenkins.com/images/ILMLogoHeader.png");
    }
}

var replaceButtonArray = [["ctl00_ContentPlaceHolder1_TextLabel", "▼"],
                          ["ctl00_ContentPlaceHolder1_HISTORY123", "▼"],
                          ["ctl00_ContentPlaceHolder1_related_links123", "Others ▼"]];

replace_button(replaceButtonArray);
replace_logo();

function attachEventListeners() {
    var pressButtons = document.getElementsByClassName("btn");
    for (var i =0; i < pressButtons.length; i++) {
        pressButtons[i].addEventListener("click", function() {
            replace_button(this);
        });
    }
}

var inputs = document.querySelectorAll('table td input');

// Loop over the inputs and remove the width style
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].style.width = null; // This will remove the inline width style
// }

// Get all input fields with a name containing "PO_RECEIPT_LINE_HEAT_NO"
//var POinputs = document.querySelectorAll('input[name*="PO_RECEIPT_LINE_HEAT_NO"]');

// Loop through each input and hide it
//for (var j = 0; j < POinputs.length; j++) {
//    if (POinputs[j].parentNode.tagName === 'TD') {
//        POinputs[j].parentNode.style.display = 'none';
//    } else {
//        POinputs[j].style.display = 'none';
//    }
//}

attachEventListeners();