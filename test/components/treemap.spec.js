import { mount } from '@vue/test-utils'
import GraphTreeMap from '@/components/treemap'

describe('treemap.js', () => {
    it('snapshot', () => {
        const wrapper = mount(GraphTreeMap, {
            props: {
                width: 800,
                height: 800,
                textAlign: 'right',
                textVerticalAlign: 'bottom',
                colors: [ '#EC2500', '#ECE100', '#EC9800', '#9EDE00' ],
                values: [
                    [ '0', 'Apples', -1 ],
                    [ '0.0', 'Anne', 5 ],
                    [ '0.1', 'Rick', 3 ],
                    [ '0.2', 'Peter', 4 ],
                    [ '1', 'Bananas', -1 ],
                    [ '1.0', 'Anne', 4 ],
                    [ '1.1', 'Rick', 10 ],
                    [ '1.2', 'Peter', 1 ],
                    [ '2', 'Oranges', -1 ],
                    [ '2.0', 'Anne', 1 ],
                    [ '2.1', 'Rick', 3 ],
                    [ '2.2', 'Peter', 3 ],
                    [ '3', 'Susanne', 2 ],
                ]
            }
        });

        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
});