<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Admin
 *
 * @property int $id
 * @property string $name
 * @property string $username
 * @property string $email
 * @property string|null $image
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|Admin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admin query()
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admin whereUsername($value)
 */
	class Admin extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Advertisement
 *
 * @property int $id
 * @property int $user_id
 * @property string|null $image
 * @property string|null $url
 * @property string|null $type
 * @property string|null $size
 * @property string|null $script
 * @property int $impression
 * @property int $click
 * @property float $price
 * @property string|null $start_date
 * @property string|null $end_date
 * @property string|null $day
 * @property string|null $ad_for
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement query()
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereAdFor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereClick($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereDay($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereImpression($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereScript($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Advertisement whereUserId($value)
 */
	class Advertisement extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Bank
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $p_time
 * @property float $min_amount
 * @property float $max_amount
 * @property float $fixed_charge
 * @property float $percent_charge
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property int $status
 * @method static \Illuminate\Database\Eloquent\Builder|Bank newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bank newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bank query()
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereFixedCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereMaxAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereMinAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank wherePTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank wherePercentCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Bank whereUpdatedAt($value)
 */
	class Bank extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Blog
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $image
 * @property string|null $description
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @method static \Illuminate\Database\Eloquent\Builder|Blog newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Blog newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Blog query()
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Blog whereUpdatedAt($value)
 */
	class Blog extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Branch
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|Branch newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch query()
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Branch whereUpdatedAt($value)
 */
	class Branch extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Contact
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $name
 * @property string|null $icon
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property int $status
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contact whereUpdatedAt($value)
 */
	class Contact extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Deposit
 *
 * @property int $id
 * @property int|null $user_id
 * @property int|null $gateway_id
 * @property string|null $amount
 * @property string|null $charge
 * @property string|null $usd_amo
 * @property string|null $btc_amo
 * @property string|null $btc_wallet
 * @property string|null $trx
 * @property int $status
 * @property int $try
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Gateway|null $gateway
 * @property-read \App\Models\User|null $userName
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit query()
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereBtcAmo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereBtcWallet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereGatewayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereTrx($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereTry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereUsdAmo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Deposit whereUserId($value)
 */
	class Deposit extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Faq
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Faq newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Faq newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Faq query()
 * @method static \Illuminate\Database\Eloquent\Builder|Faq whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Faq whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Faq whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Faq whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Faq whereUpdatedAt($value)
 */
	class Faq extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Feature
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Feature newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Feature newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Feature query()
 */
	class Feature extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Gateway
 *
 * @property int $id
 * @property string|null $main_name
 * @property string $name
 * @property string|null $minamo
 * @property string|null $maxamo
 * @property string|null $fixed_charge
 * @property string|null $percent_charge
 * @property string|null $rate
 * @property string|null $val1
 * @property string|null $val2
 * @property string|null $val3 paytm Website
 * @property string|null $val4 paytm Industry Type
 * @property string|null $val5 paytm Channel ID
 * @property string|null $val6 paytm Transaction URL
 * @property string|null $val7 paytm Transaction Status URL
 * @property int|null $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Deposit[] $deposit
 * @property-read int|null $deposit_count
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway query()
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereFixedCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereMainName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereMaxamo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereMinamo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway wherePercentCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal3($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal4($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal5($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal6($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Gateway whereVal7($value)
 */
	class Gateway extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Language
 *
 * @property int $id
 * @property string|null $icon
 * @property string|null $name
 * @property string|null $code
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Language newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Language query()
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Language whereUpdatedAt($value)
 */
	class Language extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Partner
 *
 * @method static findOrFail($id)
 * @property int $id
 * @property string|null $logo
 * @property string|null $url
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Partner newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner query()
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Partner whereUrl($value)
 */
	class Partner extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PasswordReset
 *
 * @property int $id
 * @property string $email
 * @property string $token
 * @property string|null $status
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset query()
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PasswordReset whereUpdatedAt($value)
 */
	class PasswordReset extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PublicContact
 *
 * @property int $id
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $email
 * @property string|null $subject
 * @property string|null $message
 * @property \Illuminate\Support\Carbon $updated_at
 * @property \Illuminate\Support\Carbon $created_at
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact query()
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereMessage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PublicContact whereUpdatedAt($value)
 */
	class PublicContact extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Service
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $description
 * @property string|null $icon
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @method static \Illuminate\Database\Eloquent\Builder|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereUpdatedAt($value)
 */
	class Service extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Setting
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $branding
 * @property string|null $logo
 * @property string|null $favicon
 * @property string|null $color1
 * @property string|null $email_from
 * @property string|null $email_body
 * @property int $email_notification
 * @property string|null $sms_api
 * @property int $sms_notification
 * @property int $email_verification
 * @property int $sms_verification
 * @property string $registration
 * @property string|null $script
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $service_subtitle
 * @property string|null $contact_thumbnail
 * @property string|null $cur
 * @property string|null $cur_symbol
 * @property string|null $facebook_api
 * @property string $fag
 * @property string|null $footer_image
 * @property float $bal_trans_fixed_charge
 * @property float $bal_trans_per_charge
 * @property string|null $video_section_title
 * @property string|null $video_section_dec
 * @property string|null $video_link
 * @property string|null $about_title
 * @property string|null $about_subtitle
 * @property string|null $video_section_banner
 * @property string|null $service_title
 * @property string|null $faq_title
 * @property string|null $faq_subtitle
 * @property string|null $blog_title
 * @property string|null $blog_subtitle
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting query()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereAboutSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereAboutTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBalTransFixedCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBalTransPerCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBlogSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBlogTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBranding($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereColor1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereContactThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCur($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCurSymbol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereEmailBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereEmailFrom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereEmailNotification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereEmailVerification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFacebookApi($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFag($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFaqSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFaqTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFavicon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereFooterImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereRegistration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereScript($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereServiceSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereServiceTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereSmsApi($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereSmsNotification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereSmsVerification($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereVideoLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereVideoSectionBanner($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereVideoSectionDec($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereVideoSectionTitle($value)
 */
	class Setting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Slider
 *
 * @property int $id
 * @property string|null $title
 * @property string|null $subtitle
 * @property string|null $banner
 * @property string|null $btn_name
 * @property string|null $btn_link
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Slider newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Slider newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Slider query()
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereBanner($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereBtnLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereBtnName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereSubtitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slider whereUpdatedAt($value)
 */
	class Slider extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SocialIcon
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $icon
 * @property string|null $link
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon query()
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SocialIcon whereUpdatedAt($value)
 */
	class SocialIcon extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Subscribe
 *
 * @method static findOrFail($id)
 * @property int $id
 * @property string|null $email
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe query()
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Subscribe whereUpdatedAt($value)
 */
	class Subscribe extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Transaction
 *
 * @property int $id
 * @property int|null $user_id
 * @property string|null $trxid
 * @property string|null $amount
 * @property string|null $balance
 * @property string|null $fee
 * @property string|null $p_time
 * @property string|null $type
 * @property int $status
 * @property string|null $details
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction query()
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereDetails($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction wherePTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereTrxid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Transaction whereUserId($value)
 */
	class Transaction extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string $email
 * @property string|null $username
 * @property string|null $account_number
 * @property string|null $phone
 * @property string|null $avatar
 * @property string|null $country
 * @property string|null $city
 * @property float|null $balance
 * @property float|null $amount
 * @property string $password
 * @property string|null $email_verified
 * @property string|null $sms_verified
 * @property string|null $email_code
 * @property string|null $sms_code
 * @property string|null $email_time
 * @property string|null $sms_time
 * @property string|null $verified_send
 * @property string|null $user_banned
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Deposit[] $deposit
 * @property-read int|null $deposit_count
 * @property-read mixed $name
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Transaction[] $transaction
 * @property-read int|null $transaction_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Withdraw[] $withdraw
 * @property-read int|null $withdraw_count
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereBalance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerified($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSmsCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSmsTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSmsVerified($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUserBanned($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereVerifiedSend($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Withdraw
 *
 * @property int $id
 * @property int $user_id
 * @property int $wmethod_id
 * @property string $amount
 * @property string|null $fee
 * @property string $account
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \App\Models\Wmethod $wmethod
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw query()
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereAccount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Withdraw whereWmethodId($value)
 */
	class Withdraw extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Wmethod
 *
 * @property int $id
 * @property string $name
 * @property string $minamo
 * @property string $maxamo
 * @property string $fixed_charge
 * @property string $percent_charge
 * @property string $rate
 * @property string|null $val1
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Withdraw[] $withdraw
 * @property-read int|null $withdraw_count
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod query()
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereFixedCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereMaxamo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereMinamo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod wherePercentCharge($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Wmethod whereVal1($value)
 */
	class Wmethod extends \Eloquent {}
}

