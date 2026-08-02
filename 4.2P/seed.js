const mongoose = require('mongoose');
const Frog = require('./models/Frog');

async function seed() {
    await mongoose.connect('mongodb://127.0.0.1:27017/myProjectDB');
    console.log('Connected to database.');

    await Frog.deleteMany({});

    const sampleFrogs = [
        {frog_name: 'Glass Frog', image_path: 'assets/glass frog.jpg', link: 'https://en.wikipedia.org/wiki/Glass_frog'},
        {frog_name: 'Hairy Frog', image_path: 'assets/hairy frog.jpg', link: 'https://en.wikipedia.org/wiki/Hairy_frog'},
        {frog_name: 'Balloon Frog', image_path: 'assets/balloon frog.jpg', link: 'https://en.wikipedia.org/wiki/Glyphoglossus_molossus'},
        {frog_name: "Budgett's Frog", image_path: 'assets/budgetts frog.jpg', link: 'https://en.wikipedia.org/wiki/Lepidobatrachus_laevis'}
    ];
    await Frog.insertMany(sampleFrogs);

    console.log('Database seeded successfully.');

    await mongoose.disconnect();
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
