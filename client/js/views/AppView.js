var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.title = new TitleView();

    this.input = new InputView({
      model: new ResultsEntry()
    });

    this.info = new InfoView({
      model: new ResultsEntry()
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
