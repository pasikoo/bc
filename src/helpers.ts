
interface Roles {
    newRoles: string[],
    currentRoles: string[],
    roleMapping: Record<string, string>
};

export const mapRoles = ({ newRoles, currentRoles, roleMapping }: Roles): { unknownRoles: string[], deletedRoles: string[], addedRoles: string[], unchangedRoles: string[] } => {

    const unknownRoles = newRoles.filter((role: string) => !Object.keys(roleMapping).includes(role));

    const knownRoles = newRoles.filter((role: string) => Object.keys(roleMapping).includes(role));

    const addedRoles = knownRoles
        .map((role: string) => roleMapping[role])
        .filter((role: string) => !currentRoles.includes(role));

    const deletedRoles = currentRoles
        .filter((currentRole: string) => !knownRoles
            .map((role: string) => roleMapping[role])
            .includes(currentRole));

    const unchangedRoles = currentRoles
        .filter((role: string) => !deletedRoles.includes(role));

    return { unknownRoles, deletedRoles, addedRoles, unchangedRoles };
};
