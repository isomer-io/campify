/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

    Router.route('/camps/create', function() {
        this.render('createCampPage');
    });

    //'insertCamp' is the id of the quickform we
    //and 'updateCamp' are the id's of the quickforms
    //we want to listen to, not the name of the page level templates
    AutoForm.addHooks('insertCamp', {

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