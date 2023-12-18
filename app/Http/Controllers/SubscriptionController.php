<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Laravel\Cashier\Exceptions\IncompletePayment;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    public function showSubscriptionForm()
    {
        return Inertia::render('Subscription');
    }

    public function processSubscription(Request $request)
    {
        $user = Auth::user();
        $stripeCustomer = $user->createOrGetStripeCustomer();

        try {
            $user->newSubscription('premium', 'price_1OO0JxGzb4rlRPFsdYKIqhXZ')->create($request->payment_method);
        } catch (IncompletePayment $exception) {
            return response()->json(['redirectUrl' => "error", 'error' => $exception->getMessage()]);
        }

        $user->premium = true;
        $user->save();
        return response()->json(['success' => true], 200);
    }

    public function billing()
    {
        $user = Auth::user();
        $invoices = $user->invoices();

        return response()->json(['invoices' => $invoices]);
    }
}

