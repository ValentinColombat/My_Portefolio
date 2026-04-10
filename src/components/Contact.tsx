import { Mail, Phone, MapPin, Send } from "lucide-react"
import pandaImg from '../assets/portfolio_mail.webp'
import { Link } from "react-router-dom"
import { useState } from "react"
import { sendEmail, saveContactLocally, type ContactFormData } from "../services/contactService"
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const INPUT_CLASSES = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-sm"

const contactMethods = [
    { icon: Mail,   label: 'valentincolombat@gmail.com' },
    { icon: Phone,  label: '+33 6 72 32 45 97' },
    { icon: MapPin, label: 'Région de Lille, France' },
]

type SubmitStatus = 'success' | 'warning' | 'error' | ''

const Contact = () => {
    const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver({ threshold: 0.2, triggerOnce: true })
    const { elementRef: leftRef,   isVisible: leftVisible   } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })
    const { elementRef: cardRef,   isVisible: cardVisible   } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '', lastName: '', email: '', subject: '', message: ''
    })
    const [isSubmitting,   setIsSubmitting]   = useState(false)
    const [submitMessage,  setSubmitMessage]  = useState('')
    const [submitStatus,   setSubmitStatus]   = useState<SubmitStatus>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage('')
        setSubmitStatus('')

        try {
            if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
                setSubmitMessage('Veuillez remplir tous les champs obligatoires.')
                setSubmitStatus('error')
                return
            }

            const result = await sendEmail(formData)

            if (result.ok) {
                setSubmitMessage('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.')
                setSubmitStatus('success')
                setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
                return
            }

            try { saveContactLocally(formData) } catch (storageError) {
                console.error('Erreur lors de la sauvegarde locale:', storageError)
            }

            const base = 'Message reçu ! Il y a eu un problème avec l\'envoi automatique. Vérifiez la configuration EmailJS (.env.local) et la console, mais je traiterai votre demande.'
            setSubmitMessage(result.reason === 'gmail_reconnect_required'
                ? `${base} (Gmail: reconnectez le compte dans EmailJS — erreur "Invalid grant".)`
                : base)
            setSubmitStatus('warning')
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error)
            setSubmitMessage('Une erreur est survenue. Veuillez réessayer.')
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">

            {/* Navbar */}
            <div className="px-5 md:px-[12%] py-6 flex items-center justify-between border-b border-gray-100">
                <Link to="/" className="flex items-center gap-3 no-underline">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-lg font-black">K</span>
                    </div>
                    <span className="font-black text-black text-2xl tracking-tight">kodo</span>
                </Link>
            </div>

            {/* Deux colonnes */}
            <div className="flex-1 px-5 md:px-[12%] pt-8 pb-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Colonne gauche */}
                    <div ref={leftRef} className={`space-y-4 slide-in-left ${leftVisible ? 'visible' : ''}`}>
                        <div ref={headerRef} className={`mb-6 slide-in-bottom ${headerVisible ? 'visible' : ''}`}>
                            <p className="text-amber-600 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                                Travaillons ensemble
                            </p>
                            <h1 className="text-4xl md:text-5xl font-black leading-[1.05] mb-4">
                                <span className="block font-extralight text-gray-400">Dites</span>
                                <span className="block" style={{
                                    background: 'linear-gradient(135deg, #1c1c1c 0%, #f97316 40%, #fbbf24 65%, #1c1c1c 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>bonjour.</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 text-base leading-relaxed font-light max-w-sm mb-4">
                            Un projet, une idée, ou juste envie d'échanger. Je lis tous mes messages.
                        </p>

                        {/* Infos de contact */}
                        <div className="space-y-3">
                            {contactMethods.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-3 text-gray-600">
                                    <Icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span className="text-sm">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Disponibilité */}
                        <div className="flex items-center gap-2 pt-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-gray-500">Disponible · réponse en 10–15 min.</span>
                        </div>

                        {/* Séparateur */}
                        <div className="h-px bg-gray-100 mt-2"></div>

                        {/* Bannière panda */}
                        <div className="mt-6 rounded-2xl overflow-hidden" style={{ maxHeight: '220px', boxShadow: '0 8px 40px -8px rgba(249,115,22,0.3), 0 20px 50px -12px rgba(0,0,0,0.2)' }}>
                            <img
                                src={pandaImg}
                                alt="Kodo"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Colonne droite — formulaire */}
                    <div
                        ref={cardRef}
                        className={`bg-white rounded-2xl border border-gray-100 shadow-lg p-8 slide-in-right delay-200 ${cardVisible ? 'visible' : ''}`}
                    >
                        <h2 className="text-xl font-black text-gray-900 mb-6">Envoyez un message</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Prénom *</label>
                                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={INPUT_CLASSES} placeholder="Votre prénom" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Nom *</label>
                                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={INPUT_CLASSES} placeholder="Votre nom" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email *</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={INPUT_CLASSES} placeholder="votre@email.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Sujet</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={INPUT_CLASSES} placeholder="De quoi souhaitez-vous parler ?" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Message *</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${INPUT_CLASSES} resize-none`} placeholder="Décrivez votre projet ou votre demande... ou un simple bonjour, on prendra le temps de discuter !" />
                            </div>

                            {submitMessage && (
                                <div className={`p-4 rounded-lg border text-sm ${
                                    submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-700'
                                    : submitStatus === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-700'
                                    : 'bg-red-50 border-red-200 text-red-700'
                                }`}>
                                    {submitMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                                style={{ background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)' }}
                            >
                                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            {/* Bandeau confiance */}
            <div className="border-t border-gray-100 py-8 overflow-hidden">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-8">
                    Ils nous ont déjà fait confiance
                </p>
                <div className="overflow-hidden">
                    <div className="flex gap-16 tech-marquee">
                        {[
                            'Agence Lumière', 'Studio Forêt', 'Madeleine & Co', 'Cabinet Renard',
                            'Atelier Solis', 'Maison Dubois', 'Nexio Studio', 'Pierre & Fils',
                            'Collectif Noma', 'L\'Épicerie Fine', 'Bureau Clément', 'Opaline Group',
                            'Agence Lumière', 'Studio Forêt', 'Madeleine & Co', 'Cabinet Renard',
                            'Atelier Solis', 'Maison Dubois', 'Nexio Studio', 'Pierre & Fils',
                            'Collectif Noma', 'L\'Épicerie Fine', 'Bureau Clément', 'Opaline Group',
                        ].map((name, i) => (
                            <span key={i} className="flex items-center gap-16 whitespace-nowrap text-sm font-semibold text-gray-400">
                                {name}
                                <span className="text-amber-400">·</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
