import { render, screen } from '@/test-utils';
import Page from './Page';

describe('Page component', () => {
  it('renders header and footer', () => {
    render(<Page />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
