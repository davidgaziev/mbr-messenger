<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
  public function createChat(Request $request)
  {
    $chatId = $request->input('id');

    $chat = Chat::create([
      'id' => $chatId,
      'pinned_message' => "none",
    ]);

    return response()->json(['chat_id' => $chat->id]);
  }

  public function getChat($chatId)
  {
    $chat = Chat::with('messages.user')->find($chatId);

    if ($chat) {
      return response()->json(['chat_id' => $chat->id]);
    } else {
      return response()->json(['error' => 'Chat not found'], 200);
    }
  }
}