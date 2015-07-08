var ResultsEntry = Backbone.Model.extend({

  defaults: {
    affordabilityAmount: "",
    monthlyDebts: "",
    monthlyHazardInsurance: "",
    monthlyHoaDues: "",
    monthlyIncome: "",
    // monthlyIncomeTax: "",
    // monthlyPmi: "",
    // monthlyPrincipalAndInterest: "",
    // monthlyPropertyTaxes: "",
    // monthlyRemainingBudget: "",
    // totalInterestPayments: "",
    // totalMonthlyPayment: "",
    // totalPayments: "",
    // totalPrincipal: "",
    // totalTaxesFeesAndInsurance: ""
  },

  url: '/stuff',

  initialize: function() {},

  mortgageData: {},

  parse: function(response) {
        console.log("THIS IS THE RESPONSE", response);
        defaults = response.response.affordabilityAmount;
        console.log("THIS IS DEFAULTS", defaults);
        return response;
    },
  
  addWeatherEntry: function(info) {
    console.log("I'm inside the API call!" + JSON.stringify(info));
    this.fetch({data: info, type: 'POST'}).then(this.hailMary.bind(this));


    // var that =this;
    // console.log("IS THIS A MODEL?", this);
    // $.ajax({
    //          url: "/stuff",
    //          headers: { 'Access-Control-Allow-Origin': '*' },
    //          type: 'POST',
    //          data: info,
    //          crossDomain: true,
    //          dataType: 'json',
    //          // contentType: 'application/json',
    //          success: function(data) { 
    //           defaults = data.response.affordabilityAmount;
    //           console.log("THIS IS DEFAULTS "+defaults);
    //           that.trigger("info", that);
              
    //         },
    //         error: function(eroor) { 
    //           console.log("THIS IS BAD"+ JSON.stringify(eroor));
    //           // alert('Success!'+data); 
    //         }
    //       });
  },

  hailMary: function() {
  	  console.log("I AM INSIDE OF YOU.")
      this.trigger('info');
    }

});