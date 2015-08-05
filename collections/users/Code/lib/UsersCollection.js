SimpleSchema.extendOptions({
  public: Match.Optional(Boolean)
});

Schema = {}

var childSchema = new SimpleSchema({
  birthday: {
    type: Date,
    optional: true,
    public:true
  },
  lastName: {
    type: String,
    optional:true,
    public:true
  },
  firstName: {
    type: String,
    optional:true,
    public:true
  },
    gender: {
        type: String,
        optional:true,
        public:true
    },
});

Schema.UserProfile = new SimpleSchema({
  profilePicture:orion.attribute('image', {
    label: 'Image',
    autoform:{
      aspectRatio:16/9,
      maxSizeMb:40
    },
    optional:true
  }),
  children:{
    type:Array,
    optional:true
  },
  "children.$":{
    type:childSchema
  }
});

Schema.User = new SimpleSchema({
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  stripe:{
    type:Object,
    optional:true,
    blackbox:true
  }
});

Meteor.users.attachSchema(Schema.User);

if(Meteor.isClient){
  AutoForm.hooks({

  });
}
