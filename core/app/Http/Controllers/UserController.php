<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Branch;
use App\Models\Deposit;
use App\Models\Gateway;
use App\Models\Setting;
use App\Models\Transaction;
use App\Models\TransferLog;
use App\Models\User;
use App\Models\Withdraw;
use App\Models\Wmethod;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;
use Session;

class UserController extends Controller
{


    public function branch()
    {
        $branches = Branch::all();
        return view('user.branch', compact('branches'));
    }

    public function loginPage()
    {
        if (Auth::user()) {
            return redirect()->route('user.dashboard');
        }
        return redirect()->route('login');
    }

    public function dashboard()

    {
        $totalDep = Deposit::where('user_id', Auth::id())->where('status', 1)->sum('amount');
        $totalwd = Withdraw::where('user_id', Auth::id())->where('status', 1)->sum('amount');
        $userToUser = Transaction::where('user_id', Auth::id())->where('type', 6)->count('user_id');
        $userToBank = Transaction::where('user_id', Auth::id())->where('type', 7)->where('status', 1)->count('user_id');
        $totaltf = $userToUser + $userToBank;
        $pendingwd = Withdraw::where('user_id', Auth::id())->where('status', 0)->sum('amount');
        $totalOtBankTrn = Transaction::where('user_id', Auth::id())->where('type', 7)->where('status', 0)->sum('amount');

        return view("dotcom.dashboard", compact('totalDep', 'totalwd', 'pendingwd', 'totaltf', 'totalOtBankTrn'));
//        return view('user.dashboard', compact('totalDep', 'totalwd', 'pendingwd', 'totaltf', 'totalOtBankTrn'));

    }

    public function verify()
    {
        if (Auth::user()->email_verified == 1 && Auth::user()->sms_verified == 1) {
            return redirect()->route('user.dashboard')->with('success', ' Successfully logged in.');
        } else {
            return view('user.verify');
        }

    }

    public function verifyEmailCode(Request $request)
    {
        $this->validate($request, [
            'email_code' => 'required'
        ]);

        $user = Auth::user();
        if ($user->email_code == $request->email_code) {
            $user->email_verified = 1;
            $user->email_code = null;
            $user->save();
            return redirect()->back()->with('success', 'Please check your phone, we send verification Code in your phone.');
        }
        return back()->withErrors('Invalid code, Please try again');

    }

    public function resendVerifyEmail()
    {

        $user = Auth::user();

        if (Carbon::parse($user->email_time)->gt(Carbon::now())) {
            $time = Carbon::parse($user->email_time)->diffForHumans();
            return back()->withErrors("Please try again $time");
        }
        $userOwner = Auth::user();
        $email_code = substr(uniqid(), 0, 6);
        $userOwner->email_code = $email_code;
        $userOwner->email_time = Carbon::parse()->addMinute(3);
        $userOwner->save();

        $code = $email_code;
        $to = $user['email'];
        $name = $user['username'];
        $subject = "Verification Code";
        $message = "Your verification code is: " . $code;
        send_email($to, $name, $subject, $message);

        return back()->with('success', 'Please Check your mail, New email verification code send to your email address.');


    }

    public function verifySms(Request $request)
    {

        $this->validate($request, [
            'sms_code' => 'required',
        ]);
        $user = Auth::user();

        if ($user->sms_code == $request->sms_code) {
            $user->sms_verified = 1;
            $user->sms_code = null;
            $user->save();

            return redirect()->route('user.dashboard')->with('success', ' Successfully logged in.');
        }
        return back()->withErrors('Invalid code, please try again');

    }


    public function resendVerifySms()
    {
        $user = Auth::user();

        if (Carbon::parse($user->sms_time)->gt(Carbon::now())) {
            $time = Carbon::parse($user->sms_time)->diffForHumans();
            return back()->withErrors("Please try again $time");
        }
        $sms_code = substr(uniqid(), 0, 6);
        $user->sms_code = $sms_code;
        $user->sms_time = Carbon::parse()->addMinute(3);
        $user->save();

        $code = $sms_code;
        $to = $user['phone'];
        $message = "Your verification code is: " . $code;
        send_sms($to, $message);
        return back()->with('success', 'Please Check your phone, New sms verification code send to your phone number');

    }


