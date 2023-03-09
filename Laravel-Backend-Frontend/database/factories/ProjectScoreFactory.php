<?php

namespace Database\Factories;

use App\Models\SupportedBlockchains;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectScoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'project_id' => 0,
            'medal' => 0.00,
            'heart' => 0.00,
            'fire' => 0.00,
            'money_bag' => 0.00,
            'total_score' => 0.00
        ];
    }
}
