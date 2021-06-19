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
                    {{Form::open(['route' => ['admin.users.transaction-history.store',$user->id],'method' => 'post','class' => 'form-horizontal form-bordered'])}}

                    <div class="row">
                        @include('admin.user.transactions.fields')
                    </div>

                    <div class="tile-footer">
                        <button class="btn btn-primary" type="submit">Save</button>
                        <a class="btn btn-primary"
                           href="{{route('admin.users.transaction-history.index',[ $user->id])}}">Cancel</a>
                    </div>
                    {{Form::close()}}
                </div>
            </div>
        </div>

    </main>
@endsection
