const axios = require('axios');
const fs = require('fs');
const path = require('path');

const shipkeys = ['VRQI9'];
const historyLog_Error = [];

async function fetchHistoryLog(shipkey, index, underscoreValue) {
    const historyLog_url = new URL(`https://spmsstorage.blob.core.windows.net/ship-noon-container/${shipkey}/HISTORY_LOG/${index * 100}-historyLog.json`);
    const params_historyLog = new URLSearchParams(historyLog_url.search);

    params_historyLog.set('_', underscoreValue);
    params_historyLog.set('sv', '2019-02-02');
    params_historyLog.set('sr', 'c');
    params_historyLog.set('sig', 'p/PkYHxRLr7v8OF6vx+il9a8VwJZhLWJwJ5CEUNvaP8=');
    params_historyLog.set('st', '2024-07-04T23:36:34Z');
    params_historyLog.set('se', '2024-07-05T07:41:34Z');
    params_historyLog.set('sp', 'racwdl');
    params_historyLog.set('api-version', '2017-07-29');

    const completeUrl = `${historyLog_url.origin}${historyLog_url.pathname}?${params_historyLog.toString()}`;

    try {
        const res = await axios.get(completeUrl, { responseType: 'json' });
        return res.data;
    } catch (err) {
        console.error(`Error fetching data for shipkey ${shipkey}, index ${index}:`, err.message);
        return null;
    }
}

async function processLogs() {
    const initialUnderscoreValue = 1720140308712;
    const incrementPerIndex = 10991; // Adjust this value based on observed pattern
    const shipData = {}; // Object to store data for each shipkey

    for (const shipkey of shipkeys) {
        shipData[shipkey] = []; // Initialize array for each shipkey
        for (let i = 0; i < 40; i++) {
            const underscoreValue = initialUnderscoreValue + i * incrementPerIndex;
            const data = await fetchHistoryLog(shipkey, i, underscoreValue);
            if (data) {
                shipData[shipkey] = shipData[shipkey].concat(data); // Add data to the shipkey's array
            } else {
                console.log(`No data found for shipkey ${shipkey}, index ${i}. Stopping further requests for this shipkey.`);
                break; // Stop further requests for this shipkey if data is not found
            }
        }

        console.log(`Data for ${shipkey}:`, shipData[shipkey]); // 확인용 로그 추가

        if (!Array.isArray(shipData[shipkey])) {
            console.error(`Expected logs to be an array, but got ${typeof shipData[shipkey]}`);
            continue; // Skip processing this shipkey if data is not an array
        }

        // Validate the sequence numbers and check for duplicates
        const seenNumbers = new Set();
        shipData[shipkey].forEach((log, outerIndex) => {
            if (typeof log === 'string') { // Ensure log is a string
                const entry = log;
                const index = outerIndex; // Use the outer index as the log's index
                const sequenceNumber = parseInt(entry.split('-')[0], 10);
                console.log('sequenceNumber:', sequenceNumber, 'log:', entry, 'index:', index); // 확인용 로그 추가
                if (sequenceNumber !== index) {
                    historyLog_Error.push(entry);
                }
                if (seenNumbers.has(sequenceNumber)) {
                    historyLog_Error.push(entry);
                }
                seenNumbers.add(sequenceNumber);
            } else {
                console.error(`Expected log to be a string, but got ${typeof log}`);
            }
        });

        // Save each shipkey's data to a file
        const filePath = path.join(__dirname, `${shipkey}.json`);
        fs.writeFileSync(filePath, JSON.stringify(shipData[shipkey], null, 2), 'utf-8');
        console.log(`Data for shipkey ${shipkey} saved to ${filePath}`);
    }

    // Save the errors to a file
    const errorFilePath = path.join(__dirname, 'historyLog_Error.json');
    fs.writeFileSync(errorFilePath, JSON.stringify(historyLog_Error, null, 2), 'utf-8');
    console.log('Errors saved to', errorFilePath);

    // Optionally, output the collected data for verification
    console.log('All Ship Data:', JSON.stringify(shipData, null, 2));
    console.log('Errors:', JSON.stringify(historyLog_Error, null, 2));
}

processLogs();