const mappings = {
    '001 - Admin': 'BC_ADMIN',
    '002 - Clinical personnel': 'BC_CLINICAL',
    '003 - Warehouse personnel': 'BC_WAREHOUSE',
};

const user = { roles: ['BC_ADMIN', 'BC_CLINICAL'] };

export const getUserRoles = () => user.roles;

export const setUserRoles = (newRoles: string[]) => user.roles = newRoles;

export const getMappings = () => mappings;
