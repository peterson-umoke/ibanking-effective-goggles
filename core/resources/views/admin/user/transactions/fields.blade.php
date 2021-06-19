<div class="form-group col-6">
    {!! Form::label('amount', __(ucwords('amount')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::text('amount', null, ['class' => 'form-control form-control-lg']) !!}
</div>

<div class="form-group col-6">
    {!! Form::label('balance', __(ucwords('balance')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::text('balance', null, ['class' => 'form-control form-control-lg']) !!}
</div>

<div class="form-group col-6">
    {!! Form::label('fee', __(ucwords('fee')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::text('fee', null, ['class' => 'form-control form-control-lg']) !!}
</div>


<div class="form-group col-6">
    {!! Form::label('trxid', __(ucwords('trxid')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::text('trxid', null, ['class' => 'form-control form-control-lg']) !!}
</div>

<div class="form-group col-6">
    {!! Form::label('details', __(ucwords('details')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::textarea('details', null, ['class' => 'form-control form-control-lg']) !!}
</div>

<div class="form-group col">
    {!! Form::label('details', __(ucwords('created at')).':',['class' => 'col-form-label font-weight-bold']) !!}
    {!! Form::datetimeLocal('details', null, ['class' => 'form-control form-control-lg']) !!}
</div>

{{Form::hidden('status', 1)}}
