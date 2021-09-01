import { mount } from '@vue/test-utils'
import GraphComparisonBar from '@/components/comparisonbar'

describe('comparisonbar.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphComparisonBar, {
            props: {
                width: 600,
                height: 400,
                labels: [ "80+", "75-59", "70-74", "65-69", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24", "15-19", "10-14", "5-9", "0-4" ],
                values: [
                    [ 6.0, 4.7, 9.6, 13.6, 19.0, 19.7, 23.2, 30.2, 34.9, 42.2, 43.9, 50.1, 53.8, 56.5, 63.3, 60.6, 54.2 ],
                    [ 5.3, 4.5, 9.7, 12.9, 18.7, 19.5, 25.8, 32.1, 37.5, 42.9, 44.7, 51.3, 57.6, 64.0, 69.4, 66.3, 58.6 ]
                ],
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});