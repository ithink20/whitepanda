var Product = require('../bin/models/product');

var mongoose = require('mongoose');

// Connect to MongoDB
const dbpath = "mongodb://localhost:27017/shopping";

const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
  mongo.then(() => {
    console.log('connected');
  }).catch((err) => {
  console.log('err', err);
});

var products = [
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Blog/Article',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 500
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Newsletter/E-mailer',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 1000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Whitepaper',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 2000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'e-book',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 1000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Report/Guide',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 1000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Product Description',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 500
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Website Content',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 1000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Video Script',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 1000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Company Profile/Brochure',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 2000
    }),
    new Product({
        imagePath: 'https://jegxdwep1p-flywheel.netdna-ssl.com/wp-content/uploads/2016/07/basic-writing-1080x675.jpg',
        title: 'Press Release',
        description: 'Typically 450-400 words, an e-book is perfect for your target audience ranging from perspective users to customers.',
        price: 2000
    })
];

var done = 0;
for (var i = 0; i < products.length; ++i) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}