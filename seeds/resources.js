exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          name: "Company Toolbox",
          description:
            "A large red mechanic's toolbox with over 500 tools available.",
        },
        { id: 2, name: "Steve Marma", description: "Company Maintenance" },
        { id: 3, name: "Frank Bodee", description: "Company Maintenance" },
        { id: 4, name: "Jill Whitley", description: "Project Finance" },
        { id: 5, name: "Joe Migs", description: "Third-party Contractor" },
        {
          id: 6,
          name: "Wall Fountain",
          description: "An assembled fountain ready to be installed",
        },
        {
          id: 7,
          name: "Grill Equipment",
          description: "An assortment of grilling accessories",
        },
        {
          id: 8,
          name: "Food",
          description: "An assortment of food ready for grilling",
        },
        { id: 9, name: "Duct tape", description: "Fixes everything." },
      ]);
    });
};
