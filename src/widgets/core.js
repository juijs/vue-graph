export default {
    template: '<span style="display: none;"></span>',
    beforeMount: function(e) {
        if(!this.$parent || !this.$parent.$vnode || this.$parent.$vnode.tag.indexOf("graph-") == -1) {
            throw new Error('[Vue Graph error]: Can only be used as child nodes.');
        }

        this.index = this.$parent.widgets.length;
        this.brushes = [];

        for(let i = 0; i < this.$parent.brushes.length; i++) {
            this.brushes.push(i);
        }
    }
}