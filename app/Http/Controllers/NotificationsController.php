<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class NotificationsController extends Controller {
  public function index(Request $request) {
    $userId = $request->input('id');

    $user = User::findOrFail($userId);

    $notifications = $user->requestAdr;

    $result = array();
    $notificationResult = array();

    foreach($notifications as $n) {
      $requesterName = User::findOrFail($n->requester)->name;
      
      $notificationResult['type'] = $n->type;
      $notificationResult['requester'] = $requesterName;
      $notificationResult['id'] = $n->id;

      array_push($result, $notificationResult);
    } 



    return response()->json($result);
  }
}