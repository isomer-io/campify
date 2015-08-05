if (Meteor.isClient) {

  Template.campCreatorControls.onCreated(function() {

     var campId = Template.currentData().campId;

     this.subscribe('camp', campId);
  });

  Template.campCreatorControls.helpers({
    currentCamp: function() {
      var campId = Template.currentData().campId;
      return Camps.findOne({_id: campId});
    }
  });

  Template.campCreatorControls.events({
      'click #deleteCampButton': function() {
          //'this' is the current doc we are showing
          Modal.show('confirmCampDeleteModal', this);
      }
  });

}
