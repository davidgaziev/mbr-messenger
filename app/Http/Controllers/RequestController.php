<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Request as UserRequest; 

class RequestController extends Controller
{
    public function setRequest(Request $request) {
        $addresseeId = $request->input('addresseeId');
        $requesterId = $request->input('requesterId');
        $type = $request->input('type');
        
        $user = User::findOrFail($requesterId);

        $request = UserRequest::create([
            'addressee' => $addresseeId,
            'requester' => $requesterId,
            'requesterName' => $user->name,
            'type' => $type,
        ]);

        $userAdr = $user->requestAdr; 
        
        $reqId = $user->requestId;

        $userRequester = User::findOrFail($requesterId);

        $userReq = $userRequester->requestReq; 

        return response()->json([
            'status' => 'success', 
        ], 200);
    }

   
}
