import { Router, type Request, type Response, type NextFunction } from "express";
import { mapRoles } from "./helpers.js";
import { getUserRoles, setUserRoles, getMappings } from "./db.js";

const router = Router();

router.patch("/api/v1/users/:id/roles", (req: Request, res: Response, next: NextFunction) => {
    try {
        const { roles: newRoles }: { roles: string[] } = req.body;

        if (!newRoles) {
            return res.status(400).json({ message: `Error due missing roles JSON property` });
        }

        const roleMapping: Record<string, string> = getMappings();

        const currentRoles: string[] = getUserRoles();

        const { unknownRoles, deletedRoles, addedRoles, unchangedRoles } = mapRoles({ newRoles, currentRoles, roleMapping });

        if (unknownRoles.length) {
            return res.status(400).json({ message: `Error due to unknown role(s): ${unknownRoles.join(', ')}` });
        }

        const userRoles = [...currentRoles, ...addedRoles].filter(role => !deletedRoles.includes(role));

        setUserRoles(userRoles);

        return res.json({ deletedRoles, addedRoles, unchangedRoles });

    } catch (err) {
        console.log(err);
        next(err)
    }
});

export default router;
