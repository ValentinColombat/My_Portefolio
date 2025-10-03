import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { sendEmail, saveContactLocally } from "../services/contactService"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Contact = () => {
    // Hooks d'animation
    const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    });
    
    const { elementRef: contactInfoRef, isVisible: contactInfoVisible } = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    });
    
    const { elementRef: formRef, isVisible: formVisible } = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true
    });

    // État pour gérer les données du formulaire
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    // Fonction pour gérer les changements dans les champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            // Validation simple
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
                setSubmitMessage('Veuillez remplir tous les champs obligatoires.')
                return
            }

            // Envoyer par email via EmailJS
            const emailSent = await sendEmail(formData)
            if (emailSent) {
                setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.')
            } else {
                // En cas d'échec, sauvegarder localement comme fallback
                saveContactLocally(formData)
                setSubmitMessage('Message reçu ! Il y a eu un problème avec l\'envoi automatique, mais je traiterai votre demande.')
            }
            
            // Réinitialiser le formulaire
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            })
            
            setSubmitMessage('Message reçu avec succès ! Je vous répondrai dans les plus brefs délais.')
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error)
            setSubmitMessage('Une erreur est survenue. Veuillez réessayer.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
            
            {/* Bouton retour */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Retour à l'accueil</span>
                </Link>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div ref={headerRef} className={`text-center mb-16 fade-in ${headerVisible ? 'visible' : ''}`}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="hero-gradient-text">Contactez-moi</span>
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Vous avez un projet en tête ? Discutons ensemble de la façon dont 
                            je peux vous aider à le concrétiser.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        
                        {/* Informations de contact */}
                        <div ref={contactInfoRef} className={`space-y-8 slide-in-left delay-200 ${contactInfoVisible ? 'visible' : ''}`}>
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Parlons de votre projet</h2>
                                <p className="text-white/70 mb-8">
                                    Je suis toujours ravi d'échanger sur de nouveaux projets et défis. 
                                    N'hésitez pas à me contacter pour discuter de vos besoins.
                                </p>
                            </div>

                            {/* Méthodes de contact */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-400/30 transition-colors">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Email</h3>
                                        <p className="text-white/60">valentincolombat@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-400/30 transition-colors">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Téléphone</h3>
                                        <p className="text-white/60">+33 6 72 32 45 97</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-400/30 transition-colors">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-lg flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">Localisation</h3>
                                        <p className="text-white/60">Région de Lille, France</p>
                                    </div>
                                </div>
                            </div>

                            {/* Disponibilité */}
                            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl border border-orange-400/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <h3 className="font-medium text-white">Disponibilité</h3>
                                </div>
                                <p className="text-white/70">
                                    Actuellement disponible pour de nouveaux projets.
                                    <br />
                                    Temps de réponse habituel : 10-15 min.
                                </p>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div ref={formRef} className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 slide-in-right delay-300 ${formVisible ? 'visible' : ''}`}>
                            <h2 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-2">
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-2">
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                                        Sujet
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                                        placeholder="De quoi souhaitez-vous parler ?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors resize-none"
                                        placeholder="Décrivez votre projet ou votre demande... ou un simple bonjour , on prendra le temps de discuter !"
                                    ></textarea>
                                </div>

                                {/* Message de retour */}
                                {submitMessage && (
                                    <div className={`p-4 rounded-lg border ${
                                        submitMessage.includes('succès') 
                                            ? 'bg-green-500/10 border-green-400/30 text-green-400' 
                                            : 'bg-red-500/10 border-red-400/30 text-red-400'
                                    }`}>
                                        {submitMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
