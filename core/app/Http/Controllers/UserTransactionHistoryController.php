<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserTransactionHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function index($id)
    {
        $user = User::findOrFail($id);
        $data = $user->transactions()->orderByDesc('created_at')->paginate();
        $title = "All Transactions History";

        return view("admin.user.transactions.index", compact('user', 'data', 'title'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function create($id)
    {
        $user = User::findOrFail($id);
        $title = "Create Transactions History";

        return view("admin.user.transactions.create", compact('user', 'title'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request, $id)
    {
        $sender = User::find($id);
        $sender->transactions()->create($request->all());

        return redirect()->route('admin.users.transaction-history.index', $sender)->with('success', 'history created successfully');
    }

    public function show($userId, $traxId)
    {
        $user = User::findOrFail($userId);
        $trax = Transaction::find($traxId);
        $title = "Viewing Transactions History";

        return view("admin.user.transactions.show", compact('user', 'title', 'trax'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($userId, $traxId)
    {
        $sender = User::find($userId);
        Transaction::find($traxId)->delete();

        return redirect()->route('admin.users.transaction-history.index', $sender)->with('success', 'history deleted successfully');
    }
}
