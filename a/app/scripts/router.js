var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/blogpost');
var models = require('./models/model');

var BlogRouter = Backbone.Router.extend({
  routes; {
    '': 'index',
  },
  initialize: function(){
    this.collection = new model.PostCollection();
    this.collection.fetch();
  },
  index: function(){
    var postBlogOnline = new view.PostBlogOnline({collection: this.collection});

    $('.app')
      .html(postBlogOnline.render().el)
  }
});

var router = new BlogRouter();

module.exports = router;
