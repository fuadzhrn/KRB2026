import { Head } from '@inertiajs/react';
import MembersHero from '@/components/members/MembersHero';
import MembersRoster from '@/components/members/MembersRoster';

export default function Members() {
    return (
        <>
            <Head title="Members" />

            <MembersHero />
            <MembersRoster />
        </>
    );
}
