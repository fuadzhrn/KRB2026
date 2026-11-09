<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Named routes the site navigation may link to. Only the ones that
     * actually exist are shared, so the frontend never renders a link to
     * a page that hasn't been built yet.
     *
     * @var list<string>
     */
    private const NAVIGABLE_ROUTES = ['home', 'archive', 'members', 'about'];

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'availableRoutes' => fn (): array => array_values(array_filter(
                self::NAVIGABLE_ROUTES,
                fn (string $name): bool => Route::has($name),
            )),
        ];
    }
}
