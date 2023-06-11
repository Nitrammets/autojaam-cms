export const schemaTypes = [
  {
    name: 'article',
    title: 'Review Article',
    type: 'document',
    fields: [
      {
        name: 'manufacturer',
        title: 'Manufacturer',
        type: 'string',
        options: {
          maxLength: 200,
        },
      },
      {
        name: 'model',
        title: 'Model',
        type: 'string',
        options: {
          maxLength: 200,
        },
      },
      {
        name: 'body_type',
        title: 'Body type',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                {title: 'Luukpära', value: '0'},
                {title: 'Sedaan', value: '1'},
                {title: 'Universaal', value: '2'},
                {title: 'Kupee', value: '3'},
                {title: 'Suv', value: '4'},
                {title: 'Maastur', value: '5'},
                {title: 'Muu', value: '6'},
              ],
            },
          },
        ],
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          maxLength: 200,
        },
      },
      {
        name: 'youtube_id',
        title: 'Youtube video ID',
        type: 'string',
        description: 'https://www.youtube.com/watch?v=<t67fLYzcEEk>',
      },
      {
        name: 'cover_img',
        title: 'Cover Image URL',
        type: 'url',
      },
      {
        name: 'grid_img',
        title: 'Grid Image URL',
        type: 'url',
      },
      {
        name: 'conclusion_img',
        title: 'To who? Image',
        type: 'url',
      },
      {
        name: 'stats_img',
        title: 'Stats Image',
        type: 'url',
      },
      {
        name: 'intro',
        title: 'Intro content',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'exterior_content',
        title: 'Exterior content',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'exterior_slides',
        title: 'Exterior slideshow URLs',
        type: 'array',
        of: [{type: 'url'}],
      },
      {
        name: 'interior_content',
        title: 'Interior content',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'interior_slides',
        title: 'Interior slideshow URLs',
        type: 'array',
        of: [{type: 'url'}],
      },
      {
        name: 'driving_content',
        title: 'Driving content',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'driving_slides',
        title: 'Driving slideshow URLs',
        type: 'array',
        of: [{type: 'url'}],
      },
      {
        name: 'gallery_slides',
        title: 'Gallery slideshow URLs',
        type: 'array',
        of: [{type: 'url'}],
      },
      {
        name: 'conclusion_content',
        title: 'To who? content',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'price_beginning',
        title: 'Price Starting from',
        type: 'number',
      },
      {
        name: 'price_tested',
        title: 'Tested model price',
        type: 'number',
      },
      {
        name: 'fuel',
        title: 'Fuel type',
        type: 'string',
        options: {
          list: ['Bensiin', 'Diisel', 'Hübriid', 'Elekter'],
        },
      },
      {
        name: 'engine',
        title: 'Engine',
        type: 'string',
      },
      {
        name: 'power',
        title: 'Power',
        type: 'number',
      },
      {
        name: 'fuel_consumption',
        title: 'Fuel consumption',
        type: 'number',
      },
      {
        name: 'drivetrain',
        title: 'Drivetrain',
        type: 'string',
        options: {
          list: ['Esivedu', 'Taguvedu', 'Nelikvedu'],
        },
      },
      {
        name: 'gearbox',
        title: 'Gearbox',
        type: 'string',
      },
      {
        name: 'top_speed',
        title: 'Top speed',
        type: 'number',
      },
      {
        name: 'acceleration',
        title: 'Acceleration',
        type: 'number',
      },
      {
        name: 'dealer_name',
        title: 'Dealership name',
        type: 'string',
      },
      {
        name: 'dealer',
        title: 'Dealership name',
        type: 'url',
      },
    ],
  },
]
