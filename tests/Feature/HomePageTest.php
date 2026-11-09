<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    public function test_home_page_renders_the_home_inertia_component(): void
    {
        $response = $this->get(route('home'));

        $response->assertOk();
        $response->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    public function test_only_existing_navigation_routes_are_shared_with_the_frontend(): void
    {
        $response = $this->get(route('home'));

        $response->assertInertia(fn (Assert $page) => $page->where('availableRoutes', ['home', 'members']));
    }
}
