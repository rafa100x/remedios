import { assertFails, assertSucceeds, initializeTestEnvironment } from '@firebase/rules-unit-testing';
import { readFileSync } from 'fs';
import { resolve } from 'path';

let testEnv: any;

beforeAll(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: 'demo-apothecary',
    firestore: {
      rules: readFileSync(resolve(__dirname, 'firestore.rules'), 'utf8'),
    },
  });
});

afterAll(async () => {
  await testEnv.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

describe('Firestore Security Rules - Dirty Dozen', () => {
  
  it('1. Unauthenticated Read: Rejects reading without auth', async () => {
    const unauthedDb = testEnv.unauthenticatedContext().firestore();
    await assertFails(unauthedDb.collection('users').doc('user123').get());
  });

  it('2. Cross-User Read: Rejects reading another user profile', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true }).firestore();
    await assertFails(authedDb.collection('users').doc('userB').get());
  });

  it('3. Cross-User Create: Rejects creating profile for someone else', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userB').set({
      email: 'a@a.com',
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('4. Ghost Field Update: Rejects write with extra fields', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: 'a@a.com',
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true // Ghost field
    }));
  });

  it('5. Unauthorized Purchase Unlock: Rejects updating purchasedBooks directly', async () => {
    const contextA = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' });
    const authedDb = contextA.firestore();
    
    // Admin creates valid profile first
    await testEnv.withSecurityRulesDisabled(async (context: any) => {
      await context.firestore().collection('users').doc('userA').set({
        email: 'a@a.com',
        purchasedBooks: [],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    // User attempts to modify purchasedBooks
    await assertFails(authedDb.collection('users').doc('userA').update({
      purchasedBooks: ['secret_book'],
      updatedAt: new Date()
    }));
  });

  it('6. ID Poisoning: Rejects malicious ID', async () => {
    const authedDb = testEnv.authenticatedContext('../sys', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('../sys').set({
      email: 'a@a.com',
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('7. Type Mismatch: Rejects array email', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: ['a@a.com'], // Array instead of string
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('8. Size Exhaustion: Rejects oversized email', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: 'a'.repeat(300), // Max is 200
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('9. Role Escalation: Not applicable in this schema (no role field), but Ghost Field test handles it', async () => {});

  it('10. Array Overflow: Rejects oversized purchasedBooks array', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: 'a@a.com',
      purchasedBooks: new Array(60).fill('book'), // Max is 50
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('11. Spoofed Auth Email: Rejects writing mismatched email', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: true, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: 'hacker@a.com', // Doesn't match token
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

  it('12. Unverified Email Access: Rejects unverified email writes', async () => {
    const authedDb = testEnv.authenticatedContext('userA', { email_verified: false, email: 'a@a.com' }).firestore();
    await assertFails(authedDb.collection('users').doc('userA').set({
      email: 'a@a.com',
      purchasedBooks: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  });

});
