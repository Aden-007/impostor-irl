# Impostor IRL — setup notes

## Files
- `index.html` — game website
- `config.js` — Firebase/web app configuration

Keep `index.html` and `config.js` in the same folder and at the same deployment root.

## Recent update
- Every impostor now has an independent kill cooldown. One impostor killing someone does not reset another impostor's cooldown.
- Each impostor's cooldown starts as soon as the round begins, and the countdown is displayed immediately on the Impostor Screen.
- After an impostor kills, only that impostor's cooldown restarts.
- Sheriff, Medic and Mayor assignment uses distinct non-impostor players. Each player has one `role` value, so a player cannot be assigned two special roles in the same round. Each enabled special role is assigned to at most one player.

## Firebase and deployment
Fill `config.js` with your Firebase web-app settings, deploy both files to the same root, and configure restrictive Firebase Database rules before using the game with a public group. This static-client version is not cheat-proof: important role secrecy and game actions need server-side validation and restrictive database rules. Do not publish service-account keys or other private credentials.

## Testing checklist
1. Start a round with at least two impostors.
2. Confirm both impostors see a cooldown immediately after the round starts.
3. Have one impostor kill a player after their cooldown expires; verify the other impostor's countdown is unchanged.
4. Verify the killer's countdown restarts after their kill.
5. Start several rounds with special roles enabled and verify no player has more than one role.
