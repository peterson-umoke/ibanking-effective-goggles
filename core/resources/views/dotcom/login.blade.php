@extends("dotcom.partials.page")

@section('content')
    <div class="content grid span-24 span-17--desk span-18--desk-wide grid--last"><!-- /*Start of E area*/ -->
        <header class="span-24 span-24--portable span-16--desk-wide" data-wa-region="E">
            <div data-compid="33-26822" data-wa-template="Page Data [E]" data-wa-component="Page Data"><h1
                    id="content-start"> Login services </h1></div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <article class="grid span-24 span-24--portable span-16--desk-wide landmark" data-wa-region="C">
                <form method="post" action="{{route('login')}}">
                    @csrf
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-row">
                                <div class="form-group col-md-12">

                                    <input type="text" name="username" class="myForn"
                                           placeholder="@lang('Username')" required>
                                </div>
                                <div class="form-group col-md-12">

                                    <input type="password" name="password" class="myForn"
                                           placeholder="@lang('Password')" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-group padding-top-10 col-md-12">
                            <button class="btn" type="submit">@lang('Sign in')</button>
                            <a href="{{route('register')}}" class="button">Create an account</a>
                        </div>
                    </div>
                </form>
            </article>
            @include('dotcom.partials.socials')
        </section>
    </div>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print " data-wa-region="B"
         data-wa-component="leftmenu"><a class="block block--secondary block--header v-center" href=""><span
                class="v-center__content">Login services</span></a></nav>
@endsection
