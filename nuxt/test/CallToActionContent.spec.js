import { shallowMount } from '@vue/test-utils';
import CallToActionContent from '@/components/CallToActionContent';

const factory = () => shallowMount(CallToActionContent);

describe('CallToActionContent', () => {
  it('is a Vue instance', () => {
    const wrapper = factory();
    expect(wrapper.vm).toBeTruthy();
  });

  it('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
