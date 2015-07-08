var InfoView = Backbone.View.extend({

  model: ResultsEntry,	
  
  el: '<div>',

  events: {},
  
  initialize: function() {
  	this.model.on('info', this.restart, this);
  	console.log("here");
    this.render();
  },

  render: function() {
  	console.log('WORKSSSS')
  	this.$el.empty();
    this.$el.append('<div class="defaults"><h1>Mortgage Stats</h1><p class="center">'+JSON.stringify(this.model.defaults)+'</p></div>');
  },

  restart: function(){
  	console.log("I'm INSIDE RESTART")
  	this.$el.empty();
  	this.$el.this.$el.html(this.model.toJSON());
  }

});