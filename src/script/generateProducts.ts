import { faker } from '@faker-js/faker';
import { Product, ProductCategory, ProductCondition } from '../interfaces/interfaces';
import electricGuitarImage1 from '../assets/electric-guitar1.jpg';
import electricGuitarImage2 from '../assets/electric-guitar2.jpg';
import electricGuitarImage3 from '../assets/electric-guitar2.jpg';
import acousticGuitarImage1 from '../assets/acoustic-guitar1.jpg';
import acousticGuitarImage2 from '../assets/acoustic-guitar2.jpg';
import acousticGuitarImage3 from '../assets/acoustic-guitar2.jpg';
import drumsImage1 from '../assets/drums-1.jpg';
import drumsImage2 from '../assets/drums-2.jpg';
import drumsImage3 from '../assets/drums-3.jpg';
import keyboardImage1 from '../assets/keyboard-1.jpg';
import keyboardImage2 from '../assets/keyboard-2.jpg';
import keyboardImage3 from '../assets/keyboard-3.jpeg';

const categories: ProductCategory[] = ['Acoustic Guitar', 'Electric Guitar', 'Drums', 'Keyboard', 'Accessories'];
const conditions: ProductCondition[] = ['New', 'Like New', 'Good', 'Fair', 'Stage Tested'];
const brands = {
  'Acoustic Guitar': ['Martin', 'Taylor', 'Yamaha', 'Gibson', 'Fender'],
  'Electric Guitar': ['Fender', 'Gibson', 'Ibanez', 'Epiphone'],
  'Bass': ['Fender', 'Ibanez', 'Yamaha', 'Rickenbacker', 'Warwick'],
  'Drums': ['Pearl', 'Yamaha', 'Ludwig'],
  'Keyboard': ['Yamaha', 'Roland', 'Korg', 'Casio', 'Nord'],
  'Accessories': ['Dunlop', 'Ernie Ball', 'D’Addario', 'Boss', 'TC Electronic']
};

// Predefined instrument images based on categories
const instrumentImages: { [key in ProductCategory]: string[] } = {
  'Acoustic Guitar': [
    acousticGuitarImage1,
    acousticGuitarImage2,
    acousticGuitarImage3
  ],
  'Electric Guitar': [  
    electricGuitarImage1,
    electricGuitarImage2,
    electricGuitarImage3
  ],
  'Drums': [
    drumsImage1,
    drumsImage2,
    drumsImage3
  ],
  'Keyboard': [
    keyboardImage1,
    keyboardImage2,
    keyboardImage3
  ],
  'Accessories': [
    'https://example.com/accessory-1.jpg',
    'https://example.com/accessory-2.jpg'
  ]
};

export const generateMockProducts = (count: number = 30): Product[] => {
  return Array.from({ length: count }, (): Product => {
    const category = faker.helpers.arrayElement(categories);
    const brand = faker.helpers.arrayElement(brands[category]);
    const condition = faker.helpers.arrayElement(conditions);
    const yearMade = faker.number.int({ min: 1970, max: 2023 });
    const isOnSale = faker.datatype.boolean();
    const price = faker.number.int({ min: 200, max: 4000 });
    const salePrice = isOnSale ? price * 0.8 : undefined;
    const numberOfStrings = faker.number.int({ min: 3, max: 6 });
    const imageSet = instrumentImages[category];
    const width = faker.number.int({ min: 570, max: 1800});

    return {
      id: faker.string.uuid(),
      name: `${brand} - ${faker.commerce.productName()}`,
      category,
      brand,
      condition,
      price,
      description: faker.commerce.productDescription(),
      sellerDescription: 'Lorem ipsum kombucha ninja hello kitty pug bowl mug cat kayboard paper tissue screen bigos. Lorem ipsum valhalla pyszne jedzenie router Andrzeju nie denerwuj sie.',
      yearMade,
      images: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
        faker.helpers.arrayElement(imageSet)
      ),
      numberOfStrings,
      isOnSale,
      salePrice,
      width,
      tags: faker.lorem.words(faker.number.int({ min: 2, max: 5 })).split(' ')
    };
  });
};




