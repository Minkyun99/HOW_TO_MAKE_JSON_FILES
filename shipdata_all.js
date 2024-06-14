const fs = require('fs').promises;
const path = require('path');

// Function to fetch local JSON file
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

// Function to create a map for email lookup
function createEmailMap(shipemails) {
    const emailMap = {};
    for (const company in shipemails) {
        for (const ship of shipemails[company]) {
            const normalizedShipName = ship.SHIPNAME.trim().toLowerCase();
            emailMap[normalizedShipName] = ship.SHIPKEY; // Here, SHIPKEY is actually the EMAIL
        }
    }
    return emailMap;
}

// Function to merge ship data based on SHIPNAME using the email map
function mergeShipData(shipkeys, emailMap) {
    const result = {};

    for (const company in shipkeys) {
        result[company] = shipkeys[company].map(ship => {
            const normalizedShipName = ship.SHIPNAME.trim().toLowerCase();
            const email = emailMap[normalizedShipName] || null;
            if (email) {
                console.log(`Found matching ship: ${ship.SHIPNAME} with email: ${email}`);
            } else {
                console.warn(`No email found for ship: ${ship.SHIPNAME}`);
            }
            return {
                SHIPNAME: ship.SHIPNAME,
                SHIPKEY: ship.SHIPKEY,
                EMAIL: email
            };
        });
    }

    return result;
}

(async () => {
    try {
        const shipkeysFilePath = './ships_data.json';
        const shipemailsFilePath = './ships_email_1.json';

        // Fetch ship data
        const shipkeys = await fetchLocalJsonFile(shipkeysFilePath);
        const shipemails = await fetchLocalJsonFile(shipemailsFilePath);
        
        // Create email map from shipemails data
        const emailMap = createEmailMap(shipemails);

        // Merge ship data
        const mergedData = mergeShipData(shipkeys, emailMap);
        
        // Write merged data to a new JSON file
        const outputFilePath = 'merged_ships_email.json';
        const jsonString = JSON.stringify(mergedData, null, 2);
        await fs.writeFile(outputFilePath, jsonString);
        console.log('JSON file has been saved.');
    } catch (err) {
        console.error('Error:', err);
    }
})();