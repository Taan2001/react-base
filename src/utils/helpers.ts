/**
 * Utility function to retrieve environment variables from Vite's import.meta.env
 * @param key - The key of the environment variable to retrieve.
 * @returns The value of the environment variable, or undefined if it does not exist.
 */
export function getEnvVar(key: keyof ImportMeta['env']): string | undefined {
  return import.meta.env[key] || undefined;
}