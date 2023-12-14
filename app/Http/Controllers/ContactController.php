<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Request as UserRequest;

class ContactController extends Controller {
  
  public function hasRequest(Request $request) {
    $requester = $request->input('requester');
    $addressee = $request->input('addressee');

    $existsInRequests = UserRequest::where('addressee', $addressee)
    ->where('requester', $requester)
    ->exists();

    $contacted = DB::table('users')
    ->where('id', $requester)
    ->whereRaw('contacts @> ARRAY[?]::int[]', [$addressee])
    ->exists();

  
    if($contacted) {
      return response()->json(['status' => 'contacted']);
    }

    if($existsInRequests) {
      return response()->json(['status' => 'pending']);
    }else {

      $haveToReponse = UserRequest::where('addressee', $requester)
      ->where('requester', $addressee)
      ->exists();
      
      if($haveToReponse) {
        return response()->json(['status' => 'respond']);
      }
      
      return response()->json(['status' => 'none']);
    }
  }
}