// Guest List
let guests: string[] = ["Yaman","Arwa","Khuzaima"];

// loop through the guest list to send invitations
guests.forEach(guests => {
  console.log(
    `Dear ${guests}, \n\t It would be an honor to have you join us for dinner. Your presence would greatly enrich our gathering. \n\n Sincerely \n Huzaifa Ayub\n`
  );
});

// Changing Guest
let unableToAttend = "Khuzaima";
console.log(`${unableToAttend} cant make it to dinner \n\n`);

// Replace the guest
let newGuest = "Ayesha";
guests[guests.indexOf(unableToAttend)] = newGuest;

//New Invitation
guests.forEach(guests => {
  console.log(`Dear ${guests}, \n\t It would be an honor to have you join us for dinner. Your presence would greatly enrich our gathering. \n\n Sincerely \n Huzaifa Ayub\n`
  );
});


