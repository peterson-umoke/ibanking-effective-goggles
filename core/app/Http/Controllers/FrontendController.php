<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Faq;
use App\Models\Language;
use App\Models\Partner;
use App\Models\Service;
use App\Models\Setting;
use App\Models\Slider;
use App\Models\Subscribe;
use Auth;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function home()
    {
        // $services = Service::all();
        // $faqs = Faq::all();
        // $blogs = Blog::latest()->take(3)->get();
        // $partners = Partner::all();
        // $slider = Slider::all();
//        return view('frontend.index', compact('faqs', 'services', 'blogs', 'partners', 'slider'));
        return view("dotcom.index");
    }


    public function login()
    {
        if (Auth::user()) {
            return redirect()->route('user.dashboard');
        }

//        return view('frontend.login');
        return view("dotcom.login");
    }

    public function userlogin()
    {

        return redirect()->route('login');
    }


    public function registrationFrom()
    {
        $setting = Setting::first();
        $registration = $setting->registration;
        if ($registration == 1)
            return view('frontend.register');
        else
            return redirect()->route('homePage')->withErrors('Registration temporary off');
    }

    public function blog()
    {
        $blogs = Blog::latest()->paginate(9);
        return view('frontend.blogs', compact('blogs'));
    }

    public function singleBlog($id, $slug)
    {

        $blog = Blog::findOrfail($id);
        $latest = Blog::latest()->take(5)->get();
        return view('frontend.singleBlog', compact('blog', 'latest'));
    }

    public function contact()
    {
        return view('dotcom.contact');
    }


    public function ContactSubmit(Request $request)
    {


        $this->validate($request, [
            'name' => 'required|max:191',
            'email' => 'required|email|max:191',
            'subject' => 'required|max:191',
            'message' => 'required',
        ]);

        $gs = Setting::first();


        $from = $request->email;
        $to = $gs->email_from;
        $subject = $request->subject;
        $name = $request->name;
        $message = nl2br($request->message . "<br /><br />From <strong>" . $request->name . "</strong>");

        $headers = "From: $name <$from> \r\n";
        $headers .= "Reply-To: $name <$from> \r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        mail($to, $subject, $message, $headers);


        return redirect()->back()->with('success', 'Your Mail send successfully');
    }


    public function subscribePost(Request $request)
    {

        $this->validate($request, [
            'email' => 'required|email|max:191',
        ]);
        $email = Subscribe::where('email', $request->email)->first();

        if ($email == NULL) {
            $data = new Subscribe();
            $data->email = $request->email;
            $data->save();
            return redirect()->back()->with('success', 'Thanks for  Subscribe');
        } else {

            return redirect()->back()->withErrors('This email already taken');
        }
    }


    public function changeLang($lang)
    {


        $language = Language::where('code', $lang)->first();
        if (!$language) $lang = 'en';
        session()->put('lang', strtolower($lang));
        return \redirect()->back();
    }
}
