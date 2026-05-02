import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const reportApiError = async (context: string, error: any, userEmail?: string | null) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorDetails = JSON.stringify(error, Object.getOwnPropertyNames(error));

  console.error(`[${context}] Error:`, error);
  
  // 1. Save to Firestore
  try {
    await addDoc(collection(db, 'api_errors'), {
      context,
      message: errorMessage,
      details: errorDetails,
      user_email: userEmail || 'anónimo',
      timestamp: serverTimestamp(),
      resolved: false
    });
  } catch (dbErr) {
    console.error('Failed to save error to Firestore:', dbErr);
  }

  // 2. Send email via FormSubmit
  try {
    await fetch('https://formsubmit.co/ajax/guiaresetgs@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `⚠️ Error en API Maestro Ancestral - ${context}`,
        message: `Se ha producido un error en la aplicación.\nContexto: ${context}\nUsuario: ${userEmail || 'Anónimo'}\nMensaje: ${errorMessage}`,
        details: errorDetails
      })
    });
  } catch (emailErr) {
    console.error('Failed to send error email:', emailErr);
  }
};
