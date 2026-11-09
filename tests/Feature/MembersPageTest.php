<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class MembersPageTest extends TestCase
{
    public function test_members_page_renders_the_members_inertia_component(): void
    {
        $response = $this->get(route('members'));

        $response->assertOk();
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Members')
            ->where('availableRoutes', ['home', 'members']));
    }
}
