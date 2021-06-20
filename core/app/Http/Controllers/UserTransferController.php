<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserTransferController extends Controller
{
    public function index()
    {
        /** @var User $user */
        $user = auth()->user();

        if ($user->created_at->diffInDays() < 19) {
            flash('You are not allowed to transfer until 19 days');
            return back();
        }

        return view('dotcom.makeTransfer');

    }

    public function store(Request $request)
    {

    }
}
