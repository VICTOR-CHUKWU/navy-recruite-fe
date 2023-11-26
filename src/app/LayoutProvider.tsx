'use client'
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    return (
        <>
            {children}
            {pathname !== "/join/applicationforms" && <Footer />}
        </>
    )
};