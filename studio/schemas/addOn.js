export default {
  name: "addOn",
  title: "Add On",
  type: "document",
  fields: [
    // How to handle sizes/colors/variants of a product.  E.g. red, green and blue glasses? These are all three different products but for a content editor they are also the "same" product.
    {
      name: "active",
      title: "Active?",
      description:
        "Toggle whether the add on is active in your store. Inactive products are kept in the database but not displayed on the website.",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "name",
      title: "Product name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stock",
      title: "Amount of stock available.",
      description:
        "If the stock number is 0 then the product will be shown as out of stock. For add ons you can specificy a very large stock number.",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
}
