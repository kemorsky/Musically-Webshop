import { faker } from '@faker-js/faker';
import { Product, ProductCategory, ProductCondition } from '../interfaces/interfaces';

const categories: ProductCategory[] = ['Guitar', 'Bass', 'Drums', 'Keyboards', 'Amplifiers', 'Accessories', 'Other'];
const conditions: ProductCondition[] = ['New', 'Like New', 'Very Good', 'Good', 'Fair', 'Poor'];
const brands = ['Fender', 'Gibson', 'Yamaha', 'Roland', 'Marshall', 'Ibanez', 'Shure', 'AKG', 'Korg', 'Line 6'];

export const generateMockProducts = (count: number = 100): Product[] => {
  return Array.from({ length: count }, (): Product => {
    const category = faker.helpers.arrayElement(categories);
    const condition = faker.helpers.arrayElement(conditions);
    const isOnSale = faker.datatype.boolean();
    const price = faker.number.int({ min: 50, max: 5000 });
    const salePrice = isOnSale ? price * 0.8 : undefined;

    return {
      id: faker.string.uuid(),
      name: `${faker.helpers.arrayElement(brands)} ${category} ${faker.commerce.productName()}`,
      category,
      brand: faker.helpers.arrayElement(brands),
      condition,
      price,
      description: faker.commerce.productDescription(),
      yearMade: faker.number.int({ min: 1950, max: 2023 }),
      images: Array.from({ length: faker.number.int({ min: 1, max: 4 }) }, () => faker.image.url()),
      stock: faker.number.int({ min: 0, max: 20 }),
      isOnSale,
      salePrice,
      tags: faker.lorem.words(faker.number.int({ min: 2, max: 5 })).split(' '),
      location: `${faker.location.city()}, ${faker.location.country()}`,
    };
  });
};
