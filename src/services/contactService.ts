import emailjs from '@emailjs/browser'
import { getEmailjsConfig, isEmailjsConfigured } from '../config/emailjs'

export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
}

export type SendEmailResult =
    | { ok: true }
    | { ok: false; reason: 'not_configured' | 'gmail_reconnect_required' | 'send_failed' }

export const sendEmail = async (formData: ContactFormData): Promise<SendEmailResult> => {
    try {
        if (!isEmailjsConfigured) {
            console.error(
                'EmailJS non configuré: créez un .env.local avec VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.'
            )
            return { ok: false, reason: 'not_configured' }
        }

        const config = getEmailjsConfig()

        // KISS: initialiser à chaque envoi (aucun état global)
        emailjs.init(config.publicKey)

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            subject: formData.subject || 'Nouveau message depuis le portfolio',
            message: formData.message,
            to_name: 'Valentin Colombat',
            date: new Date().toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        }

        const response = await emailjs.send(
            config.serviceId,
            config.templateId,
            templateParams
        )

        console.log('Email envoyé avec succès:', response)
        return { ok: true }
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : typeof error === 'string'
                    ? error
                    : JSON.stringify(error)

        console.error('Erreur lors de l\'envoi de l\'email:', error)

        if (/invalid\s*grant/i.test(errorMessage) || /gmail_api/i.test(errorMessage)) {
            return { ok: false, reason: 'gmail_reconnect_required' }
        }

        return { ok: false, reason: 'send_failed' }
    }
}

// Alternative : sauvegarde locale des données
export const saveContactLocally = (formData: ContactFormData): void => {
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts') || '[]')
    const newContact = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
    }
    
    contacts.push(newContact)
    localStorage.setItem('portfolio_contacts', JSON.stringify(contacts))
    
    console.log('Contact sauvegardé localement:', newContact)
}

// Fonction pour récupérer tous les contacts sauvegardés
export const getStoredContacts = (): (ContactFormData & { timestamp: string; id: string })[] => {
    return JSON.parse(localStorage.getItem('portfolio_contacts') || '[]')
}
