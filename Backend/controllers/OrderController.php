<?php
require_once __DIR__ . '/../models/Vehicle.php';

class OrderController {

    // Add vehicle method
    public function addVehicle($data) {
        $vehicle = new Vehicle();
        return $vehicle->addVehicle($data['name'], $data['type'], $data['price'], $data['image']);
    }

    // (Optional) You can include other methods like getOrders(), placeOrder(), etc.
}
