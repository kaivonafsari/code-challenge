var InfoView = Backbone.View.extend({
  
  el: '<div>',

  events: {},
  
  initialize: function() {
  	this.model.on('info', this.render, this);
  	console.log("here");
    this.render();
  },

  render: function() {
  	console.log('WORKSSSS')
  	this.$el.empty();
    this.$el.append(
      '<div class="defaults">'+
        '<h1>Mortgage Stats</h1>'+
          '<p class="padding">' +
            "Affordability Amount" +
          '</p>'+
          '<p class="center">'
            +JSON.stringify(this.model.defaults.affordabilityAmount)+
          '</p>'+
          '<p class="padding">' +
            "Monthly Debts" +
          '</p>'+
          '<p class="center">'
            +JSON.stringify(this.model.defaults.monthlyDebts)+
          '</p>'+
          '<p class="padding">' +
            "Monthly Hazard Insurance" +
          '</p>'+
          '<p class="center">'
            +JSON.stringify(this.model.defaults.monthlyHazardInsurance)+
          '</p>'+
          '<p class="padding">' +
            "Monthly HOA Dues" +
          '</p>'+
          '<p class="center">'
            +JSON.stringify(this.model.defaults.monthlyHoaDues)+
          '</p>'+
          '<p class="padding">' +
            "Monthly Income" +
          '</p>'+
          '<p class="center">'
            +JSON.stringify(this.model.defaults.monthlyIncome)+
          '</p>'+
      '</div>'
    );
  }

});