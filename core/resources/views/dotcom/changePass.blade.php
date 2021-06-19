@extends('dotcom.partials.page')

@section('content')

<nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap" data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center" href="javascript:void(0);"><span class="v-center__content">My Profile</span></a>
    <ul class="block list">
        <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.profile')}}">
                Account Settings
            </a>
        </li>
        <li data-wa-menu-3="Latest interim results"><a class=" " href="javascript:void(0);">
                Change Password
            </a>
        </li>
        {{-- <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.withdraw')}}">
        Withdraw
        </a>
        </li> --}}
        <li data-wa-menu-3="Latest interim results"><a class=" " href="{{route('user.dashboard')}}">
                Back to Dashboard
            </a>
        </li>
    </ul>
</nav>
<div class="content grid span-24 span-17--desk span-18--desk-wide grid--last">
    <!-- /*Start of E area*/ -->
    <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
        <div data-compid="33-5088" data-wa-template="Page Data [E]" data-wa-component="Page Data">
            <h1 id="content-start"> Change Password </h1>
        </div>
    </header><!-- /*End of E area*/ -->
    <section class="grid-group">
        <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
            <form action="{{route('user.password.change')}}" method="post" class="form-horizontal form-bordered" enctype="multipart/form-data">
                @csrf
                <div class="row">
                    <div class="form-group col-md-12">
                        <label for="exampleInputEmail1">@lang('Old Password')</label>
                        <input class="form-control" name="old_password" type="password" placeholder="@lang('Old Password')" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="exampleInputEmail1">@lang('New Password')</label>
                        <input class="form-control" name="password" type="password" placeholder="@lang('New Password')" required>
                    </div>

                    <div class="form-group col-md-12">
                        <label class="control-label" for="readOnlyInput">@lang('Confirm Password')</label>
                        <input class="form-control" name="password_confirmation" type="password" placeholder="@lang('Confirm Password')" required>
                    </div>

                </div>
                <div class="tile-footer">
                    <button class="btn mr_btn_solid" style="  width: 100%!important; margin-bottom: 20px;" type="submit">@lang('Change')</button>
                </div>
            </form>
        </article>
    </section>
</div>
@endsection
