import fs from 'fs';
import path from 'path';
const locations = fs.readdirSync('data/locations');
const files = [];
const registration = [];

for (let loc of locations) {
  // extra
  files.push(JSON.parse(fs.readFileSync('data/locations/' + loc), 'utf8'));
}

for (let file of files) {
  const { date, registrationLink, location } = file;
  registration.push({
    date,
    location,
    registrationLink
  });
}

export { registration };