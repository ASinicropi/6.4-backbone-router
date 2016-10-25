var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/model.js');
var views = require('./views/view.js');

var BlogRouter = Backbone.Router.extend({
  router: {
    '': 'index',
    'blog/:id' : 'displayBlog'
  },
  initialize: function(){
    this.collection = new.models.BlogCollection();
  },
  index: function(){
    var blogTitleList = new views.BlogTitleListing({collection: this.collection});
    $('#titlePost').html(blogTitleList.render().el);
    this.collection.fetch();
  },
  displayBlog: function(id){
    var selectedBlog = this.collection.get(id);
    var activeBlog =  new views.BlogPostView({model: blog});
    $('#blogPost').html(blogView.render().el);
  }
});

var router = new BlogRouter();

module.exports = router;
