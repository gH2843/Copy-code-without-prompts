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
let promptsList, elements = document.getElementsByClassName("ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay");
browser.storage.local.get("promptsForRegexpList", function(result) {
    if (result.promptsForRegexpList) {
        promptsList = result.promptsForRegexpList
    }
    else { promptsList = '$' }
    if (elements.length !== 0) {
        for (let i = 0; i < elements.length; ++i) {
            let textWithoutPrompts = elements[i].getAttribute("value").replace(new RegExp(`^\\s*[${promptsList}]+`, "gm"), '');
            elements[i].setAttribute("value", textWithoutPrompts);
        }
    }
});
