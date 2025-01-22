// Core Module
// File System
const fs = require('fs');

// console.log(fs);

// Menulisakn string ke file secara synchronous
// try{
//     fs.writeFileSync('data/test.txt', 'Hello World secara synchronous!');
// } catch(err){
//     console.log(err);
// }

// Menuliskan string ke file secara asynchronous
// fs.writeFile('data/test.txt', 'Hello World secara asynchronous!', (err) => {
//     console.log(err);
// });

// Membaca isi file secara synchronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file secara asynchronous
// const data = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan umur anda : ', (umur) => {
        const contact = { nama, umur};
        const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(fileBuffer);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah memasukkan data.');

        rl.close();
    });
});

