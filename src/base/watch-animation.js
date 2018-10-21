export default {
    watch: {
        renderStop: function(newVal, oldVal) {
            if(newVal) {
                this.animation.stop();
            } else {
                const self = this;
                this.animation.run(function(runningTime) {
                    if(typeof(self.renderHandler) == "function") {
                        self.renderHandler.call(this, runningTime);
                    }
                });
            }
        }
    }
}