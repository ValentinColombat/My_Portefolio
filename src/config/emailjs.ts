// Configuration EmailJS
// Astuce : vous pouvez configurer ces valeurs via des variables d'environnement Vite.
// Fichier recommandé en local : `.env.local` (voir `.env.example`).

export type EmailjsConfig = {
    serviceId: string
    templateId: string
    publicKey: string
}

const readEnv = (value: unknown): string | undefined => {
    if (typeof value !== 'string') return undefined
    const trimmed = value.trim()
    return trimmed.length > 0 ? trimmed : undefined
}

const serviceId = readEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID)
const templateId = readEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
const publicKey = readEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export const emailjsConfig: Partial<EmailjsConfig> = {
    serviceId,
    templateId,
    publicKey,
}

export const isEmailjsConfigured = Boolean(serviceId && templateId && publicKey)

export const getEmailjsConfig = (): EmailjsConfig => {
    if (!isEmailjsConfigured) {
        throw new Error(
            'EmailJS n\'est pas configuré. Définissez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans .env.local.'
        )
    }

    return {
        serviceId: serviceId as string,
        templateId: templateId as string,
        publicKey: publicKey as string,
    }
}

// Pour obtenir ces valeurs :
// 1. Allez sur https://www.emailjs.com/
// 2. Créez un compte et se connecter
// 3. Configurez un service email (Gmail, Outlook, etc.)
// 4. Créez un template d'email
// 5. Copiez les IDs générés dans cette configuration
