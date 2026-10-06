import RoleGuard from '@/components/Auth/role-guard';
import React, { ReactNode } from 'react';

const AdminLayout = ({children}:{children:ReactNode}) => {
    return (
        <RoleGuard roles={["ADMIN"]}>
            {children}
        </RoleGuard>
    );
};

export default AdminLayout;