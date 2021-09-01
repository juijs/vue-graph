import { mount } from '@vue/test-utils'
import GraphComparisonArea from '@/components/comparisonarea'

describe('comparisonarea.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphComparisonArea, {
            props: {
                width: 600,
                height: 400,
                shape: 'step',
                axisStep: 5,
                axisMin: [ 0, 0 ],
                axisMax: [ 100, 20 ],
                labels: [
                    "2018/01", "", "2018/03", "", "2018/05", "", "2018/07", "", "2018/09", "", "2018/11", ""
                ],
                values: [
                    [ 15, 20, 40, 60, 45, 30, 20, 10, 10, 10, 7, 5 ],
                    [ 3, 2, 1, 4, 2, 1, 2, 4, 5, 6, 1, 0 ]
                ],
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});