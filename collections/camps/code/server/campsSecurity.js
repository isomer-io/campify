/**
 * Created by wesley on 6/4/15.
 */

/**
 * Define publications here
 */
Meteor.publish('camp', function(campId) {
    return Camps.find({_id: campId});
});

/**
 *
 * Define your security permissions here
 *
 */

//they can only insert if they are a user
Camps.permit('insert').ifLoggedIn().apply();

//can update if they are logged in and the document was created by them
Camps.permit('update').ifLoggedIn().ifCreatedByUser().apply();

//can update if they are an admin
Camps.permit('update').ifHasRole('admin').apply();

//can remove if they are logged in and the document was created by them
Camps.permit('remove').ifLoggedIn().ifCreatedByUser().apply();

//can remove if they are an admin
Camps.permit('remove').ifHasRole('admin').apply();