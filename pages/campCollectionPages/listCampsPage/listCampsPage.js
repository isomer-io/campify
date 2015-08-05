/**
 * Created by wesley on 6/8/15.
 */

if (Meteor.isClient) {

    Navbar.add({
        url: '/camps',
        menuName: 'Camps',
        menuOrientation: 'left'
    });

    Session.setDefault("camps.filter", false);


    Router.route('/camps', function() {
       this.render('listCampsPage');
    });

    Template.listCampsPage.helpers({
       hasResults: function() {
           return Camps.find().count();
       },
       isDisabled: function(filter) {
         if (Session.get('camps.filter')  && filter === 'oldest-first') {
           return 'disabled';
         }
         if (!Session.get('camps.filter') && filter === 'newest-first') {
           return 'disabled';
         }
        return '';
      },
      sortSettings: function() {
        return {
            createdAt: -1
        }
      }
    });

    Template.listCampsPage.events({
        'click #oldest-first': function() {
            Camps.findList.set({
               sort: {
                   createdAt: 1
               }
            });

            Session.set('camps.filter', true);

        },
        'click #newest-first': function() {
            Camps.findList.set({
                sort: {
                    createdAt: -1
                }
            });

            Session.set('camps.filter', false);

        }
    });

}
