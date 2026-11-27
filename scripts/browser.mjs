import { existsSync } from "node:fs";

export function browserOptions() {
  const localChrome =
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const executablePath =
    process.env.BROWSER_PATH ??
    (process.platform === "win32" && existsSync(localChrome)
      ? localChrome
      : undefined);
  return executablePath ? { executablePath } : {};
}
