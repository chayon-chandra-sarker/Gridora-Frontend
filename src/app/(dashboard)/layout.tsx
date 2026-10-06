import AuthGuard from '@/components/Auth/auth-guard';
import React, { ReactNode } from 'react';

const DashboardLayout = ({children}:{children:ReactNode}) => {
    return (
        <AuthGuard>{children}</AuthGuard>
    );
};

export default DashboardLayout;