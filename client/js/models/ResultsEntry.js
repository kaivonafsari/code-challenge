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
        this.set("affordabilityAmount", response.response.affordabilityAmount);
        this.set("monthlyDebts", response.response.monthlyDebts);
        this.set("monthlyHazardInsurance", response.response.monthlyHazardInsurance);
        this.set("monthlyHoaDues", response.response.monthlyHoaDues);
        this.set("monthlyIncome", response.response.monthlyIncome);
        return response;
    },
  
  getInfo: function(info) {
    console.log("I'm inside the API call!" + JSON.stringify(info));
    this.fetch({data: info, type: 'POST'}).then(this.hailMary.bind(this));
  },

  hailMary: function() {
      this.trigger('info');
    }

});