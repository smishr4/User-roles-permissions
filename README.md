# User-roles-permissions

make sure you have mongo and node installed on your system
then do `npm install`

Please use `npm start` to start the server,
use `npm test` to run test cases.

Test coverage: All apis covered.

Correction: 
1. For modifying permission of a role its described to use post call but dont do that, I have corrected it to a put call, because post is not idempotent.

2. instead of just /checkpermission I am using /permissions/checkpermission route.
