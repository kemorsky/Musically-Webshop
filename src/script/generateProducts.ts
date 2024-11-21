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
import fluteImage1 from '../assets/flute1.jpg';
import fluteImage2 from '../assets/flute2.jpg';
import fluteImage3 from '../assets/flute3.jpg';
import saxophoneImage1 from '../assets/saxophone1.png';
import saxophoneImage2 from '../assets/saxophone2.jpg';

const categories: ProductCategory[] = ['Acoustic Guitar', 'Electric Guitar', 'Drums', 'Flutes', 'Saxophones'];
const conditions: ProductCondition[] = ['New', 'Like New', 'Good', 'Fair', 'Stage Tested'];
const brands = {
  'Acoustic Guitar': ['Martin', 'Taylor', 'Yamaha', 'Gibson', 'Fender'],
  'Electric Guitar': ['Fender', 'Gibson', 'Ibanez', 'Epiphone'],
  'Drums': ['Pearl', 'Yamaha', 'Ludwig'],
  'Flutes': ['Yamaha', 'Gemeinhardt', 'Muramatsu', 'Trevor James', 'Powell Flutes'],
  'Saxophones': ['Selmer Paris', 'Yanagisawa', 'Yamaha', 'Jupiter', 'P. Mauriat']
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
  'Flutes': [
    fluteImage1,
    fluteImage2,
    fluteImage3
  ],
  'Saxophones': [
    saxophoneImage1,
    saxophoneImage2
  ]
};

export const generateMockProducts = (count: number = 30): Product[] => {
  return Array.from({ length: count }, (): Product => {
    const category = faker.helpers.arrayElement(categories);
    const brand = faker.helpers.arrayElement(brands[category]);
    const condition = faker.helpers.arrayElement(conditions);
    const yearMade = faker.number.int({ min: 1970, max: 2023 });
    const price = faker.number.int({ min: 200, max: 4000 });
    const imageSet = instrumentImages[category];
    const width = faker.number.int({ min: 570, max: 1800});
    const sellerReviews = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
      rating: faker.number.int({ min: 1, max: 5 }), // Star rating (1-5)
      comment: faker.lorem.sentence(faker.number.int({ min: 3, max: 12 })), // Short review
      reviewer: faker.name.fullName() // Random reviewer name
    }));

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
      images: Array.from({ length: faker.number.int({ min: 4, max: 5 }) }, () =>
        faker.helpers.arrayElement(imageSet)
      ),
      width,
      tags: faker.lorem.words(faker.number.int({ min: 2, max: 5 })).split(' '),
      sellerReviews
    };
  });
};




