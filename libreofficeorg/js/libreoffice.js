/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
const searchButton = document.querySelector("#nav-main li:nth-of-type(6)");
const close = document.querySelector(".close");
const searchEl = document.querySelector('.fastSearch');
const searchInput = document.getElementById('searchInput');

searchButton.setAttribute("role", "button");
searchButton.setAttribute("aria-label", "Search");
searchButton.setAttribute("tabindex", "0");

searchButton.addEventListener('click', e => {
    searchEl.classList.toggle('hide');
    searchInput.focus();
});
searchButton.addEventListener('keydown', e => {
    if (event.key == "Enter" || event.key == " ") {
        event.preventDefault();
        searchEl.classList.toggle('hide');
        searchInput.focus();
    }
});
close.addEventListener('click', e => {
    searchEl.classList.toggle('hide');
});
