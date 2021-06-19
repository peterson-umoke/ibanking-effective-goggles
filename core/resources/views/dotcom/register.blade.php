@extends("dotcom.partials.page")

@section('content')
    <div class="content grid span-24 span-17--desk span-18--desk-wide grid--last"><!-- /*Start of E area*/ -->
        <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
            <div data-compid="33-26822" data-wa-template="Page Data [E]" data-wa-component="Page Data"><h1
                    id="content-start"> Create an account </h1></div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                <form method="post" action="{{route('register')}}">
                    @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-row">
                                <div class="form-group col-md-6">

                                    <input type="text" name="first_name" class="myForn"
                                           placeholder="@lang('First Name')" required>
                                </div>
                                <div class="form-group col-md-6">

                                    <input type="text" name="last_name" class="myForn" placeholder="@lang('Last Name')"
                                           required>
                                </div>

                                <div class="form-group col-md-6">
                                    <input type="email" name="email" class="myForn" placeholder="@lang('Email')"
                                           required>
                                </div>
                                <div class="form-group col-md-6">

                                    <input type="text" name="phone" class="myForn" placeholder="@lang('Phone Number')"
                                           required>
                                </div>

                                <div class="form-group col-md-12">

                                    <input type="text" name="username" class="myForn" placeholder="@lang('Username')"
                                           required>
                                </div>
                                <div class="form-group col-md-6">

                                    <input type="password" name="password" class="myForn"
                                           placeholder="@lang('Password')" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="password" class="myForn" name="password_confirmation"
                                           placeholder="@lang('Confirm Password')" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-group padding-top-10 col-md-12">
                            <button class="btn" type="submit">@lang('Register')</button>
                            <a href="{{route('login')}}" class="button">Back to login</a>
                        </div>

                    </div>
                </form>
            </article>
            @include('dotcom.partials.socials')
        </section>
    </div>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print " data-wa-region="B"
         data-wa-component="leftmenu"><a class="block block--secondary block--header v-center" href=""><span
                class="v-center__content">Create an account</span></a></nav>
@endsection
