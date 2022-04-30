import { PrismaClient, Prisma } from '@prisma/client';

/**
 * ProductSeeder
 */
class ProductSeeder {

    private readonly prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    public async run(): Promise<void> {
        try {
            const products: Array<Prisma.ProductCreateInput> = [
                {
                    title: 'Oreo Classic',
                    slug: 'oreo-classic',
                    description: 'Cacaobiscuits met een vanillesmaakvulling (29%)',
                    unit: '10 x 2 units',
                    unit_price: 1.83,
                    campain_price: 1.83,
                    nutritional_values: {
                        kilojoules: 1990,
                        kilocalories: 474,
                        protein: 5.4,
                        salt: 0.47,
                        fats: {
                            saturated: 5.2
                        },
                        carbohydrates: {
                            sugars: 68,
                            dietary_fiber: 38
                        }
                    } as Prisma.JsonObject
                },
                {
                    title: 'Red Bull Energydrink',
                    slug: 'red-bull-energydrink',
                    description: 'Energy Drink',
                    unit: '4 x 250ml',
                    unit_price: 5.79,
                    campain_price: 5.79,
                    nutritional_values: {
                        kilojoules: 195,
                        kilocalories: 46,
                        fats: {
                            saturated: 0
                        },
                        carbohydrates: {
                            sugars: 11
                        },
                        protein: 0,
                        salt: 0,
                        vitamines: {
                            b2: 0.21,
                            b3: 6.4,
                            b6: 0.2,
                            b12: 0.4
                        }
                    }
                }
            ];

            await this.prisma.product.createMany({
                data: [...products]
            });
        } catch (e: any) {
            throw e;
        }
    }

}

export default ProductSeeder;