var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/view');
var models = require('./models/model')

var ContactRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  initialize: function(){
    this.collection = new models.ContactCollection();
    this.collection.fetch();
  },
  index: function(){
    var newContact = new views.NewContact({collection: this.collection});

    $('.app')
      .html(newContact.render().el);

  }
});

var router = new ContactRouter();

module.exports = router;