    public function profileIndex()
    {

        return view('dotcom.profile');
//        return view('user.profile');
    }

    public function profileUpdate(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'phone' => 'required|numeric',
        ]);
        $user = Auth::user();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->country = $request->country;
        $user->city = $request->city;
        $user->save();
        return redirect()->back()->with('success', 'Successfully Updated');
    }

    public function avatarUpdate(Request $request)
    {


    }

    public function changePass()
    {
        return view('dotcom.changePass');
//        return view('user.changePass');
    }

    public function passwordChange(Request $request)
    {
        $request->validate([
            'old_password' => 'required|string',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $oldpassword = $request->old_password;
        $newpassword = $request->password;
        if (Hash::check($oldpassword, Auth::user()->password)) {
            $request->user()->fill(['password' => Hash::make($newpassword)])->save();
            return redirect()->back()->with('success', 'Your password has been changed Successfully');
        }
        return back()->withErrors('invalid password');
    }

    public function profileImage(Request $request)
    {
        $request->validate([
            'avatar' => 'required|mimes:jpg,jpeg,png',
        ]);
        $user = Auth::user();


        if ($request->hasFile('avatar')) {
            @unlink('assets/image/avatar/' . $user->avatar);
            $image = $request->file('avatar');
            $filename = $image->hashName();
            $location = 'assets/image/avatar/' . $filename;
            Image::make($image)->fit(512, 512)->save($location);
            $user->avatar = $filename;
        }
        $user->save();
        return redirect()->back()->with('success', 'Successfully Updated');


    }

    public function deposit()
    {

        $gates = Gateway::where('status', 1)->get();
        $deposit = Deposit::where('user_id', Auth::id())->orderBy('id', 'DESC')->where('status', 1)->paginate(15);
        return view('dotcom.deposit', compact('gates', 'deposit'));

    }


    public function depositDataInsert(Request $request)
    {


        $this->validate($request, ['amount' => 'required', 'gateway' => 'required']);

        if ($request->amount <= 0) {
            return back()->withErrors('Invalid Amount');
        } else {
            $gate = Gateway::findOrFail($request->gateway);

            if (isset($gate)) {
                if ($gate->minamo <= $request->amount || $gate->maxamo >= $request->amount) {
                    $charge = $gate->fixed_charge + ($request->amount * $gate->percent_charge / 100);
                    $usdamo = ($request->amount + $charge) / $gate->rate;

                    $depo['user_id'] = Auth::id();
                    $depo['gateway_id'] = $gate->id;
                    $depo['amount'] = $request->amount;
                    $depo['charge'] = $charge;
                    $depo['usd_amo'] = round($usdamo, 2);
                    $depo['btc_amo'] = 0;
                    $depo['btc_wallet'] = "";
                    $depo['trx'] = Str::random(16);
                    $depo['try'] = 0;
                    $depo['status'] = 0;
                    Deposit::create($depo);

                    Session::put('Track', $depo['trx']);

                    return redirect()->route('user.deposit.preview');

                } else {
                    return back()->with('alert', 'Please Follow Deposit Limit');
                }
            } else {
                return back()->with('alert', 'Please Select Deposit gateway');
            }
        }

    }

    public function depositPreview()
    {

        $track = Session::get('Track');

        $data = Deposit::where('status', 0)->where('trx', $track)->first();


        return view('dotcom.payment.preview', compact('data'));
    }


    public function withdraw()
    {
        $gates = Wmethod::where('status', 1)->get();

        $withdraw = Withdraw::where('user_id', Auth::id())->latest()->paginate(15);

        return view('dotcom.withdraw', compact('gates', 'withdraw'));
    }

    public function withdrawPost(Request $request)
    {


        $this->validate($request,
            [
                'amount' => 'required|numeric',
                'account' => 'required',
                'gateway' => 'required',
            ]);

        $method = Wmethod::findOrFail($request->gateway);

        $charge = $method->fixed_charge + ($request->amount * $method->percent_charge / 100);
        $amount = $request->amount + $charge;

        if ($amount > Auth::user()->balance || $request->amount <= 0 || $amount < $method->minamo || $amount > $method->maxamo) {
            return back()->withErrors('Invalid Amount');
        } else {
            $user = User::find(Auth::user()->id);
            $user['balance'] = $user->balance - $amount;
            $user->update();

            $with['user_id'] = $user->id;
            $with['wmethod_id'] = $method->id;
            $with['amount'] = $request->amount;
            $with['fee'] = $charge;
            $with['account'] = $request->account;
            $with['status'] = 0;
            Withdraw::create($with);

            return back()->with('success', 'Withdraw Request Sent Successfully!');
        }


    }


    public function accStatement()
    {
        $transaction_history = auth()->user()->transactions()->get();
        $ownBankStatements = Transaction::where('user_id', Auth::user()->id)->where('type', 6)->latest()->get();
        $otherBankStatements = Transaction::where('user_id', Auth::user()->id)->where('type', 7)->latest()->get();


        return view('dotcom.accStatement', compact('otherBankStatements', 'ownBankStatements', 'transaction_history'));
    }

    public function transferToOwnBank()
    {
        return view('dotcom.transferOwnBank');
    }

    public function transferOwnBank(Request $request)
    {


        $request->validate([
            'account_number' => 'required|numeric',
            'amount' => 'required|numeric',
        ]);

        $gnl = Setting::first();

        $charge = $gnl->bal_trans_fixed_charge + ($request->amount * $gnl->bal_trans_per_charge / 100);
        $amount = $request->amount + $charge;
        if ($amount > Auth::user()->balance || $request->amount <= 0) {
            flash('Invalid Amount')->error();
            return back()->withErrors('Invalid Amount');
        }

//        $user = User::where('account_number', $request->account_number)->first();
//        if ($user === NULL) {
//            flash('Invalid account')->error();
//            return back()->withErrors('Invalid account');
//        }

        $data['amount'] = $request->amount;
        $data['account_number'] = $request->account_number;
        $data['charge'] = $charge;
        $data['total'] = $amount;
        $data['type'] = 0;

        Session::put('data', $data);
        return redirect()->route('user.transfer.preview');


    }

    public function transferPreview(Request $request)
    {

        $tnfp = Session::get('data');
        return view('dotcom.tfPreview', compact('tnfp'));

    }

    public function transferOwnBankConfirm(Request $request)
    {
        /** @var UploadedFile $uploadedFiles */
        $uploadedFiles = $request->file('photo');
        $fileTrx = $uploadedFiles->storePublicly('transfers');
//        dd($uploadedFiles, $fileTrx);

//        $filepathPhoto = $photo->storePublicly('registrations');

        $this->validate($request, [
            'account_number' => 'required|numeric',
            'amount' => 'required|numeric',
            'photo' => 'required|file',
        ]);

        $gnl = Setting::first();

        $charge = $gnl->bal_trans_fixed_charge + ($request->amount * $gnl->bal_trans_per_charge / 100);
        $amount = $request->amount + $charge;
        if ($amount > Auth::user()->balance || $request->amount <= 0) {
            flash('Invalid Amount');
            return back()->withErrors('Invalid Amount');
        }

        $user = User::where('account_number', $request->account_number)->first();
//        if ($user == NULL) {
//            flash('Invalid Account');
//            return back()->withErrors('Invalid account');
//        }

        $sender = User::find(Auth::user()->id);
        $sender->balance = $sender->balance - $amount;
        $sender->update();

        $senderTlog = new Transaction();
        $senderTlog['user_id'] = $sender->id;
        $senderTlog['amount'] = $request->amount;
        $senderTlog['balance'] = $sender->balance;
        $senderTlog['fee'] = $charge;
        $senderTlog['type'] = 6;
        $senderTlog['status'] = 1;
        $senderTlog['details'] = "Transfer from " . $sender->name . " to " . $request->account_number . ", <br/> Download Transaction File <a href=\"" . asset($fileTrx) . "\">Here</a>";
        $senderTlog['trxid'] = 'tns:' . Str::random(16);
        $senderTlog->save();

//        $msg = 'Successful transfer balance to ' . $user->name . '. Account Number: ' . $request->account_number . '. Amount ' . $request->amount . $gnl->cur . '. Transaction fee ' . $charge . $gnl->cur . '.Your current balance is ' . $sender->balance . $gnl->cur . '. Transaction id : ' . $senderTlog->trxid;
//        send_email($sender->email, $sender->username, 'Transaction Successful', $msg);
//        $sms = 'Successful transfer to ' . $user->name . '. Amount' . $request->amount . $gnl->cur . '. Truncation fee' . $charge . '.Your current balance is ' . $sender->balance . $gnl->cur . '. Transaction id : ' . $senderTlog->trxid;
//        send_sms($sender->mobile, $sms);

        $receiver = User::where('account_number', $request->account_number)->first();
//        $receiver->balance = $receiver->balance + $request->amount;
//        $receiver->update();

        $receiverTlog = new Transaction();
        $receiverTlog['user_id'] = 0;
        $receiverTlog['amount'] = $request->amount;
        $receiverTlog['balance'] = 0;
        $receiverTlog['type'] = 6;
        $receiverTlog['status'] = 1;
        $receiverTlog['details'] = sprintf("Transfer from %s to %s, <br/> Download Transaction File <a href=\"%s\">Here</a>", $sender->name, $request->account_number, asset($fileTrx));
        $receiverTlog['trxid'] = $senderTlog->trxid;
        $receiverTlog->save();

//        $msg = 'Receive balance form ' . $sender->name . '. Amount ' . $request->amount . $gnl->cur . '. Your current balance is ' . $receiver->balance . $gnl->cur . '. Transaction id : ' . $receiverTlog->trxid;
//        send_email($receiver->email, $receiver->username, 'Transaction Successful', $msg);
//        $sms = 'Successful Get balance form ' . $sender->name . '. Amount' . $request->amount . $gnl->cur . '. Your current balance is ' . $receiver->balance . $gnl->cur . '. Transaction id : ' . $receiverTlog->trxid;
//        send_sms($receiver->mobile, $sms);

        flash('Successful transfer balance')->success();

        return redirect()->route('user.dashboard');


    }

    public function transferToOtherBank()
    {
        $banks = Bank::where('status', 1)->get()->mapWithKeys(static function ($d) {
            $str = ucwords($d->name);
            return [$str => $str];
        })->prepend('Choose Bank');
        return view('dotcom.transferOtherBank', compact('banks'));
    }


    public function transferOtherBank(Request $request)
    {


        $this->validate($request, [
            'bank_name' => 'required',
            'details' => 'required',
            'branch_name' => 'required',
            'account_number' => 'required',
            'amount' => 'required|numeric',
        ]);

        $bank = Bank::find($request->bank_name);
        if ($bank != NULL) {
            $charge = $bank->fixed_charge + ($request->amount * $bank->percent_charge / 100);
            $amount = $request->amount + $charge;
            if ($amount > Auth::user()->balance || $request->amount <= 0) {
                return back()->withErrors('Invalid Amount');


            } else {

                if ($bank->min_amount <= $request->amount || $request->amount >= $bank->max_amount) {
                    $data['bank'] = $bank->name;
                    $data['bank_id'] = $bank->id;
                    $data['amount'] = $request->amount;
                    $data['charge'] = $charge;
                    $data['total'] = $amount;
                    $data['branch_name'] = $request->branch_name;
                    $data['account_number'] = $request->account_number;
                    $data['p_time'] = $bank->p_time;
                    $data['details'] = $request->details;
                    Session::put('data', $data);

                    return redirect()->route('user.ot.transfer.preview');
                } else {
                    return back()->withErrors('Please check transaction limit ');
                }


            }

        } else {
            return redirect()->back()->withErrors('Invalid Bank name');
        }


    }

    public function transferOtBankPreview(Request $request)
    {

        $tnfp = Session::get('data');
        return view('dotcom.otTfPreview', compact('tnfp'));

    }

    public function transferOtherBankConfirm(Request $request)
    {

        $this->validate($request, [
            'bank_name' => 'required',
            'details' => 'required',
            'branch_name' => 'required',
            'account_number' => 'required',
            'amount' => 'required|numeric',
        ]);

        $bank = Bank::find($request->bank_name);
        if ($bank != NULL) {
            $charge = $bank->fixed_charge + ($request->amount * $bank->percent_charge / 100);
            $amount = $request->amount + $charge;
            if ($amount > Auth::user()->balance || $request->amount <= 0) {
                return back()->withErrors('Invalid Amount');

            } else {

                $gnl = Setting::first();
                $sender = User::find(Auth::user()->id);
                $sender['balance'] = $sender->balance - $amount;
                $sender->update();

                $senderTlog = new Transaction();
                $senderTlog['user_id'] = $sender->id;
                $senderTlog['amount'] = $request->amount;
                $senderTlog['balance'] = $sender->balance;
                $senderTlog['fee'] = $charge;
                $senderTlog['type'] = 7;
                $senderTlog['p_time'] = $bank->p_time;
                $senderTlog['details'] = 'Bank Name: ' . $bank->name . ' . Branch name ' . $request->branch_name . '. Account Number : ' . $request->account_number . '. Account details : ' . $request->details;
                $senderTlog['trxid'] = sprintf("tns:%s", str_random(16));
                $senderTlog->save();

                $msg = 'Transfer balance to other Bank Name: ' . $bank->name . ' . Branch name ' . $request->branch_name . ' . Account Number : ' . $request->account_number . '. Account details : ' . $request->details . '. Amount ' . $request->amount . $gnl->cur . '. fee ' . $charge . $gnl->cur . '. Your current balance is ' . $sender->balance . $gnl->cur . '. Processing time ' . $bank->p_time;
                send_email($sender->email, $sender->username, 'Transfer balance', $msg);
                $sms = 'Transfer balance to other Bank Name: ' . $bank->name . ' . Branch name ' . $request->branch_name . ' Account Number : ' . $request->account_number . '. Account details : ' . $request->details . '. Amount ' . $request->amount . $gnl->cur . '. fee ' . $charge . $gnl->cur . '. Your current balance is ' . $sender->balance . $gnl->cur . '. Processing time ' . $bank->p_time;
                send_sms($sender->mobile, $sms);
                return redirect()->route('user.dashboard')->with('success', 'Successful balance Transfer Request To ' . $bank->name . '. Amount ' . $request->amount . $gnl->cur . '. fee ' . $charge . $gnl->cur . '. Processing time ' . $bank->p_time . '. Your cur balance is ' . $sender->balance . $gnl->cur);


            }
        } else {
            return redirect()->back()->withErrors('Invalid Bank name');
        }


    }

    public function bankData(Request $request)
    {
        $dada = Bank::where('id', $request->id)->first();
        return response()->json([
            'fixed_charge' => $dada->fixed_charge,
            'percent_charge' => $dada->percent_charge,
            'p_time' => $dada->p_time,
            'min_amount' => $dada->min_amount,
            'max_amount' => $dada->max_amount,
        ]);


    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function storeTransferLog(Request $request)
    {
        Session::put('temp_transfer_data', $request->except(['__token', '_token']));
    }

    public function getOtp()
    {
        $transferData = Session::get('temp_transfer_data');
        return view("dotcom.transferOtherBankPinCode", compact('transferData'));
    }

    public function saveTransferLog(Request $request)
    {
        $tempData = Session::get('temp_transfer_data');
        $data = $request->merge($tempData)->except('_token');
        TransferLog::create($data);
    }

    public function manage_balance($id)
    {
        $user = User::findOrFail($id);
        $title = "Manage Balance";

        return view("admin.user.manage_balance", compact('user', 'title'));
    }

    public function debit_account($id)
    {
        $user = User::findOrFail($id);
        $title = "Debit Account";

        return view("admin.user.debit_account", compact('user', 'title'));
    }

    public function credit_account($id)
    {
        $user = User::findOrFail($id);
        $title = "Credit Account";

        return view("admin.user.credit_account", compact('user', 'title'));
    }

    public function update_balance(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($request->exists('operation')):
            $balance = $user->balance;
            $operation = $request->operation;
            $amount = $request->amount;
            $total = $operation === 'minus' ? $balance - $amount : $balance + $amount;
            $user->balance = $total;
        else:
            $user->balance = $request->balance;
        endif;
        $user->save();

        return back()->with('success', 'Balance Updated Successfully');
    }
}
