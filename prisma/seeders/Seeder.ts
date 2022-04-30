import { PrismaClient } from '@prisma/client';
import ProductSeeder from './ProductSeeder';

/**
 * Seeder
 */
class Seeder {

    private readonly prisma: PrismaClient = new PrismaClient();

    constructor() {
        this.prisma = new PrismaClient();
    }

    public run(): void {    
        new ProductSeeder(this.prisma)
            .run()
            .catch((e) => console.error(e))
    }

}

new Seeder().run();