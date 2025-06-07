<?php
class AuthController {
    private $user;

    public function __construct($user) {
        $this->user = $user;
    }

    public function register($name, $email, $password) {
        $this->user->name = $name;
        $this->user->email = $email;
        $this->user->password = $password;

        if ($this->user->emailExists()) {
            return ["status" => false, "message" => "Email already exists"];
        }

        if ($this->user->register()) {
            return ["status" => true, "message" => "Registration successful"];
        }

        return ["status" => false, "message" => "Registration failed"];
    }
}
