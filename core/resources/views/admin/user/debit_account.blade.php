@extends('admin')
@section('title', $title)

@section('content')
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1>{{$title}}</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    {{Form::model($user, ['route' => ['admin.update_balance',$user->id],'method' => 'patch','class' => 'form-horizontal form-bordered'])}}

                    <div class="row">
                        @include('admin.user.balance.fields')

                        {{Form::hidden('operation','minus')}}
                        <div class="form-group col-12">
                            {!! Form::label('amount', __('Debit Amount').':',['class' => 'col-form-label font-weight-bold']) !!}
                            {!! Form::text('amount', null, ['class' => 'form-control form-control-lg']) !!}
                        </div>

                    </div>

                    <div class="tile-footer">
                        <button class="btn btn-primary" type="submit">Debit Account</button>
                        <a class="btn btn-primary"
                           href="{{route('admin.userDetails',[ $user->id])}}">Cancel</a>
                    </div>
                    {{Form::close()}}
                </div>
            </div>
        </div>

    </main>
@endsection

@push('js')
    <script>
        (function ($) {
            $(document).ready(function () {
                $("#balance").attr("readonly", 'readonly').attr('disabled', 'disabled');
            });
        })(jQuery);
    </script>
@endpush
