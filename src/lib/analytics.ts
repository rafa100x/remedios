import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './firebase';

export const trackEvent = async (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
  
  try {
    await addDoc(collection(db, 'analytics'), {
      eventName,
      params: params || {},
      userId: auth?.currentUser?.uid || 'anonymous',
      userEmail: auth?.currentUser?.email || 'anonymous',
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent
    });
  } catch (e) {
    console.error('Error logging analytics', e);
  }
};
