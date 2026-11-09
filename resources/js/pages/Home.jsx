import { Head } from '@inertiajs/react';
import HomeCrew from '@/components/home/HomeCrew';
import HomeHero from '@/components/home/HomeHero';
import HomeMoments from '@/components/home/HomeMoments';
import HomeNumbers from '@/components/home/HomeNumbers';
import HomeTimeline from '@/components/home/HomeTimeline';
import HomeVideoArchive from '@/components/home/HomeVideoArchive';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <HomeHero />
            <HomeNumbers />
            <HomeMoments />
            <HomeTimeline />
            <HomeVideoArchive />
            <HomeCrew />
        </>
    );
}
