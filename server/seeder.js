module.exports = (models) => {
    return models.Tag.bulkCreate([{
      name: 'Summer'
    }, {
      name: 'Sweater'
    //   name: 'tops'
    // }, {
    //   name: 'bottoms'
    // }, {
    //   name: 'dresses',
    // }, {
    //   name: 'outerwear'
    // }, {
    //   name: 'accessories'
  }])
  .then(() => {
    return models.Product.bulkCreate([{
      name: 'Flower Style',
      imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/forth.jpg'
    }, {
      name: 'Men\'s Fashion',
      imageUrl: 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/SMC_Web_MW_S17_777X660.jpg'
      // name: 'Solid Black Top',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg'
      // }, {
      // name: 'Studded Leather Bikini',
      // imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg'
      // }, {
      // name: 'Nice Pearl Dress',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg'
      // }, {
      // name: 'Tribal Headwrap',
      // imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg'
    }])
  })
  .then(products => {
    return models.Tag.findById(1).then((tag) => products[0].addTag())
      .then(models.Tag.findById(2).then((tag) => products[1].addTag()))
      // .then(models.Tag.findById(3).then((tag) => products[3].addTag()))
      // .then(models.Tag.findById(4).then((tag) => products[3].addTag()))
  })
  .then(() => {
    models.Tag.findById(1).then(tag => {
      models.Product.findById(1).then(product => {
        product.addTag(tag)
      })
    })
    models.Tag.findById(2).then(tag => {
      models.Product.findById(2).then(product => {
        product.addTag(tag)
      })
    })
    // models.Tag.findById(3).then(tag => {
    //   models.Product.findById(3).then(product => {
    //     product.addTag(tag)
    //   })
    // })
    // models.Tag.findById(4).then(tag => {
    //   models.Product.findById(4).then(product => {
    //     product.addTag(tag)
    //   })
    // })
    // models.Tag.findById(5).then(tag => {
    //   models.Product.findById(4).then(product => {
    //     product.addTag(tag)
    //   })
    // })
      // .then(() => models.Product.findOne({ where: { id: 1 }, include: models.Tag }))
      // .then(res => console.log(res.dataValues.tags))
  })
}