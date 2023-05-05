const mappings = {
    '001 - Admin': 'BC_ADMIN',
    '002 - Clinical personnel': 'BC_CLINICAL',
    '003 - Warehouse personnel': 'BC_WAREHOUSE',
};

const user = { roles: ['BC_ADMIN', 'BC_CLINICAL'] };

export const getUserRoles = (): string[] => user.roles;

export const setUserRoles = (newRoles: string[]): void => { user.roles = newRoles };

export const getMappings = (): Record<string, string> => mappings;
