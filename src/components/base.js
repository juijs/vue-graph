export default {
    template: '<div><slot></slot></div>',
    beforeMount: function(e) {
        if(this.$root != this.$parent) {
            throw new Error('[Vue Graph error]: Can only be used as parent nodes.');
        }

        this.index = this.brushes.length;
    }
}