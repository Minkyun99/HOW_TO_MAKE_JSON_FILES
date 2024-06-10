const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const fs = require('fs').promises;
const cors = require('cors');
const cookieParser = require('cookie-parser');

require("dotenv").config();

const port = 8080;


app.use(logger("tiny"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type']
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "shipkey.html"));
});

// 로컬 JSON 파일을 읽어오는 함수
async function fetchLocalJsonFile(filePath) {
    const absolutePath = path.resolve(filePath);
    const fileContent = await fs.readFile(absolutePath, 'utf8');
    return JSON.parse(fileContent);
}

// shipname 요청을 처리하는 엔드포인트
app.post("/send_shipname", async (req, res) => {
    const shipname = req.body.shipname;
    console.log("Received shipname:", shipname);

    try {
        const data = await fetchLocalJsonFile('./ships_data.json');
        let found = false;
        for (let company in data) {
            for (let ship of data[company]) {
                if (ship.SHIPNAME === shipname) {
                    res.json(ship);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }

        if (!found) {
            res.send('Ship not found');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// company name 요청을 처리하는 엔드포인트
app.post("/send_company_name", async (req, res) => {
    const ship_company = req.body.company;
    console.log("Received company name:", ship_company);

    try {
        const data = await fetchLocalJsonFile('./ships_data.json');
        if (data.hasOwnProperty(ship_company)) {
            const ships = data[ship_company];
            console.log("Ships found:", ships);
            res.json(ships);
        } else if (ship_company==='ALL'){
            res.json(data)
        }
        else {
            res.status(404).send('Company not found');
        } 
    } catch (error) {
        console.error('Error fetching JSON file:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/get-token', async(req,res)=>{
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InNlcnZpY2UiLCJuYW1lIjoic2VydmljZUBsYWIwMjEuY28ua3IiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMTYyNmEzYmE4NDMxMmE0NDdjMzFlNGJmYTk5ZTA3NDc_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZzZS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNi0xMFQwMjo1Nzo1OC44MzlaIiwiZW1haWwiOiJzZXJ2aWNlQGxhYjAyMS5jby5rciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2xhYjAyMS5hdXRoMC5jb20vIiwiYXVkIjoieVVuaEMzMWNhakJMSHd0WmVMczlYMmhMQ3NNUVB0RlYiLCJpYXQiOjE3MTc5ODgyNzksImV4cCI6MTcxODAyNDI3OSwic3ViIjoiYXV0aDB8NTlhY2ZlMzYyZWY1NjI1YzYzNjFjYjdkIn0.9qpua9EZhzJxBcm1p7LFtypLMDzCxBEwbozIAz8Z_dU';
    res.status(200).send({token: token });
})

app.post("/send_all_ships", async(req, res)=>{
    try {
        const data = await fetchLocalJsonFile('./ships_data.json')
            res.json(data);

    } catch (error){
        console.error('Error fetching JSON file:', error);
        res.status(500).send('Internal Server Error');
    }
})


app.post("/download_dailyreport", async (req, res) => {
    const year = req.body.year;
    const shipkey = req.body.shipkey;
    console.log(year, shipkey);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InNlcnZpY2UiLCJuYW1lIjoic2VydmljZUBsYWIwMjEuY28ua3IiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMTYyNmEzYmE4NDMxMmE0NDdjMzFlNGJmYTk5ZTA3NDc_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZzZS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNC0wNi0xMFQwMjo1Nzo1OC44MzlaIiwiZW1haWwiOiJzZXJ2aWNlQGxhYjAyMS5jby5rciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2xhYjAyMS5hdXRoMC5jb20vIiwiYXVkIjoieVVuaEMzMWNhakJMSHd0WmVMczlYMmhMQ3NNUVB0RlYiLCJpYXQiOjE3MTc5ODgyNzksImV4cCI6MTcxODAyNDI3OSwic3ViIjoiYXV0aDB8NTlhY2ZlMzYyZWY1NjI1YzYzNjFjYjdkIn0.9qpua9EZhzJxBcm1p7LFtypLMDzCxBEwbozIAz8Z_dU';
    const url = process.env.dailyreport_api_1 + shipkey + process.env.dailyreport_api_2 + year + process.env.dailyreport_api_3;

    res.status(200).send({ url: url, year: year});
});

app.post("/bdn_download", async(req,res)=>{
    const year = req.body.year;
    const shipkey = req.body.shipkey
    const bdn_url = process.env.bdn_api
    console.log(shipkey)

    res.status(200).send({year : year, shipkey: shipkey, url : bdn_url})
})


app.listen(port, () => {
    console.log(port + "에서 서버 동작 완료.");
});