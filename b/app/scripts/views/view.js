var $ = require('jquery');
var Backbone = require('backbone');
var contactForm = require('../../templates/contactform.hbs');

var NewContact = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: contactForm,
  events: {
    'submit': 'newForm'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  newForm: function(e){
    e.preventDefault();

    var firstName = $('#FirstNameInput').val();
    var lastName = $('#LastNameInput').val();
    var address = $('#AddressInput').val();
    var phone = $('#PhoneNumberInput').val();

    this.collection.create({
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber
    });
  }
});

module.exports = {
  NewContact: NewContact
}
