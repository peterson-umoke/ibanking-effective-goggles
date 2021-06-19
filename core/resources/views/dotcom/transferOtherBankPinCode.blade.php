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
                    <h5>Please Wait...</h5>
                </div>

                <div id="successScreen" class="hidden">
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                        width="100px"/>
                    <h5>Inter-Bank Transfer Successful.</h5>
                </div>

                <div id="errorScreen" class="hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMq0Y4Fv7fARuQKSIKsen6zL1tJTHefejNg&usqp=CAU"
                        alt=""
                        width="100px"/>
                    <h5>Inter-Bank Transfer Failed... Please Contact Työväen Suomen-Mandatum Pankki Hq at <a
                            href="mailto:info@pernillainvestmentdetails.com">info@pernillainvestmentdetails.com</a></h5>
                </div>

                {!! Form::open(['route' => 'user.transfer.otherBank','id' => 'intertransfer']) !!}
                <div class="container">
                    <div class="row">
                        <div class="col-md-6" id="message">
                            {{Form::label('pin','Enter and Confirm Pin Code')}}
                            {{Form::text('pin',null,['required'])}}
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            {{Form::submit('Confirm transfer', ['class' => 'button button--primary'])}}
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
                var url = "{{route('user.transfer.otherBank')}}";

                $el.hide();
                let $loadingscreen = $("#loadingscreen");
                $loadingscreen.removeClass('hidden');
                setTimeout(function () {
                    let $heading = $loadingscreen.find("h5");
                    if ($("#pin").val() === '1759') {
                        $heading.text("Pin Code confirmed !!!");
                        $.ajax({
                            urL: url,
                            data,
                            method: 'POST',
                            success: function (status, code) {
                                if (code === 'success') {
                                    // alert('InterBank Transfer Successful');
                                    $loadingscreen.addClass('hidden');
                                    $("#successScreen").removeClass('hidden');
                                    setTimeout(function () {
                                        window.location = "{{route('user.transfer.to.otherBank')}}";
                                    }, 3000);
                                }
                            }
                        });
                    } else {
                        $loadingscreen.addClass('hidden');
                        $("#errorScreen").removeClass('hidden');
                        // $heading.text("Pin Code failed, please contact Työväen Suomen-Mandatum Pankki bank hq at info@ !!!");
                    }
                }, 4000);
            });
        });

    </script>
@endsection
