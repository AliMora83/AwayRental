"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA;
}
module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = "Images";
        return await queryInterface.bulkInsert(
            options,
            [
                {
                    imageableId: 1,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/49c4f89b-706e-4e30-aadd-c96ed79e3fdc.jpg?im_w=1200",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 1,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/a88bbc3f-2d96-45fa-9bdc-295aed081298.jpg?im_w=720",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 1,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/bfb73ae9-f2f0-425a-b9f5-72ffa6c75641.jpg?im_w=1440",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 2,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45096338/original/66fdc5c5-68ac-4c5e-ad55-45a23466462b.jpeg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 2,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45096338/original/b092da44-6310-4f38-9e3f-c3c2f2b83aa4.jpeg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 2,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45096338/original/519ed3b6-50ba-4469-8707-69fe26e2352a.jpeg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 3,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/2c38742c-071b-4926-81d6-f4578c70bdf1.jpg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 3,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/38c6e4ee-979f-40d0-b0f3-332d92c99f09.jpg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 3,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/50e8db6c-5679-429b-89fa-b996e59fbaa9.jpg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 4,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-54005986/original/ae6e7967-b152-49b1-bdeb-e93c0d1afd5b.jpeg?im_w=1440",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 4,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-54005986/original/147d0e13-6beb-4cc2-bba9-8af92c174084.jpeg?im_w=1440",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 4,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-54005986/original/c0476ff3-6313-47cd-9e0d-1568e65b56d2.jpeg?im_w=1440",
                    userId: 1,
                    preview: false,
                },
                {
                    imageableId: 5,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43801849/original/a44eb23f-fa26-4cb1-9848-2651248b3263.jpeg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 5,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43801849/original/94e7dbda-67d4-4637-b648-edd58579f8fb.jpeg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 5,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-43801849/original/8413d0a1-52d4-484d-8968-c603f2b7989b.jpeg?im_w=1440",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 6,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/ff497a27-f460-4ca7-9963-026c1a21a59b.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 6,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/716cf88c-0908-4fae-9c98-243f2677814e.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 6,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/e71999c9-7c9b-4c88-a7f7-9317b9e625b6.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 7,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-42623668/original/7854c702-db82-451a-8236-9fa31db994fe.jpeg?im_w=1440",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 7,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-42623668/original/214c3091-5c4a-4140-9298-edcd5171785d.jpeg?im_w=1440",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 7,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-42623668/original/6a09e9be-7918-41d3-8c7a-f1f27232003e.jpeg?im_w=1440",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 7,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-42623668/original/041ecc0e-40ef-44ca-a862-402a926941a2.jpeg?im_w=1440",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 8,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/0c9840da-589e-41c5-b80b-620a095e2dbc.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 8,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/f62376bb-3e72-4145-9322-d9693316847e.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 8,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/857393d2-1d89-47d1-95d2-c7e72d702f1b.jpg?im_w=1440",
                    userId: 2,
                    preview: false,
                },
                {
                    imageableId: 9,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-46635266/original/64a0625a-d4a7-460c-98c3-eac7aba948c1.jpeg?im_w=1200",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 9,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-46635266/original/87e138d5-7e10-476b-9b95-48585fb186c9.jpeg?im_w=1200",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 9,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-46635266/original/0a3a468c-a45d-46e1-a312-00fd73f20106.jpeg?im_w=1200",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 9,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/miso/Hosting-46635266/original/46fa3998-b584-4d4c-b473-a3f6a8f3e248.jpeg?im_w=1200",
                    userId: 4,
                    preview: false,
                },
                {
                    imageableId: 10,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/04007f4e-10ee-408b-8985-c42e656f1e24.jpg?im_w=1200",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 10,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/2849bfbe-11e2-4af1-a425-68f8070891ff.jpg?im_w=1200",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 10,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/8386964c-21da-4947-9812-60a15e407acc.jpg?im_w=1200",
                    userId: 3,
                    preview: false,
                },
                {
                    imageableId: 10,
                    imageableType: "Spot",
                    url: "https://a0.muscache.com/im/pictures/ecf6dc3a-423b-408b-80bc-c77467eb2773.jpg?im_w=1200",
                    userId: 3,
                    preview: false,
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "Images";
        return await queryInterface.bulkDelete(options, {});
    },
};
