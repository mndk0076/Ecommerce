<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Basic Tee 1',
                'image' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                'price' => '35',
                'description' => 'Black',
            ],
            [
                'name' => 'Basic Tee 2',
                'image' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
                'price' => '25',
                'description' => 'Aspen White',
            ],
            [
                'name' => 'Basic Tee 3',
                'image' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
                'price' => '45',
                'description' => 'Charcoal',
            ],
            [
                'name' => 'Basic Tee 4',
                'image' => 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
                'price' => '55',
                'description' => 'Iso Dots',
            ],
        ];

        foreach ($products as $productData) {
            Products::create($productData);
        }
    }
}
