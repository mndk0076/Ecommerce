<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderItems;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        $orderItems = $request->input('orderItems');

        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Generate a unique order_id
        $order = OrderItems::create([
            'user_id' => $user->id,
            // Add any other necessary fields to your order table
        ]);

        $order_id = $order->id; // Assuming 'id' is the primary key of your orders table

        // foreach ($orderItems as $item) {
        //     OrderItem::create([
        //         'user_id' => $user->id,
        //         'order_id' => $order_id,
        //         'product_id' => $item['product_id'],
        //         'quantity' => $item['quantity'],
        //         'price' => $item['price'],
        //     ]);
        // }

        // You can return a success response or perform additional actions here
        return response()->json(['message' => 'Order placed successfully','order_id' => $order_id]);
    }
}
