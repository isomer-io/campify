/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

    /*
     After they click the confirm delete button,
     we remove the camp document, hide the modal,
     and re-direct them to the list of camps
     */
    Template.confirmCampDeleteModal.events({
        'click #confirmDelete': function() {
            Camps.remove(this._id, function() {
                Modal.hide();
                Router.go('/camps');
            });
        }
    });

}