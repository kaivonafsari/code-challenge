var InputView = Backbone.View.extend({

  // tagName: 'input',
  el: '<div>',

  events: {
    // 'keydown': 'keyAction',
     'submit': 'getFilter'
  },

  initialize: function() {
    this.model.on('info', this.clearField, this);
    this.render();
  },

  render: function() {
    // this.resetInput();
     this.$el.append(
      
      '<form>'+
        '<div class="form-group">'+
          '<label for="exampleInputEmail1">Annual Income</label><input type="text" class="form-control" id="annual" placeholder="Annual Income" required>'+
          '<label for="exampleInputEmail1">Monthly Payment</label><input type="text" class="form-control" id="monthly" placeholder="Monthly Payment" required>'+
          '<label for="exampleInputEmail1">Down</label><input type="text" class="form-control" id="down" placeholder="Down" required>'+
          '<label for="exampleInputEmail1">Monthly Debts</label><input type="text" class="form-control" id="mDebts" placeholder="Monthly Debts" required>'+
          '<label for="exampleInputEmail1">Rate</label><input type="text" class="form-control" id="rate" placeholder="Rate">'+
        '</div>'+
        '<button type="submit" class="btn btn-default">Submit</button>'+
      '</form>'
    );
    // return this;
  },

  getFilter: function(e) {
    e.preventDefault();
    console.log("HELLO WORLD!");
    var info = {};
    info.annual = this.$el.find("#annual").val();
    info.monthly = this.$el.find("#monthly").val();
    info.down = this.$el.find("#down").val();
    info.mDebts = this.$el.find("#mDebts").val();
    info.rate = this.$el.find("#rate").val();
    console.log(info);

    this.model.addWeatherEntry(info);
    // this.$el.append("<div>this.collection.mortgageData.response.affordabilityAmount</div>");
  },

  clearField: function(){
    console.log("I'M INSIDE CLEAR FIELD!");
    this.$el.empty();
  }

});
