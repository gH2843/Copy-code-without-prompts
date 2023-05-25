/*Copyright (C) 2023 gH2843

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.*/
const buttons = document.getElementsByClassName("button");
chrome.storage.local.get("promptsForRegexpList", function(result) {
    let promptsList = result && result.promptsForRegexpList;
    if (promptsList) {
        if (/\$/.test(promptsList)) {buttons[0].classList.add('selected')}
        if (/#/.test(promptsList)) {buttons[1].classList.add('selected')}
        if (/>/.test(promptsList)) {buttons[2].classList.add('selected')}
    }
    let chosenSymbol;
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("button")) {
            chosenSymbol = e.target.textContent;
            const regex = new RegExp('\\' + chosenSymbol, "g");
            if (!promptsList) {
                e.target.classList.add("selected");
                promptsList = chosenSymbol;
            }
            else if (regex.test(promptsList)) {
                e.target.classList.remove("selected");
                promptsList = promptsList.replace(regex, "");
            }
            else {
                e.target.classList.add("selected");
                promptsList = promptsList + chosenSymbol;
            }
            chrome.storage.local.set({ promptsForRegexpList: promptsList });
        }
    });
});
