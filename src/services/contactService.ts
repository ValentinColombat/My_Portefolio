import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

// Initialiser EmailJS
emailjs.init(emailjsConfig.publicKey)

export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
}

export const sendEmail = async (formData: ContactFormData): Promise<boolean> => {
    try {
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
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            templateParams
        )

        console.log('Email envoyé avec succès:', response)
        return true
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error)
        return false
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
