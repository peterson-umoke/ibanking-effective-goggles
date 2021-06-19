@extends('dotcom.partials.page')

@section('content')
    <link rel="stylesheet" href="{{asset('assets/user/css/select2.min.css')}}">
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet"/>
    <nav class="sidenav js-sticky grid span-24 span-6--desk-wide span-7--desk no-print is-hidden-palm is-hidden-lap"
         data-wa-region="B" data-wa-component="leftmenu"><a class="block block--secondary block--header v-center"
                                                            href="javascript:void(0);"><span class="v-center__content">Transfer</span></a>
        <ul class="block list">
            <li><a href="{{route('user.transfer.to.ownbank')}}" target="_self">
                    Domestic bank Transfer </a></li>
            <li><a href="{{route('user.transfer.to.otherBank')}}" target="_self"> Inter-Bank Transfers </a></li>
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
                <h1 id="content-start"> Inter-Bank Transfer </h1>
            </div>
        </header><!-- /*End of E area*/ -->
        <section class="grid-group">
            <div class="box">

                <div id="loadingscreen" class="hidden">
                    <img src="https://media.tenor.com/images/817596d6626736251eea50f61b9492a4/tenor.gif" alt=""
                         width="100px"/>
                    <h5>Transaction Processing</h5>
                </div>

                {!! Form::open(['route' => 'user.otherbank.storeTemp','id' => 'intertransfer']) !!}
                <div class="container">
                    <div class="row">
                        <div class="col-md-6" id="message">
                            {{Form::label('account_name')}}
                            {{Form::text('account_name',null,['required'])}}
                        </div>

                        <div class="col-md-6" id="message">
                            {{Form::label('account_number')}}
                            {{Form::text('account_number',null,['required'])}}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4" id="message">
                            {{Form::label('bank_name')}}
                            {{Form::select('bank_name',$banks,null,['id' => 'theNewBank','required'])}}
                        </div>
                        <div class="col-md-4" id="message">
                            {{Form::label('euro_iban', 'Euro IBAN Number')}}
                            {{Form::text('euro_iban',null,['required'])}}
                        </div>

                        <div class="col-md-4" id="message">
                            {{Form::label('swift_code')}}
                            {{Form::text('swift_code',null,['required'])}}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6" id="message">
                            {{Form::label('bank_address')}}
                            {{Form::textarea('bank_address',null,['required'])}}
                        </div>

                        <div class="col-md-6" id="message">
                            {{Form::label('beneficiary_address')}}
                            {{Form::textarea('beneficiary_address',null,['required'])}}

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            {{Form::submit('Submit', ['class' => 'button button--primary'])}}
                        </div>
                    </div>
                </div>
                {!! Form::close() !!}
            </div>
        </section>
    </div>

    <style>
        .row {
            margin-bottom: 0;
        }

        .select-wrapper {
            display: block;
            width: 100%;
        }

        .main-content form textarea {
            max-height: 10em;
        }
    </style>
@endsection


{{-- @extends('user') --}}

@section('title')
    @lang('Transfer')
@endsection


@section('script')
    <script>
        $(document).ready(function () {
            $("#intertransfer").on("submit", function (e) {
                e.preventDefault();

                var $el = $(this);
                var data = $el.serializeArray();
                var url = "{{route('user.otherbank.getOtp')}}";

                $el.hide();
                $("#loadingscreen").removeClass('hidden');
                setTimeout(function () {
                    $.ajax({
                        urL: url,
                        data,
                        method: 'POST',
                        success: function (status, code) {
                            if (code === 'success') {
                                window.location = "{{route('user.otherbank.getOtp')}}";
                            }
                        }
                    });
                }, 5000)
            });
        });

    </script>
@endsection
