# Security Specification for Apothecary Shared App

## Data Invariants
1. A user's profile document (`/users/{userId}`) can only be created and updated by the owner (`userId == request.auth.uid`).
2. Only the owner can read their purchased books block.
3. Users cannot give themselves purchased books arbitrarily (this should be handled by a secure backend webhook eventually, so we restrict `purchasedBooks` updates to server-side only, or if we must allow client-side for sandbox, we tightly control it. Let's restrict `purchasedBooks` modifications by the client to prevent arbitrary unlocks).
*Wait, if the user modifies `purchasedBooks` on the client, they can unlock anything. For a real app, only an Admin/System can update `purchasedBooks`. But since we don't have a backend yet, I'll allow the user to write to it IF the request simulates a successful purchase? No, standard practice is to secure it: the webhook updates `purchasedBooks`. So the client can read their `purchasedBooks` but CANNOT arbitrarily update them.*

## The "Dirty Dozen" Payloads
1. **Unauthenticated Read:** Attempt to read a user's profile without being logged in.
2. **Cross-User Read:** Attempt to read `/users/B` while logged in as user `A`.
3. **Cross-User Create:** Attempt to create `/users/B` while logged in as user `A`.
4. **Ghost Field Update:** Update `/users/A` with an invalid field `isAdmin: true`.
5. **Unauthorized Purchase Unlock:** Update `/users/A` and modify `purchasedBooks` as a normal client.
6. **ID Poisoning:** Create a user document with an ID containing malicious characters (e.g., `../../../users/123`).
7. **Type Mismatch:** Update a user profile where `email` is an array instead of a string.
8. **Size Exhaustion:** Create a user profile with an `email` string of 2MB.
9. **Role Escalation:** Set `role: "admin"` during user creation.
10. **Array Overflow:** Set `purchasedBooks` to an array > 100 items. (Client shouldn't even be able to set it, but if they try...).
11. **Spoofed Auth Email:** Attempt to create a document claiming an email that doesn't match the token.
12. **Unverified Email Access:** Attempt to read or write without a verified email (though for Google Login it's usually verified, we should enforce it).

## Test Runner Scope
We will test these payloads against `firestore.rules.test.ts`.
