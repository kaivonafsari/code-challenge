var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    var myResultsEntry = new ResultsEntry();

    this.input = new InputView({
      model: myResultsEntry
    });

    this.info = new InfoView({
      model: myResultsEntry
    });

    this.render();
  },

  render: function() {

    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.info.$el
    ]);

    return this;
  }

});
