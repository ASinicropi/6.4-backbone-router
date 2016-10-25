var $ = require('jquery');
var Backbone = require('backbone');

var blogPost = Backbone.View.extend({
  events: {
    'click .submit': 'newBlog'
  },
  newBlog: function(e){
    e.preventDefault();

    var addBlogPost = {
      title: $('#title').val(),
      body: $('#blog-text').val()
    };

    this.collection.create(addBlogPost);
    $('#title').val('');
    $('#blog-text').val('');
  }
});

module.exports = {
  blogPost: blogPost
}
