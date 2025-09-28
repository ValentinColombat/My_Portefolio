// Configuration EmailJS
// IMPORTANT : Remplacez ces valeurs par celles de votre compte EmailJS

export const emailjsConfig = {
    serviceId: 'contact_form',    // Remplacez par votre Service ID
    templateId: 'template_e7co5mo',   // Remplacez par votre Template ID
    publicKey: 'AIo6bFQmx9dBrfaHz',     // Remplacez par votre Public Key
}

// Instructions pour obtenir ces valeurs :
// 1. Allez sur https://www.emailjs.com/
// 2. Créez un compte et connectez-vous
// 3. Configurez un service email (Gmail, Outlook, etc.)
// 4. Créez un template d'email
// 5. Copiez les IDs générés dans cette configuration

/* 
Template d'email recommandé :

Subject: Nouveau message depuis votre portfolio - {{subject}}

Content:
Vous avez reçu un nouveau message depuis votre portfolio :

Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Envoyé le {{date}}
*/
