exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Company BBQ",
          description: "Host the annual Company BBQ Picnic at Crystal Lake.",
          completed: false,
        },
        {
          id: 2,
          name: "Fix the Water Cooler",
          description:
            "Perform maintenance on the leaking water cooler in the main hall.",
          completed: false,
        },
        {
          id: 3,
          name: "Install Wall Fountain",
          description:
            "Add a visually appealing wall fountain to the green room for tranquility.",
          completed: false,
        },
      ]);
    });
};
