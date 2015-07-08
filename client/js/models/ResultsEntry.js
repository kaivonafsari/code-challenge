var ResultsEntry = Backbone.Model.extend({

  defaults: {
    affordabilityAmount: "",
    monthlyDebts: "",
    monthlyHazardInsurance: "",
    monthlyHoaDues: "",
    monthlyIncome: "",
  },

  url: '/getInfo',

  initialize: function() {},

  mortgageData: {},

  parse: function(response) {
        console.log("THIS IS THE RESPONSE", response);
        var obj = {};
        obj.affordabilityAmount =response.response.affordabilityAmount;
        obj.monthlyDebts = response.response.monthlyDebts;
        obj.monthlyHazardInsurance = response.response.monthlyHazardInsurance;
        obj.monthlyHoaDues = response.response.monthlyHoaDues;
        obj.monthlyIncome = response.response.monthlyIncome;
        defaults = obj;
        console.log("THIS IS DEFAULTS", defaults);
        return response;
    },
  
  getInfo: function(info) {
    console.log("I'm inside the API call!" + JSON.stringify(info));
    this.fetch({data: info, type: 'POST'}).then(this.hailMary.bind(this));
  },

  hailMary: function() {
  	  console.log("I AM INSIDE OF YOU.")
      this.trigger('info');
    }

});