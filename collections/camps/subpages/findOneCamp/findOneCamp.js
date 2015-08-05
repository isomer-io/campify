if (Meteor.isClient) {
  Template.findOneCamp.onCreated(function() {

     var campId = Template.currentData().campId;

     this.subscribe('camp', campId);
  });

  Template.findOneCamp.helpers({
    currentCamp: function() {
      var campId = Template.currentData().campId;
      return Camps.findOne({_id: campId});
    }
  });

}
