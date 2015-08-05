/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

  // Router.map(function() {
  //   this.route('camp', {
  //       path: '/camps/:_id',
  //       template: 'viewOneCampPage', // <-- to be explicit
  //       data: function() {
  //           return {id: this.params._id};
  //       }
  //   });
  // });

  Router.route('/camps/:_id', function () {
    this.render('viewOneCampPage', {
        data: function () {
          return {id: this.params._id};
        }
      });
    });
    // Router.route('/camps/:_id', function() {
    //
    //     //we must subscribe to the camp we are showing!!!
    //     this.subscribe('camp', this.params._id);
    //
    //     //now let's query that camp
    //     var camp = Camps.findOne({_id: this.params._id});
    //
    //     //then set it as the 'this' object on the page, using the data object
    //     this.render('viewOneCampPage', {data: {id: this.params._id}});
    // });

    //This is how you display a modal
    //In this case, we are displaying a modal to
    //confirm that the user wants to delete a specific camp
    Template.viewOneCampPage.events({
        'click #deleteCampButton': function() {

            //'this' is the current doc we are showing
            Modal.show('confirmCampDeleteModal', this);
        }
    });

}
