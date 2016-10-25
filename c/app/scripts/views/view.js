var $ = require('jquery');
var Backbone = require('backbone');

var mainContentTemplate = ('../../templates/main_content.hbs');
var sideContentTemplate = ('../../templates/side_content.hbs');

var BlogTitleList = Backbone.View.extend({
  tagName: 'div',
  template: sideContentTemplate,

  initialize: function(){
    this.listento(this.collection, 'add', this.render)
  },
  render: function(blogPost){
    var context = blogPost.toJSON();
    this.$el.append(this.template(context));
      return this;
  },
});

var BlogTitleListing = Backbone.View.extend({
  tagName: 'div',
  className: 'well',
  template: mainContentTemplate,
  initialize function(){

  },
  render: function(){
    var content = this.model.toJSON();
    this.$el.html(this.template(content));
  }
});

module.exports = {
  BlogTitleListing: BlogTitleListing,
  BlogTitleListing: BlogTitleListing
}
