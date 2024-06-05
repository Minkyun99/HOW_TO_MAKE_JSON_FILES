const axios = require('axios');
const path = require('path');
const fs = require('fs').promises;
require("dotenv").config();


// import path from 'path';
// import { promises as fs } from 'fs';
// import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjAzZjE2YzJkLTFkMzktNCIsIm5hbWUiOiJhZG1pbkBwb3NzbS5jby5rciIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNDJjNGUyY2U0MDNiYWFhYTgyOTIwOGRlOWM0MDkwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmFkLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI0LTA1LTMwVDAxOjUxOjM0LjA0MloiLCJlbWFpbCI6ImFkbWluQHBvc3NtLmNvLmtyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vbGFiMDIxLmF1dGgwLmNvbS8iLCJhdWQiOiJ5VW5oQzMxY2FqQkxId3RaZUxzOVgyaExDc01RUHRGViIsImlhdCI6MTcxNzAzMzg5NCwiZXhwIjoxNzE3MDY5ODk0LCJzdWIiOiJhdXRoMHw2MmNiZGZjYTZmNjAzYzc2ZTJmMWEwM2MifQ.I1vwMoNxLsQUDDuPT5_IFSSCNKRF92usViU98YLMxMY';
const shipkey = []
const shipname = []


async function fetchLocalJsonFile(filePath) {
    const absolutePath = path.resolve(filePath);
    const fileContent = await fs.readFile(absolutePath, 'utf8');
    return JSON.parse(fileContent);
}

fetchLocalJsonFile('./ships_data.json')
    .then(data => {
        console.log(Object.keys(data))
        // console.log(Object.keys(data)[0])
        // console.log(Object.length)
        // console.log(Object.keys(data).length)
        // console.log(data[0])
        Object.keys(data).forEach(key => {
            shipkey.push(key);
            shipname.push(data[key]);
        });        
        // console.log(shipkey)
        // console.log(shipname)
        // console.log(shipname[0][0].SHIPNAME)
        
      for(i=0; i<shipkey.length; i++){
          for(k=0; k<shipname[i].length; k++){
            // console.log(shipname[i][k], shipname[i][k].SHIPNAME)
        }
      }
        // console.log(shipkey[0].CIDO[0].SHIPNAME, shipkey[0].CIDO[0].SHIPKEY)
        // console.log(SHIP_COMPANY_COUNT)
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // const config = {
    //   url : dailyreport_api_1 + shipkey + dailyreport_api_1,
    //   method : 'GET',
    //   responseType: 'arraybuffer',
    //   headers : {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`
    //   }
    // }

    // async function dailyReportDownload () {
    //   for (let i=0; i<)
    // }

    
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjAzZjE2YzJkLTFkMzktNCIsIm5hbWUiOiJhZG1pbkBwb3NzbS5jby5rciIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9jNDJjNGUyY2U0MDNiYWFhYTgyOTIwOGRlOWM0MDkwMj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmFkLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI0LTA1LTMwVDAxOjUxOjM0LjA0MloiLCJlbWFpbCI6ImFkbWluQHBvc3NtLmNvLmtyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vbGFiMDIxLmF1dGgwLmNvbS8iLCJhdWQiOiJ5VW5oQzMxY2FqQkxId3RaZUxzOVgyaExDc01RUHRGViIsImlhdCI6MTcxNzAzMzg5NCwiZXhwIjoxNzE3MDY5ODk0LCJzdWIiOiJhdXRoMHw2MmNiZGZjYTZmNjAzYzc2ZTJmMWEwM2MifQ.I1vwMoNxLsQUDDuPT5_IFSSCNKRF92usViU98YLMxMY';
// async function downloadReports() {
//     for (let i = 0; i < POSSM_shipkey.length; i++) {
//       const shipkey = POSSM_shipkey[i];
//       const config = {
//         url: `https://api2.vessellink.com/imo-dcs/ships/${shipkey}/export/daily-report/annual?isCalculateLfoToHfo=false&year=2023&isUk=true`,
//         method: 'GET',
//         responseType: 'arraybuffer',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//       };



//       try {
//         const res = await axios(config);

//         const cidofolder = path.join(__dirname, 'POSSMDailyReport_2023'); // 폴더 경로
//         fs.mkdirSync(cidofolder, { recursive: true }); // 폴더가 없는 경우 생성
//         const filePath = path.join(cidofolder, `${POSSM_shipname[i]}_daily_report_2023.xlsx`); //해당 경로에 저장되는 파일명

//         fs.writeFileSync(filePath, res.data, 'binary'); //
  
//         console.log(`다운로드 성공: ${POSSM_shipname[i]}`);
//       } catch (err) {
//         console.error(`다운로드 실패: ${POSSM_shipname[i]}`, err);
//       }
  
//       // 5초 대기
//       await delay(5000);
//     }
//   }
  
//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   downloadReports();

