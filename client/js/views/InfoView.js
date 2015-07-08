var InfoView = Backbone.View.extend({
  
  el: '<div>',

  events: {},
  
  initialize: function() {
  	this.model.on('info', this.restart, this);
    this.render();
  },

  render: function() {
  	this.$el.empty();
    this.$el.append(
      '<div class="defaults">'+
        '<h1 class="msTitle">Mortgage Stats</h1>'+
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
  },

  restart: function() {
      this.$el.empty();
      console.log("THIS IS DEFAULTS RIGHT NOW", this.model._previousAttributes);
      this.$el.append(
        '<div class="defaults">'+
          '<h1 class="msTitle">Mortgage Stats</h1>'+
            '<p class="padding">' +
              "Affordability Amount" +
            '</p>'+
            '<p class="center"><span>$</span>'
              +this.model._previousAttributes.affordabilityAmount+
            '</p>'+
            '<p class="padding">' +
              "Monthly Debts" +
            '</p>'+
            '<p class="center"><span>$</span>'
              +this.model._previousAttributes.monthlyDebts+
            '</p>'+
            '<p class="padding">' +
              "Monthly Hazard Insurance" +
            '</p>'+
            '<p class="center"><span>$</span>'
              +this.model._previousAttributes.monthlyHazardInsurance+
            '</p>'+
            '<p class="padding">' +
              "Monthly HOA Dues" +
            '</p>'+
            '<p class="center"><span>$</span>'
              +this.model._previousAttributes.monthlyHoaDues+
            '</p>'+
            '<p class="padding">' +
              "Monthly Income" +
            '</p>'+
            '<p class="center"><span>$</span>'
              +this.model._previousAttributes.monthlyIncome+
            '</p>'+
        '</div>'
      );
    },

});