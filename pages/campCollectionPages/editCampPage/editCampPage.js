/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {


    Router.route('/camps/:_id/edit', function() {

        //we must subscribe to the camp we are showing!!!
        this.subscribe('camp', this.params._id);

        //now let's query that camp
        var camp = Camps.findOne({_id: this.params._id});

        //then set it as the 'this' object on the page
        this.render('editCampPage', {data: camp});
    });

    //after they insert a new camp, redirect back to
    //list of camps

    //'insertCamp' is the id of the quickform we
    //and 'updateCamp' are the id's of the quickforms
    //we want to listen to, not the name of the page level templates
    AutoForm.addHooks('updateCamp', {

        //the onSuccess method gets called after
        //a successful submit on either of the forms
        onSuccess: function(formType, result) {

            //this.docId is the _id of the document
            //the form just changed, so we will
            //load the url of that item and show the user
            //the result
            Router.go('/camps/' + this.docId);
        }
    });

}