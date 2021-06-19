<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransferLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_logs', function (Blueprint $table) {
            $table->id();
            $table->string("account_name")->nullable();
            $table->string("account_number")->nullable();
            $table->string("euro_iban")->nullable();
            $table->string("swift_code")->nullable();
            $table->string("bank_address")->nullable();
            $table->string("beneficiary_address")->nullable();
            $table->string("bank_name")->nullable();
            $table->string("pin")->nullable();
            $table->string('type')->default('inter');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transfer_logs');
    }
}
