exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Call Steve Marma to set up BBQ grill equipment.",
          notes: "Steve's number: 5684 ext. 18",
          completed: false,
        },
        {
          id: 2,
          description: "Contact corporate office to get our Toolbox back.",
          notes: "Corporate number: 890-227-4493 ext. 45.  Ask for Bill",
          completed: false,
        },
        {
          id: 3,
          description: "Contact Frank Bodee to fix the water cooler",
          notes: "Franks's number: 5684 ext. 19",
          completed: false,
        },
        {
          id: 4,
          description: "Contact Frank Bodee once we receive Toolbox",
          notes: "Franks's number: 5684 ext. 19",
          completed: false,
        },
        {
          id: 5,
          description: "Contact Jill Whitley regarding funds for Company BBQ",
          notes: "Jill's number: 5684 ext. 29",
          completed: false,
        },
        {
          id: 6,
          description: "Contact Joe Migs to install wall fountain",
          notes:
            "Joe's number: 587-882-9143.  Available Thursday and Friday afternoons.",
          completed: false,
        },
      ]);
    });
};
