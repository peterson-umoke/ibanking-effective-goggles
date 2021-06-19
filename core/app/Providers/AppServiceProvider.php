<?php

namespace App\Providers;

use App\Models\Contact;
use App\Models\Language;
use App\Models\Setting;
use App\Models\SocialIcon;
use Collective\Html\FormFacade;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (Schema::hasTable('setting') || Schema::hasTable('social_icons') || Schema::hasTable('contacts') || Schema::hasTable('languages')) {
            $gnl = Setting::first();
            $socials = SocialIcon::where('status', 1)->get();
            $contacts = Contact::where('status', 1)->get();
            $lang = Language::all();
            view()->share(compact('socials', 'contacts', 'gnl', 'lang'));
        }
    }
}
