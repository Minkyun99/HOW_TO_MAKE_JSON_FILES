const axios = require('axios');
const fs = require('fs').promises; // Use fs.promises for async readFile
const path = require('path');

const historyLog_Error = [];

async function fetchLocalJsonFile(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        const fileContent = await fs.readFile(absolutePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading file at ${filePath}:`, error);
        throw error;
    }
}

const historyLog_json = './VRQI9.json';

// Validate the sequence numbers
async function historyLog_Error_function() {
    try {
        const historyLog = await fetchLocalJsonFile(historyLog_json);
        console.log('History Log:', historyLog);

        if (Array.isArray(historyLog.logs)) { // Ensure logs is an array
            const sequenceNumbers = historyLog.logs.map(entry => {
                const sequenceNumber = parseInt(entry.split('-')[0], 10);
                return sequenceNumber;
            });

            const seenNumbers = new Set();
            const duplicates = [];

            sequenceNumbers.forEach((number, index) => {
                console.log('sequenceNumber: ', number, 'index: ', index); // 확인용 로그 추가
                if (seenNumbers.has(number)) {
                    duplicates.push(number);
                }
                seenNumbers.add(number);

                if (number !== index) {
                    historyLog_Error.push(historyLog.logs[index]);
                }
            });

            if (duplicates.length > 0) {
                console.log('Duplicates:', duplicates);
            }
        } else {
            console.error(`Expected logs to be an array, but got ${typeof historyLog.logs}`);
        }

        const errorFilePath = path.join(__dirname, 'historyLog_Error.json');
        await fs.writeFile(errorFilePath, JSON.stringify(historyLog_Error, null, 2), 'utf-8');
        console.log(`Errors saved to ${errorFilePath}`);
    } catch (error) {
        console.error('An error occurred during processing:', error);
    }
}

historyLog_Error_function();