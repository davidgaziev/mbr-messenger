<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return response()->json($users);
    }

    public function acceptContact(Request $request) {
        $contactID = $request->input("contactID");
        $userID = Auth::id();
     
        DB::table('users')
        ->where('id', $userID)
        ->update([
            'contacts' => DB::raw("array_append(contacts, '$contactID')")
        ]);

        DB::table('users')
        ->where('id', $contactID)
        ->update([
            'contacts' => DB::raw("array_append(contacts, '$userID')")
        ]);

        DB::table('requests')
        ->where('requester', $contactID)->where('addressee', $userID)->delete();

        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function rejectContact(Request $request) {
        $contactID = $request->input("contactID");
        $userID = Auth::id();

        DB::table('requests')
        ->where('requester', $contactID)->where('addressee', $userID)->delete();

        return response()->json([
            'status' => 'success',
        ], 200);
    }

    public function removeContact(Request $request) {
        $contactID = $request->input("contactID");
        $userID = Auth::id();

        DB::table('users')
        ->where('id', $userID)
        ->update([
        'contacts' => DB::raw("array_remove(contacts, $contactID)")]);

        DB::table('users')
        ->where('id', $contactID)
        ->update([
        'contacts' => DB::raw("array_remove(contacts, $userID)")]);

        return response()->json([
            'status' => 'success',
        ], 200);
    }
}
