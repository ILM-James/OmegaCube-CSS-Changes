// ==UserScript==
// @name         Highlight Rows
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Highlight rows with ZERO or NEGATIVE quantities
// @author       James Jenkins
// @match        https://ilm.omegacube.com/REP_WORK_ORDER_BY_STEP*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    const colorRowsBasedOnBalanceQty = () => {
        // Replace COLUMN_INDEX with the zero-based index of the 'Balance Qty' column
        const COLUMN_INDEX = 6; // Example: If 'Balance Qty' is the first column, use 0; if it's the second, use 1; and so on.
        const rows = document.querySelectorAll('table tbody tr');

        rows.forEach(row => {
            const cell = row.cells[COLUMN_INDEX];
            if (cell && cell.textContent.trim() === '0.0000') {
                row.style.backgroundColor = 'lightgreen';
            }
            else if (cell && parseFloat(cell.textContent.trim()) < 0) {
                row.style.backgroundColor = 'darkorange';
            }
            else if (cell && parseFloat(cell.textContent.trim()) > 0) {
                console.log('found something greater than 0');
                row.style.bbackgroundColor = 'lightgoldenrodyellow';
            }
        });
    };

    // Use MutationObserver to handle dynamically added rows or use setInterval as a fallback
    // Example with setInterval
    setInterval(colorRowsBasedOnBalanceQty, 2000);
})();