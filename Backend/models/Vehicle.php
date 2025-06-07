class Vehicle {
    private $conn;

    public function __construct() {
        $this->conn = (new Database())->connect();
    }

    public function addVehicle($name, $type, $price, $image) {
        $sql = "INSERT INTO vehicles (name, type, price, image) VALUES (?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([$name, $type, $price, $image]);
    }
}
