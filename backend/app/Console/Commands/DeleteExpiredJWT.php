<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\JwtToken;
use Carbon\Carbon;

class DeleteExpiredJWT extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:delete-expired-jwt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes expired JWT from the database.';

    /**
     * Execute the console command.
     */
    public function handle() {

        $this->info('Deleting expired tokens');
        
        // Obtains all the expired JWT (If timestamp is < than actual timestamp).
        $now = Carbon::now()->timestamp;
        JwtToken::where('expires_at', '<', $now)->delete();

        // Returns a message.
        $this->info('Expired JWT tokens have been deleted.');
    }
}
