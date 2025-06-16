<?php

namespace App\Http\Controllers;

use App\Models\JwtToken;
use Illuminate\Http\Request;

class JwtTokenController extends Controller
{
    // Show all tokens
    function index() {
    $status = JwtToken::all();
        return response()->json([
            'success' => true,
            'data' => $status
        ]);
    }

    // Delete a token by ID
    function destroy($id) {
        $status = JwtToken::findOrFail($id);
        $status->delete();
    
        return response()->json([
            'success' => true,
            'message' => "Status eliminated"
        ]);
    }

    // TODO: Show own user tokens + permission
}
