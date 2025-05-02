<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Services\UserService;

class AuthController extends Controller
{

    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    function store(Request $request) {
        // Validates the fields

        $validatedData = $request->validate([
            'dni' => ['required'],
            'name' => ['required', 'string', 'max:100'],
            'surname' => ['required', 'string', 'max:100'],
            'address' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:20'],
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'string', 'max:255'],
        ]);

        

        // Uses the service's function
        $data = $this->userService->register($validatedData);

        // Returns a response from $data.
        return response()->json($data);
    }

    function login(Request $request) {
        $validatedData = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required', 'string', 'max:255'],
        ]);

        $data = $this->userService->login($validatedData);

        return response()->json($data);
    }
}
