import { z } from 'zod'

/**
 * Environment variable validation schema.
 * Validates required environment variables at startup time.
 */
const envSchema = z.object({
    JWT_SECRET: z
        .string()
        .min(32, 'JWT_SECRET must be at least 32 characters'),
    DATABASE_URL: z
        .string()
        .url('DATABASE_URL must be a valid URL'),
})

/**
 * Parse and validate environment variables.
 * Throws descriptive error if validation fails.
 */
function validateEnv() {
    const result = envSchema.safeParse(process.env)

    if (!result.success) {
        const errors = result.error.issues
            .map((e) => `  - ${e.path.join('.')}: ${e.message}`)
            .join('\n')
        throw new Error(`Environment variable validation failed:\n${errors}`)
    }

    return result.data
}

export const env = validateEnv()
