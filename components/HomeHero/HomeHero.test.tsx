import { render, screen } from '@/test-utils';
import { HomeHero } from './HomeHero';

describe('HomeHero component', () => {
  it('correct acuity button text and link', () => {
    expect.assertions(2);
    render(<HomeHero />);
    expect(screen.getByRole('link')).toHaveTextContent('Estimados Aquí');
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://falconpoolsprhablaclaro.as.me/schedule/9586f425'
    );
  });
});
