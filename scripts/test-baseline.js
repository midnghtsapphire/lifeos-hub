import { execSync } from "node:child_process";

execSync("npm test", { stdio: "inherit" });
