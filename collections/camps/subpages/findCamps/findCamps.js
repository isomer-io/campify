Camps.paginations = [];

Camps.paginations.push(new Meteor.Pagination(Camps, {
       infinite: true,
       itemTemplate: 'campInFindList',
       templateName: "camps",
       sort: {
           createdAt: -1
       },
       availableSettings: {
           sort: true,
           filter: true
       },
       fastRender: true
}));

if (Meteor.isClient) {

    Template.findCamps.onCreated(function() {

      Tracker.autorun(function(){

        Camps.paginations[0].set({
          sort: Template.currentData().sort || {},
          filter: Template.currentData().filter || {}
        });
    });
  });


}
