<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendMessage(Request $request, $chatId)
    {
      $chat = Chat::findOrFail($chatId);

      $message = new Message([
          'content' => $request->content,
          'user_id' => $request->userID,
      ]);

      $chat->messages()->save($message);

      return response()->json(200);
  }

    public function getMessages($chatId)
    {
      $chatMessages = Chat::with('messages.user')->find($chatId)->messages;

      return response()->json($chatMessages);
    }
}
