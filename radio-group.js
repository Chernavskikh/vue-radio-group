// Define a new component called yes-no-radio
    Vue.component('yes-no-radio', {
        data: function () {
            return {
                newValue: this.value
            };
        },
        props: ['value', 'name'],
        computed: {
            computedValue: {
                get() {
                    return this.newValue;
                },
                set(value) {
                    this.newValue = value;
                    this.$emit('input', value);
                }
            }
        },
        watch: {
            /**
             * When v-model change, set internal value.
             */
            value(value) {
                this.newValue = value;
            }
        },
        template: `<div>
        <label class="btn btn-default">
          <input 
              type="radio"
              v-model.number="computedValue"
              :name="name"
              :checked="value === 1" value="1"> Yes
        </label>
        <label class="btn btn-default">
          <input 
              type="radio" 
              v-model.number="computedValue"
              :name="name"
              :checked="value === 0"
              value="0"> No
        </label>
        </div>`,
    });
